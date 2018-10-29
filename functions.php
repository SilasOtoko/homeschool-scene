<?php
//
// Birdpress Functions
// --------------------------------------------------


// Siloed Birdpress function groups
// ---------------------------------------
require_once("custom/helpers.php");
require_once("custom/navigation.php");
require_once("custom/rogue.php");
require_once("custom/login.php");
require_once("custom/shortcodes.php");
// require_once("custom/comments.php");
require_once("custom/widgets.php");
require_once("custom/content.php");
require_once("custom/scripts.php");


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
