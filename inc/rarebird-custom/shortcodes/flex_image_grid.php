<?php
add_shortcode('flex_image_grid', 'make_flex_image_grid');

function make_flex_image_grid($atts, $content = null) {
	extract( shortcode_atts( array(
		'class' => '',
	), $atts));

	$content = '<div class="flex-image-grid ' . $class . '">' . $content . '</div>';
	return $content;
}
