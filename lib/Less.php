<?php

require_once "Less/lessc.inc.php";

/**
 * Less Compiler / Cacher / Helper Library
 */

class Less {

	// ---------------------------------------------------- Instances -----

	private static $_instances = array();

	// ------------------------------------------------------- Config -----

	/**
	 * Default config values
	 *
	 * @var  array
	 */
	protected $config = array(
		"minify_css"           => FALSE,
		"preserve_comments"    => FALSE,
		"debug_comments"       => TRUE,
		"base_path"            => NULL,
		"css_output_dir"       => "css",
		"less_dir"             => "css/less",
		"css_url"              => NULL,
		"import_path"          => array(),
		"enable_cache"         => FALSE,
		"cache_dir"            => "",
		"allow_full_less_path" => FALSE,
		"header"               => "",        // the header comment for compiled stylesheets
	);

	protected $less_file;

	protected $config_file = FALSE;

	protected $_less_compiler;

	protected $_hidden_server_paths;
	protected $output_messages = array();

	protected $compiled_css;
	protected $output_method = "file";

	// --------------------------------------------------------------------
	// Static Functions
	// --------------------------------------------------------------------


	public static function stylesheet($less_file, $instance_name="default") {
		if (class_exists('CI_Controller')) {
			$CI =& get_instance();
			$CI->load->library('less');
			$less = $CI->less;
			self::$_instances[$instance_name] =& $CI->less;
		} else {
			$less = self::get_instance($instance_name);
		}
		try {
			$output = $less->compile_stylesheet($less_file);
		} catch (Exception $e) {
			$error_msg = str_replace(array(
				$_SERVER['DOCUMENT_ROOT'],
				dirname($_SERVER['DOCUMENT_ROOT']),
				realpath($_SERVER['DOCUMENT_ROOT']),
				realpath(dirname($_SERVER['DOCUMENT_ROOT'])),
			), '',  $e->getMessage());
			return "\n\n<!-- \nError compiling LESS: " . $error_msg  . "\n-->\n\n";
		}
		return $output;
	}


    /**
     * gets the instance with the given name, e.g. "wordpress"
     * uses lazy initialization
     *
     * @param string $instance_name
     */
    public static function get_instance($instance_name="default") {
        if ( ! array_key_exists($instance_name, self::$_instances) || ! self::$_instances[$instance_name] instanceof Less) {
            self::$_instances[$instance_name] = new self();
        }

        return self::$_instances[$instance_name];
    }

	// --------------------------------------------------------------------
	// Initialization / Config Functions
	// --------------------------------------------------------------------

	/**
	 * Constructor
	 */
	public function __construct($config=array()) {
		$this->_less_compiler     = new lessc;

		/**
		 * Load up the config
		 */
		// if a config array is passed in
		if (is_array($config) && count($config)) {
			$this->init($config);

		// if a config file is passed in
		} elseif (!empty($config) && is_file((string) $config)) {
			$this->config_file = $config;
			$this->load_config_file($this->config_file);

		// if we are inside CodeIgniter, load the config via standard CodeIgniter loader
		} elseif (class_exists('CI_Controller') && function_exists('get_instance')) {
			$CI =& get_instance();
			$CI->config->load('less', TRUE, TRUE);
			$this->config = $CI->config->item('less');

		// load the default config file
		} else {
			$this->config_file = dirname(__FILE__) . "/Less/config.less.php";
			if ($this->config_file && is_file($this->config_file)) {
				$this->load_config_file($this->config_file);
			} else {
				$this->init();
			}
		}
	}


	/**
	 * Loads config settings from a file
	 *
	 * @param   string  $config_file  Full path to the config file
	 * @return  this    $this         Chainable
	 */
	public function load_config_file($config_file) {
		if (!is_file($config_file)) {
			$this->message("Invalid config file. {$config_file} does not exist or is not readable.");
		}
		require_once "$config_file";
		$this->init($config);
		return $this;
	}


	/**
	 * Initialize the config settings / handle any processing of config
	 *
	 * @param   array  $config  array of config options
	 * @return  this   $this    Chainable
	 */
	public function init( $config = array() ) {
		/**
		 * init default values
		 */
		$defaults              = $this->config;
		$defaults['base_path'] = $_SERVER['DOCUMENT_ROOT'];
		$config                = array_merge($defaults, $config);


		$this->config($config);
	}


