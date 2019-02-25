<?php
//
// Goshawk custom widgets
// --------------------------------------------------


// Widgets placement and default markup
// ---------------------------------------
add_action( 'widgets_init', 'goshawk_widgets_init' );

function goshawk_widgets_init() {
	register_sidebar( array (
		'name'          => __('Sidebar Widget Area', 'goshawk'),
		'id'            => 'primary-widget-area',
		'description'   => 'The primary sidebar',
		'class'         => '',
		'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
