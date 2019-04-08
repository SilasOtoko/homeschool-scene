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
  add_theme_support( 'align-wide' );
  add_theme_support( 'title-tag' );

	register_nav_menus(
		array( 'main-menu' => __( 'Main Menu', 'goshawk' ) )
	);
}

function goshawk_custom_logo_setup() {
    $defaults = array(
      'flex-width' => true,
      'header-text' => array( 'site-title', 'site-description' ),
    );
    add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'goshawk_custom_logo_setup' );

 // To set post count format in sidebar
function categories_postcount_filter ($variable) {
  $variable = str_replace('(', '<span class="post-count">', $variable);
  $variable = str_replace(')', ' Posts</span>', $variable);
  return $variable;
}
add_filter('wp_list_categories','categories_postcount_filter');

function archive_postcount_filter ($variable) {
   $variable = str_replace('(', '<span class="post-count">', $variable);
   $variable = str_replace(')', ' Posts</span>', $variable);
   return $variable;
}
add_filter('get_archives_link', 'archive_postcount_filter');

// Add default posts and comments RSS feed links to head.
  add_theme_support( 'automatic-feed-links' );

// Enable Options Tab
if( function_exists('acf_add_options_page') ) {
  acf_add_options_page();
}

// Set up Style References
function goshawk_theme_styles(){

  wp_enqueue_style( 'goshawk-style', get_stylesheet_uri() );
  wp_enqueue_style( 'fonts', 'https://fonts.googleapis.com/css?family=Lato:400,400i,700' );

}
add_action( 'wp_enqueue_scripts', 'goshawk_theme_styles' );

add_theme_support( 'editor-color-palette', array(
    array(
        'name' => __( 'Dark Blue', 'themeLangDomain' ),
        'slug' => 'blue-dark',
        'color' => '#323F4B',
    ),
    array(
        'name' => __( 'Blue', 'themeLangDomain' ),
        'slug' => 'blue',
        'color' => '#486581',
    ),
    array(
        'name' => __( 'Light Blue', 'themeLangDomain' ),
        'slug' => 'blue-light',
        'color' => '#7B8189',
    ),
    array(
        'name' => __( 'Dark Gray', 'themeLangDomain' ),
        'slug' => 'gray-dark',
        'color' => '#7B8189',
    ),
    array(
        'name' => __( 'Gray', 'themeLangDomain' ),
        'slug' => 'gray',
        'color' => '#A5A9AF',
    ),
    array(
        'name' => __( 'Light Gray', 'themeLangDomain' ),
        'slug' => 'gray-light',
        'color' => '#E4E7EB',
    ),
    array(
        'name' => __( 'Black', 'themeLangDomain' ),
        'slug' => 'black',
        'color' => '#212932',
    ),
    array(
        'name' => __( 'Light Black', 'themeLangDomain' ),
        'slug' => 'black-light',
        'color' => '#666666',
    ),
    array(
        'name' => __( 'White', 'themeLangDomain' ),
        'slug' => 'white',
        'color' => '#ffffff',
    ),
) );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';
