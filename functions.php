<?php
//
// goshawk Functions
// --------------------------------------------------


// Siloed goshawk function groups
// ---------------------------------------
require_once("inc/rarebird-custom/helpers.php");
// require_once("inc/rarebird-custom/navigation.php");
require_once("inc/rarebird-custom/rogue.php");
require_once("inc/rarebird-custom/login.php");
// require_once("inc/rarebird-custom/shortcodes.php");
// require_once("inc/rarebird-custom/comments.php");
require_once("inc/rarebird-custom/widgets.php");
require_once("inc/rarebird-custom/content.php");
require_once("inc/rarebird-custom/scripts.php");
require_once("inc/rarebird-custom/media.php");

// Include ACF Blocks
require_once("inc/acf-blocks.php");


// goshawk theme setup
// ---------------------------------------
add_action('after_setup_theme', 'goshawk_setup');

function goshawk_setup() {
  add_theme_support( 'automatic-feed-links' );
  add_theme_support( 'post-thumbnails' );
  add_theme_support( 'align-wide' );
  add_theme_support( 'title-tag' );
  add_theme_support( 'editor-styles' );
  add_editor_style( 'editor-style.css' );

	register_nav_menus(
		array( 'main-menu' => __( 'Main Menu', 'goshawk' ) )
	);
}

function goshawk_custom_logo_setup() {
    $defaults = array(
      'height'      => 100,
      'width'       => 400,
      'flex-height' => true,
      'flex-width'  => true,
      'header-text' => array( 'site-title', 'site-description' ),
  );
  add_theme_support( 'custom-logo', $defaults );

}
add_action( 'after_setup_theme', 'goshawk_custom_logo_setup' );

 // To set post count format in sidebar
function categories_postcount_filter ($variable) {
  $variable = str_replace('(', '<span class="post-count">(', $variable);
  $variable = str_replace(')', ')</span>', $variable);
  return $variable;
}
add_filter('wp_list_categories','categories_postcount_filter');

function archive_postcount_filter ($variable) {
   $variable = str_replace('(', '<span class="post-count">(', $variable);
   $variable = str_replace(')', ')</span>', $variable);
   return $variable;
}
add_filter('get_archives_link', 'archive_postcount_filter');

// Add Editor back to default Posts page
function fix_no_editor_on_posts_page($post) {

   if( $post->ID != get_option( 'page_for_posts' ) ) { return; }

   remove_action( 'edit_form_after_title', '_wp_posts_page_notice' );
   add_post_type_support( 'page', 'editor' );

}
add_action( 'edit_form_after_title', 'fix_no_editor_on_posts_page', 0 );

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

if(!function_exists( 'editor_color_setup' ) ) {
  function editor_color_setup() {
    add_theme_support( 'editor-color-palette', array(
      array(
          'name' => __( 'Dark Blue', 'themeLangDomain' ),
          'slug' => 'blue-dark',
          'color' => '#2d4459',
      ),
      array(
          'name' => __( 'Blue', 'themeLangDomain' ),
          'slug' => 'blue',
          'color' => '#486582',
      ),
      array(
          'name' => __( 'Light Blue', 'themeLangDomain' ),
          'slug' => 'blue-light',
          'color' => '#5090cd',
      ),
      array(
          'name' => __( 'Dark Gray', 'themeLangDomain' ),
          'slug' => 'gray-dark',
          'color' => '#727b85',
      ),
      array(
          'name' => __( 'Gray', 'themeLangDomain' ),
          'slug' => 'gray',
          'color' => '#cbd1d5',
      ),
      array(
          'name' => __( 'Light Gray', 'themeLangDomain' ),
          'slug' => 'gray-light',
          'color' => '#e4e9ed',
      ),
      array(
          'name' => __( 'Black', 'themeLangDomain' ),
          'slug' => 'black',
          'color' => '#26282b',
      ),
      array(
          'name' => __( 'Lighter Black', 'themeLangDomain' ),
          'slug' => 'lighter-black',
          'color' => '#464b52',
      ),
      array(
          'name' => __( 'White', 'themeLangDomain' ),
          'slug' => 'white',
          'color' => '#ffffff',
      ),
    ) );
  }

  add_action( 'after_setup_theme', 'editor_color_setup' );
}

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

// Require Authentication for Rest API
add_filter( 'rest_authentication_errors', function( $result ) {
    if ( ! empty( $result ) ) {
        return $result;
    }
    if ( ! is_user_logged_in() ) {
        return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );
    }
    return $result;
});
