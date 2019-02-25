<?php
//
// Goshawk custom scripts
// --------------------------------------------------


// Performance enhancement: remove extra scripts
// ---------------------------------------
function goshawk_strip_unnecessary_scripts() {
	// emojis
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

	// embeds
	// Remove the REST API endpoint.
	/* MOVE TO CHILD THEME */
	remove_action( 'rest_api_init', 'wp_oembed_register_route' );
}
add_action('init', 'goshawk_strip_unnecessary_scripts');


// Performance enhancement: remove footer scripts
// ---------------------------------------
function goshawk_remove_footer_scripts(){
	// revisit in the future (does Gutenberg take care of Youtube and other embeds automatically?)
	wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_footer', 'goshawk_remove_footer_scripts' );

// include custom jQuery
function goshawk_include_custom_jquery() {

  wp_deregister_script('jquery');
  wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), null, true);
  wp_enqueue_script( 'bundle', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '', true );

}
add_action('wp_enqueue_scripts', 'goshawk_include_custom_jquery');