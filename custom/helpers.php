<?php
//
// Birdpress Helper Functions
// --------------------------------------------------


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


// Custom media upload directory
// ---------------------------------------
add_filter('upload_dir', 'fix_custom_media_dir');

function fix_custom_media_dir($path){
	$path['path']    = preg_replace('/\/wp\//', '/', $path['path']);
	$path['url']     = preg_replace('/\/wp\//', '/', $path['url']);
	$path['basedir'] = preg_replace('/\/wp\//', '/', $path['basedir']);
	$path['baseurl'] = preg_replace('/\/wp\//', '/', $path['baseurl']);
	return $path;
}


// Category list creation (may need to be rewritten... used maybe in HHP?)
// ---------------------------------------
function birdpress_catz($glue) {
	$current_cat = single_cat_title( '', false );
	$separator = "\n";
	$cats = explode( $separator, get_the_category_list($separator) );

	foreach ( $cats as $i => $str ) {
		if ( strstr( $str, ">$current_cat<" ) ) {
			unset($cats[$i]);
			break;
		}
	}

	if ( empty($cats) )
	return false;
	return trim(join( $glue, $cats ));
}


// Tag list creation (may need to be rewritten... used maybe in HHP?)
// ---------------------------------------
function birdpress_tag_it($glue) {
	$current_tag = single_tag_title( '', '',  false );
	$separator = "\n";
	$tags = explode( $separator, get_the_tag_list( "", "$separator", "" ) );

	foreach ( $tags as $i => $str ) {
		if ( strstr( $str, ">$current_tag<" ) ) {
			unset($tags[$i]);
			break;
		}
	}

	if ( empty($tags) ) {
		return false;
	}

	return trim(join( $glue, $tags ));
}

#EOF
