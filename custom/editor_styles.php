<?php
//
// Birdpress add CSS to the editor
// --------------------------------------------------

add_action( 'init', 'birdpress_add_editor_styles' );
/**
 * Apply theme's stylesheet to the visual editor.
 *
 * @uses add_editor_style() Links a stylesheet to visual editor
 * @uses get_stylesheet_uri() Returns URI of theme stylesheet
 */
function birdpress_add_editor_styles() {
	add_editor_style( "assets/css/global.css" );
}
