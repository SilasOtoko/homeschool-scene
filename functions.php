<?php
//
// Birdpress Functions
// --------------------------------------------------


// Siloed Birdpress function groups
// ---------------------------------------
require_once("custom/helpers.php");
// require_once("custom/navigation.php");
require_once("custom/rogue.php");
require_once("custom/login.php");
// require_once("custom/shortcodes.php");
// require_once("custom/comments.php");
require_once("custom/widgets.php");
require_once("custom/content.php");
require_once("custom/scripts.php");
// require_once("custom/editor_styles.php");


// Birdpress theme setup
// ---------------------------------------
add_action('after_setup_theme', 'birdpress_setup');

function birdpress_setup() {
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'post-thumbnails' );

	register_nav_menus(
		array( 'main-menu' => __( 'Main Menu', 'birdpress' ) )
	);
}

// Enable Options Tab
if( function_exists('acf_add_options_page') ) {
  acf_add_options_page();
}

// Set up Style References
function goshawk_theme_styles(){

  wp_enqueue_style( 'main', get_template_directory_uri() . '/dist/css/global.css');
  // wp_enqueue_style( 'fonts', 'https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700' );

}
add_action( 'wp_enqueue_scripts', 'goshawk_theme_styles' );

