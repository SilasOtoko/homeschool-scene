<?php

/**
 * CUSTOM FUNCTIONS
 */



/**
 * DETECT IF ON LOGIN PAGE
 *
 * Simply detect if currently on the login or register pages
 * returns boolean
 */
if(!function_exists('is_login_page')){
	function is_login_page(){
		return in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php'));
	} //EF
}

/**
 * ADD FILTERS TO MULTIPLE ITEMS WITH SAME FUNCTION
 *
 * Provide list of filters
 * Provide function to be applied
 */
if(!function_exists('add_filters')){
	function add_filters($tags, $function){
		foreach($tags as $tag) add_filter($tag, $function);
	} //EF
}

add_filter('upload_dir', 'fix_custom_media_dir');
  function fix_custom_media_dir($path){
      $path['path']    = preg_replace('/\/wp\//', '/', $path['path']);
      $path['url']     = preg_replace('/\/wp\//', '/', $path['url']);
      $path['basedir'] = preg_replace('/\/wp\//', '/', $path['basedir']);
      $path['baseurl'] = preg_replace('/\/wp\//', '/', $path['baseurl']);
      return $path;
}

#EOF