	/**
	 * Get or Set specific config options
	 *
	 * @param string $key
	 * @param string $newvalue
	 * @return mixed
	 */
	public function config($key=NULL, $newvalue=NULL) {
		// multiple values passed as `key => value` array
		if (is_array($key) && empty($newvalue)) {
			foreach ($key as $k => $v) {
				$this->config($k, $v);
			}
			return $this->config;

		// Set (key and value passed)
		} elseif(!empty($key) && !empty($newvalue)) {
			return $this->set_config($key, $newvalue);

		// Get (only key passed)
		} elseif(!empty($key)) {
			return $this->config[$key];
		}

		// return $config array() if nothing was passed in
		return $this->config;
	}


	public function set_config($key, $value) {
		switch ($key) {
			case 'import_path':
				$this->add_import_path($value);
				break;
			case 'preserve_comments':
				$this->config[$key] = $value;
				$this->_less_compiler->setPreserveComments($this->config['preserve_comments']);
				break;
			case 'minify_css':
				$this->config[$key] = $value;
				$this->_less_compiler->setFormatter($this->config['minify_css'] ? "compressed" : "lessjs");
				break;
			default:
				$this->config[$key] = $value;
				break;
		}
		return $this;
	}


	/**
	 * Add an "include" path for less files
	 * @param string $path path to add to include paths
	 */
	public function add_import_path($path) {
		if (is_array($path)) {
			foreach ($path as $p) {
				$this->add_import_path($p);
			}
		} else {
			if (!is_dir($path)) {
				$path = $this->reduce_double_slashes($this->config("base_path") . "/" . $path);
			}
			if (is_dir($path)) {
				$import_path   = $this->config('import_path');
				$import_path[] = realpath($path);
				$this->config['import_path'] = array_unique($import_path);
				$this->_less_compiler->setImportDir($this->config['import_path']);
			}
		}
		return $this;
	}


	/**
	 * Compile less file to output file
	 *
	 * @param   String  $file  a path the the less file relative to `config => less_dir`
	 * @return  String         the url of the compiled css file
	 */
	public function compile_stylesheet($file) {
        $this->compiled_at  = FALSE;
        $this->less_file    = $this->get_path_to_less($file);
        $out_file           = $this->get_less_output_path($file);
		if ($out_file && $this->config['enable_cache']) {
			$this->compile_cached_less($this->less_file, $out_file);
		} else {
            $compiled_css   = $this->_less_compiler->compileFile($this->less_file);
            $css            = $this->prepare_css($compiled_css);
			if ($out_file) {
				if (!@file_put_contents($out_file, $css)) {
					$this->message("Unable to write to file: <base_path>" . str_replace($this->config['base_path'], '', $out_file));
					return $this->build_inline_style_tag($this->prepare_css($compiled_css), $file);
				}
			} else {
				// display the compiled css inline since we can't write to the output file
				return $this->build_inline_style_tag($css, $file);
			}
		}
		$output_url = "/" . ltrim(str_replace($_SERVER['DOCUMENT_ROOT'], "", $out_file), "/");
		return $this->build_link_tag($output_url, $file);
	}




	public function message($msg) {
		$this->output_messages[] = $msg;
		return $this;
	}


	public function build_link_tag($css_url, $less_file=NULL) {
		$tag = '<link href="' . $css_url . '" rel="stylesheet" type="text/css" class="compiled-less"';
		if ($less_file) {
			$tag .= ' data-less-src="' . $this->entities($less_file) . '"';
		}
		if ($this->compiled_at) {
			$tag .= ' data-less-compiled-at="' . $this->entities($this->compiled_at) . '"';
		}
		$tag .= '>';
		return $tag;
	}


	public function build_inline_style_tag($css, $less_file=NULL) {
		$tag = '<style class="compiled-less"';
		if ($less_file) {
			$tag .= ' data-less-src="' . $this->entities($less_file) . '"';
		}
		if ($this->compiled_at) {
			$tag .= ' data-less-compiled-at="' . $this->entities($this->compiled_at) . '"';
		}
		$tag .= ">\n{$css}\n</style>";
		return $tag;
	}


	/**
	 * Apply final adjustments to compiled CSS
	 * @param  string $css the compiled css
	 * @return string      the finalized css
	 */
	public function prepare_css($css) {
        $this->compiled_at  = date('Y-m-d h:i:sa');
        $header             = $this->generate_header();
        $messages           = "";
		if(is_array($this->output_messages) && count($this->output_messages)) {
			$messages = $this->commentize(implode("\n\n", $this->output_messages)) . PHP_EOL;
		}
		// remove icon-font comments
		$css = preg_replace("#^/\*\s'.'\s\*/\n#uimx", "", $css);
		$css = $header . $messages . $css;
		return $css;
	}


