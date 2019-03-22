<?php
//
// goshawk Functions
// --------------------------------------------------


// Siloed goshawk function groups
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
require_once("custom/editor_styles.php");


// goshawk theme setup
// ---------------------------------------
add_action('after_setup_theme', 'goshawk_setup');

function goshawk_setup() {
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'post-thumbnails' );
  add_theme_support( 'custom-logo' );

	register_nav_menus(
		array( 'main-menu' => __( 'Main Menu', 'goshawk' ) )
	);
}

// Enable Options Tab
if( function_exists('acf_add_options_page') ) {
  acf_add_options_page();
}

// Set up Style References
function goshawk_theme_styles(){

  wp_enqueue_style( 'main', get_template_directory_uri() . '/dist/css/global.css');
  wp_enqueue_style( 'fonts', 'https://fonts.googleapis.com/css?family=Lato:400,400i,700' );

}
add_action( 'wp_enqueue_scripts', 'goshawk_theme_styles' );

// Handle Page Title
add_action( 'after_setup_theme', 'goshawk_theme_setup' );
function goshawk_theme_setup() {
    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support( 'title-tag' );
}
