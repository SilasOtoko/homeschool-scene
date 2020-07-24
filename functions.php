<?php
//
// homeschoolscene Functions
// --------------------------------------------------


// Siloed homeschoolscene function groups
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

// homeschoolscene theme setup
// ---------------------------------------
add_action('after_setup_theme', 'homeschoolscene_setup');

function homeschoolscene_setup() {
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'editor-styles' );
    add_editor_style( 'editor-style.css' );

    register_nav_menus(
        array( 'main-menu' => __( 'Main Menu', 'homeschoolscene' ) )
    );
}

function homeschoolscene_custom_logo_setup() {
        $defaults = array(
            'height'      => 100,
            'width'       => 400,
            'flex-height' => true,
            'flex-width'  => true,
            'header-text' => array( 'site-title', 'site-description' ),
    );
    add_theme_support( 'custom-logo', $defaults );

}
add_action( 'after_setup_theme', 'homeschoolscene_custom_logo_setup' );

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
    $parent = acf_add_options_page(array(
        'page_title' => 'Global Fields',
        'menu_title' => 'ACF Global Fields',
        'menu_slug'  => 'rb-settings',
        'capability' => 'manage_options',
        'icon_url'   => 'dashicons-admin-settings',
        'redirect'   => false
    ));
}

// Set up Style References
function homeschoolscene_theme_styles(){

    wp_enqueue_style( 'homeschoolscene-style', get_stylesheet_uri() );
    wp_enqueue_style( 'fonts', 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Satisfy&display=swap' );

}
add_action( 'wp_enqueue_scripts', 'homeschoolscene_theme_styles' );

$editorColorPalette = array(
    array(
            'name' => __( 'Teal Dark', 'themeLangDomain' ),
            'slug' => 'teal-dark',
            'color' => '#346B76',
    ),
    array(
            'name' => __( 'Teal', 'themeLangDomain' ),
            'slug' => 'teal',
            'color' => '#5D929D',
    ),
    array(
            'name' => __( 'Teal Light', 'themeLangDomain' ),
            'slug' => 'teal-light',
            'color' => '#B1CDD3',
    ),
    array(
            'name' => __( 'Dark Gray', 'themeLangDomain' ),
            'slug' => 'gray-dark',
            'color' => '#323E40',
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
            'name' => __( 'White', 'themeLangDomain' ),
            'slug' => 'white',
            'color' => '#ffffff',
    ),
    array(
            'name' => __( 'Purple', 'themeLangDomain' ),
            'slug' => 'purple',
            'color' => '#6E5D9D',
    ),
    array(
            'name' => __( 'Purple Light', 'themeLangDomain' ),
            'slug' => 'purple-light',
            'color' => '#9B8DC2',
    ),
    array(
            'name' => __( 'Salmon', 'themeLangDomain' ),
            'slug' => 'salmon',
            'color' => '#AD6F72',
    ),
);

function editor_color_setup() {
    global $editorColorPalette;

    $editorColorPalette = apply_filters('rb_editor_color_palette', $editorColorPalette);

    add_theme_support( 'editor-color-palette', $editorColorPalette);
}

add_action( 'after_setup_theme', 'editor_color_setup' );

// -- Editor Font Sizes
add_theme_support( 'editor-font-sizes', array(
  array(
    'name'      => __( 'Small', 'homeschoolscene' ),
    'shortName' => __( 'S', 'homeschoolscene' ),
    'size'      => 16,
    'slug'      => 'small'
  ),
  array(
    'name'      => __( 'Medium', 'homeschoolscene' ),
    'shortName' => __( 'M', 'homeschoolscene' ),
    'size'      => 24,
    'slug'      => 'medium'
  ),
  array(
    'name'      => __( 'Large', 'homeschoolscene' ),
    'shortName' => __( 'L', 'homeschoolscene' ),
    'size'      => 36,
    'slug'      => 'large'
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

/* Requiring authentication breaks Contact Form 7 if not signed in */

//Require Authentication for Rest API
// add_filter( 'rest_authentication_errors', function( $result ) {
//     if ( ! empty( $result ) ) {
//             return $result;
//     }
//     if ( ! is_user_logged_in() ) {
//             return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );
//     }
//     return $result;
// });

function homeschoolscene_block_categories( $categories, $post ) {

    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'homeschoolscene-blocks',
                'title' => __( 'Homeschool Scene Blocks', 'homeschoolscene' ),
            ),
        )
    );
}
add_filter( 'block_categories', 'homeschoolscene_block_categories', 10, 2 );