	public function generate_header() {
		if (empty($this->config['header'])) {
			return "";
		}
		$header = preg_replace_callback("/\{\{\s*(.+?)\s*\}\}/uimx",array($this, 'render_header_tag'), $this->config['header']);
		$header = trim($header, PHP_EOL);
		$header = $this->commentize($header) . PHP_EOL;
		return $header;
	}

	protected function commentize($str) {
		if (empty($str)) {
			return "";
		}
		$out  = '/**' . PHP_EOL;
		$out .= preg_replace("/^(.*?)$/uimx", " * $1", $str);
		$out .= PHP_EOL . ' */' . PHP_EOL;
		return $out;
	}

	protected function render_header_tag($matches) {
		$var = trim($matches[1]);
		switch ($var) {
			case 'year':
				return date('Y');
				break;

			case 'less_file':
				return ltrim($this->clean_server_path($this->less_file), '/');
				break;

			case 'compiled_at':
				return $this->compiled_at;
				break;

			case 'debug':
				if ($this->config['debug_comments']) {
					return $this->debug_info();
				}
		}
		return "";
	}


	protected function debug_info() {
		$out  = "\n\nConfig:\n";
		$out .= "  " . (($this->config['minify_css'])         ? "✓" : "✗") . " minify_css\n";
		$out .= "  " . (($this->config['preserve_comments'])  ? "✓" : "✗") . " preserve_comments\n";
		$out .= "  " . (($this->config['enable_cache'])       ? "✓" : "✗") . " enable_cache\n";
		$out .= PHP_EOL . PHP_EOL;

		$out .= "Parsed Files:\n";
		foreach ($this->_less_compiler->allParsedFiles() as $file => $mtime) {
			$out .= "  - " . ltrim($this->clean_server_path($file), '/') . "\n";
		}

		if(is_array($this->_less_compiler->importDir) && count($this->_less_compiler->importDir)) {
			$out .= PHP_EOL . PHP_EOL;
			$out .= "Import Directories:\n";
			foreach ($this->_less_compiler->importDir as $dir) {
				$out .= "  - " . $this->clean_server_path($dir, TRUE) . PHP_EOL;
			}
		}
		return $out;
	}


	/**
	 * Compile a less file using a cache file to prime / store the result
	 *
	 * @param   string  $input_file   the .less input file
	 * @param   string  $output_file  the .css output file
	 *
	 * @return  [type]                [description]
	 */
	protected function compile_cached_less($input_file, $output_file) {
		$this->compiled_at = FALSE;
		if (empty($this->config['cache_dir']) || !is_dir($this->config['cache_dir'])) {
			$this->message("Invalid less cache dir.");
			return FALSE;
		}
		// load the cache
		$cache_file = $this->get_less_cache_file($input_file);
		if (file_exists($cache_file)) {
			$cache = unserialize(file_get_contents($cache_file));
		} else {
			$cache = $input_file;
		}

		$new_cache = $this->_less_compiler->cachedCompile($cache);

		if (!is_array($cache) || $new_cache["updated"] > $cache["updated"]) {
			$new_cache['compiled'] = $this->prepare_css($new_cache['compiled']);
			file_put_contents($cache_file, serialize($new_cache));
			file_put_contents($output_file, $new_cache['compiled']);
		}

		// TODO
	}


	/**
	 * Locate the cache file associated with a .less file
	 *
	 * @param   string  $input_file  the .less input file
	 *
	 * @return  string               the path to the associated cache file
	 */
	protected function get_less_cache_file($input_file) {
		if (empty($this->config['cache_dir']) || !is_dir($this->config['cache_dir'])) {
			$this->message('Invalid cache dir');
			return FALSE;
		}
		$input_file = str_replace(array(
			self::reduce_double_slashes($this->config['base_path'] . '/' . $this->config["less_dir"]),
			$this->config['base_path'],
			$_SERVER['DOCUMENT_ROOT'],
			dirname($_SERVER['DOCUMENT_ROOT']),
			$this->config['less_dir'],
		), '', $input_file);
		$cache_file = trim(preg_replace('/[^0-9a-z\.]+/i', '-', $input_file), '-') . ".cache";
		return self::reduce_double_slashes($this->config['cache_dir'] . "/" . $cache_file);
	}


