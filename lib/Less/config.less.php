<?php

$config["minify_css"]           = FALSE;
$config["preserve_comments"]    = FALSE;
$config["debug_comments"]       = TRUE;
$config["base_path"]            = $_SERVER['DOCUMENT_ROOT'] . "/content/themes/rb-northamericansigns/assets";
$config["css_output_dir"]       = "css";      // relative to base_path
$config["less_dir"]             = "less";     // relative to base_path
$config["css_url"]              = "//{$_SERVER['HTTP_HOST']}/content/themes/rb-northamericansigns/assets/css";
$config["import_path"]          = array(
	$config["less_dir"],
	// $config["less_dir"] . "/bootstrap",
  $config["base_path"],
	$config["base_path"] . "/js",
);
$config["enable_cache"]         = FALSE;
$config["cache_dir"]            = "";
$config["allow_full_less_path"] = FALSE;
$config["header"]               = <<<HEADER

         8D
    88888888888O
  DZ       888888O
              88888
               88888
                8888O
                 8888
                 8888
                 888O
                 88888888888O
                O888888888888888
                8D        O8888888
              8              888888
                               88888
                                8888O
                                 8888
                                  888
                                  888
                                  888
                                  88
                                  8O
                                 8O
                                O
 ____                ___   _         _
|  _ \ __ _ _ __ ___\_  | (_)_ __ __| |
| |_) / _` | '__/ _ \ )_ \| | '__/ _` |
|  _ < (_| | | |  __/   ) | | | | (_| |
|_| \_\__,_|_|  \___|  /_/|_|_|  \__,_|

Copyright(c) {{year}}, Rare Bird Inc. http://rarebirdinc.com | @rarebirdinc

Do not reproduce without written consent. All rights reserved.

----------------------------------------------------------------------------
___  ____    _  _ ____ ___    ____ ___  _ ___
|  \ |  |    |\ | |  |  |     |___ |  \ |  |
|__/ |__|    | \| |__|  |     |___ |__/ |  |
___ _  _ _ ____    ____ _ _    ____
 |  |__| | [__     |___ | |    |___
 |  |  | | ___]    |    | |___ |___

This file is compiled from LESS files.
Any changes made here will be overwritten.

Generated from: {{less_file}}
Compiled At:    {{compiled_at}}
{{debug}}
----------------------------------------------------------------------------
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
----------------------------------------------------------------------------

HEADER;

