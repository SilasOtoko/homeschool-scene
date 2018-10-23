<?php
//
// Birdpress custom widgets
// --------------------------------------------------


// Widgets placement and default markup
// ---------------------------------------
add_action( 'widgets_init', 'birdpress_widgets_init' );

function birdpress_widgets_init() {
	register_sidebar( array (
		'name'          => __('Sidebar Widget Area', 'birdpress'),
		'id'            => 'primary-widget-area',
		'description'   => 'The primary sidebar',
		'class'         => '',
		'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