	/**
	 * Locate (using conventions) the path to a .less file
	 *
	 * @param   string   $file      the .less file to find
	 * @param   mixed    $relative  relative to the less_dir (or a path to be relative to)
	 *
	 * @return  [type]              [description]
	 */
	protected function get_path_to_less($file=NULL, $relative=FALSE) {
		if ($this->config["allow_full_less_path"] && is_file($file)) {
			return $file;
		}
		$file = self::reduce_double_slashes($this->config['base_path'] . "/" . $this->config["less_dir"] . "/" . $file);
		if ($relative) {
			$root = ($relative === TRUE) ?
				self::reduce_double_slashes($this->config['base_path'] . "/" . $this->config["less_dir"] . "/") :
				self::reduce_double_slashes("{$relative}/");
			$file = str_replace($root, '', $file);
		}
		return $file;
	}


	/**
	 * Locate the .css output file
	 *
	 * @param   string  $file  get the appropriate .css output path for a .less file
	 *
	 * @return  string         the path to the compiled .css output file
	 */
	protected function get_less_output_path($less_path) {
		$relative     = $this->get_path_to_less($less_path, TRUE);
		$path         = self::reduce_double_slashes($this->config['base_path'] . "/" . $this->config['css_output_dir']);
		$file         = basename($less_path);
		$relative_dir = ($file == $relative) ? "" : dirname($relative);
		foreach (explode("/", trim($relative_dir, "/")) as $dir) {
			$path = self::reduce_double_slashes($path . "/" . $dir);
			if (!is_dir($path)) {
				if (!@mkdir($path, 0775) || !is_dir($path)) {
					$this->message("Unable to create output directory: <base_path>" . str_replace($this->config['base_path'], '', $path));
					return FALSE;
				}
			}
		}
		$output_file = self::reduce_double_slashes($path . "/" . self::path_filename($less_path) . ".css");
		return $output_file;
	}


	// --------------------------------------------------------------------
	// Utility / Helper functions
	// --------------------------------------------------------------------

	protected function clean_server_path($path, $humanize=FALSE) {
		if (!is_array($this->_hidden_server_paths) || !count($this->_hidden_server_paths)) {
			$this->_hidden_server_paths = array_unique(array(
				// self::reduce_double_slashes($this->config['base_path'] . '/' . $this->config["less_dir"]),
				// realpath(self::reduce_double_slashes($this->config['base_path'] . '/' . $this->config["less_dir"])),
				$this->config['base_path'],
				realpath($this->config['base_path']),
				$_SERVER['DOCUMENT_ROOT'],
				realpath($_SERVER['DOCUMENT_ROOT']),
				dirname($_SERVER['DOCUMENT_ROOT']),
				realpath(dirname($_SERVER['DOCUMENT_ROOT'])),
				// $this->config['less_dir'],
			));
		}
		if ($humanize) {
			$output = $path;
			$output = str_replace(array(
				$this->config['base_path'],
				realpath($this->config['base_path']),
			), "<base_path>", $output);
			$output = str_replace(array(
				$_SERVER['DOCUMENT_ROOT'],
				realpath($_SERVER['DOCUMENT_ROOT']),
				dirname($_SERVER['DOCUMENT_ROOT']),
				realpath(dirname($_SERVER['DOCUMENT_ROOT'])),
			), "<document_root>", $output);
			return $output;
		}
		return str_replace($this->_hidden_server_paths, '', $path);
	}


	/**
	 * Reduce Double Slashes
	 *
	 * Converts double slashes in a string to a single slash,
	 * except those found in http://
	 *
	 * http://www.some-site.com//index.php
	 *
	 * becomes:
	 *
	 * http://www.some-site.com/index.php
	 *
	 * @access	public
	 * @param	string
	 * @return	string
	 */
	protected static function reduce_double_slashes($str) {
		return preg_replace("#(^|[^:])//+#", "\\1/", $str);
	}

	public function entities($str) {
		return htmlentities($str, ENT_QUOTES, 'UTF-8', FALSE);
	}

	/**
	 * Compatability with PHP < 5.2.0 which can't do
	 *     pathinfo($file, PATHINFO_FILENAME)
	 * and shouldn't really be used anywhere since
	 * it was released 02-Nov-2006, but hey..
	 */
	public static function path_filename($file) {
		if (defined('PATHINFO_FILENAME')) {
			return pathinfo($file, PATHINFO_FILENAME);
		}
        $info = pathinfo($file);
        return substr($info['basename'], 0, strrpos($info['basename'], '.'));

	}

}


/* End of file assets.php */