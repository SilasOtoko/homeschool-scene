<?php

/**
 * DISGUISE WP AND THE LIKE
 */



/**
 * REMOVE UNWANTED ACTIONS
 *
 * remove uneccessary items
 */

add_filter('the_generator', '__return_false');

add_action('init', 'rb_head_cleanup');
function rb_head_cleanup(){
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'feed_links', 2);
	remove_action('wp_head', 'feed_links_extra', 3);
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
	remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
	remove_action('wp_head', 'wp_generator');

	global $wp_widget_factory;
	if(isset($wp_widget_factory->widgets['WP_Widget_Recent_Comments'])) {
		remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
	}

	if (!class_exists('WPSEO_Frontend')) {
		remove_action('wp_head', 'rel_canonical');
		add_action('wp_head', 'rb_rel_canonical');
	}
} //EF

function rb_rel_canonical(){
	global $wp_the_query;
	if(!is_singular()){
		return;
	}
	if(!$id = $wp_the_query->get_queried_object_id()){
		return;
	}
	$link = get_permalink($id);
	echo "\t<link rel=\"canonical\" href=\"$link\">\n";
} //EF


/**
 * HIDE THEME|PLUGIN-EDITOR FROM USERS
 *
 * don't allow people to break files!
 */

if(is_admin() && !defined('DISALLOW_FILE_EDIT')){
	add_action('admin_init', 'rb_remove_admin', 102);
}
function rb_remove_admin(){
	remove_submenu_page('themes.php', 'theme-editor.php');
	remove_submenu_page('plugins.php', 'plugin-editor.php');
} //EF


/**
 * REWRITE THEME/PLUGIN ASSET URLS
 *
 * Rewrite /birdpress-theme/themes/theme-name/css/    to /css/
 * Rewrite /birdpress-theme/themes/theme-name/js/     to /js/
 * Rewrite /birdpress-theme/themes/theme-name/images/ to /images/
 * Rewrite /birdpress-theme/plugins/                  to /plugins/
 */

add_action('generate_rewrite_rules', 'rb_add_rewrites');
function rb_add_rewrites($content){
	global $wp_rewrite;
	$stylesheet_dir = get_stylesheet_directory();
	$template_dir   = get_template_directory();

	$theme_name = next(explode('/themes/', $stylesheet_dir));
	$asset_non_wp_rules = array(
		'assets/(.*)'     => 'birdpress-theme/themes/'. $theme_name . '/assets/$1',
		'css/(.*)'     => 'birdpress-theme/themes/'. $theme_name . '/assets/css/$1',
		'less/(.*)'    => 'birdpress-theme/themes/'. $theme_name . '/assets/less/$1',
		'js/(.*)'      => 'birdpress-theme/themes/'. $theme_name . '/assets/js/$1',
		'images/(.*)'  => 'birdpress-theme/themes/'. $theme_name . '/assets/images/$1',
		'pdf/(.*)'     => 'birdpress-theme/themes/'. $theme_name . '/assets/pdf/$1',
		'fonts/(.*)'   => 'birdpress-theme/themes/' . $theme_name . '/assets/fonts/$1',
		'plugins/(.*)' => 'birdpress-theme/plugins/$1',
		'uploads/(.*)' => 'birdpress-theme/uploads/$1'
	);
	// add rules if parent and child theme exist
	if($stylesheet_dir != $template_dir){
		$theme_name = next(explode('/themes/', $template_dir));
		$asset_non_wp_rules = array_merge($asset_non_wp_rules, array(
			'pcss/(.*)'    => 'birdpress-theme/themes/'. $theme_name . '/css/$1',
			'pless/(.*)'   => 'birdpress-theme/themes/'. $theme_name . '/less/$1',
			'pjs/(.*)'     => 'birdpress-theme/themes/'. $theme_name . '/js/$1',
			'pimages/(.*)' => 'birdpress-theme/themes/'. $theme_name . '/images/$1',
			'ppdf/(.*)'    => 'birdpress-theme/themes/'. $theme_name . '/pdf/$1',
			'pfonts/(.*)'  => 'birdpress-theme/themes/' . $theme_name . '/fonts/$1'
		));
	}
	$wp_rewrite->non_wp_rules += $asset_non_wp_rules;
} //EF


/**
 * CLEAN AUTOGENERATED WordPress URLS
 *
 * alter output of theme/plugin URLs to work with rewrites
 */

// clean asset URLs
function rb_clean_assets($content) {
	$theme_name = next(explode('/themes/', $content));
	$current_path = '/birdpress-theme/themes/' . $theme_name;
	$new_path = '';
	$content = str_replace($current_path, $new_path, $content);
	return $content;
} //Ef

// clean plugin URLs
function rb_clean_plugins($content) {
	$current_path = '/birdpress-theme/plugins';
	$new_path = '/plugins';
	$content = str_replace($current_path, $new_path, $content);
	return $content;
} //Ef

$_plugin_filters = array('plugins_url', 'script_loader_src', 'style_loader_src');
$_asset_filters = array('bloginfo', 'stylesheet_directory_uri', 'template_directory_uri');

if(!is_admin() && function_exists('add_filters')){
	add_filters($_plugin_filters, 'rb_clean_plugins');
	add_filters($_asset_filters, 'rb_clean_assets');
} // is_admin


/**
 * Root relative URLs
 *
 * WordPress likes to use absolute URLs on everything - let's clean that up.
 * Inspired by http://www.456bereastreet.com/archive/201010/how_to_make_wordpress_urls_root_relative/
 */
function rb_relative_url($input) {
	preg_match('|https?://([^/]+)(/.*)|i', $input, $matches);
	if (!isset($matches[1]) || !isset($matches[2])) {
		return $input;
	} elseif (($matches[1] === $_SERVER['SERVER_NAME']) || $matches[1] === $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT']) {
		return wp_make_link_relative($input);
	} else {
		return $input;
	}
} //EF


if(!is_admin() && !is_login_page()){
	$_relative_url_filters = array(
		'bloginfo_url',
	    'the_permalink',
	    'wp_list_pages',
	    'wp_list_categories',
	    'soil_wp_nav_menu_item',
	    'the_content_more_link',
	    'the_tags',
	    'get_pagenum_link',
	    'get_comment_link',
	    'month_link',
	    'day_link',
	    'year_link',
	    'tag_link',
	    'the_author_posts_link',
	    'script_loader_src',
	    'style_loader_src'
	);
	add_filters($_relative_url_filters, 'rb_relative_url');
}

/**
 * Filter out content from thumbnails
 */
add_filter('wp_get_attachment_image_attributes', 'rb_filter_attachment_atts', 99, 3);
function rb_filter_attachment_atts($attr, $attachment, $size){
	$attr['src'] = str_replace(get_site_url(null, '/wp-content'), "", $attr['src']);
	return $attr;
} //EF

#EOF