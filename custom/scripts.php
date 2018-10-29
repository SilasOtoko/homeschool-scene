<?php
//
// Birdpress custom scripts
// --------------------------------------------------


// Performance enhancement: remove extra scripts
// ---------------------------------------
function birdpress_strip_unnecessary_scripts() {
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
add_action('init', 'birdpress_strip_unnecessary_scripts');


// Performance enhancement: remove footer scripts
// ---------------------------------------
function birdpress_remove_footer_scripts(){
	// revisit in the future (does Gutenberg take care of Youtube and other embeds automatically?)
	wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_footer', 'birdpress_remove_footer_scripts' );
