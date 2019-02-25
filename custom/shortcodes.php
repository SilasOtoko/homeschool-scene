<?php
//
// Goshawk custom shortcodes
// --------------------------------------------------


// Siloed shortcode imports
// ---------------------------------------
require_once("shortcodes/child_page_grid.php");
require_once("shortcodes/featured_image.php");
require_once("shortcodes/flex_image_grid.php");


// Images w/captions get proper HTML5 figure markup
// ---------------------------------------
add_action( 'init', 'goshawk_add_shortcodes' );

function goshawk_add_shortcodes() {
	add_filter('img_caption_shortcode', 'goshawk_img_caption_shortcode_filter',10,3);

	// TODO: what does this do?
	add_filter('widget_text', 'do_shortcode');
}

function goshawk_img_caption_shortcode_filter($val, $attr, $content = null) {
	extract(shortcode_atts(array(
		'id'	=> '',
		'align'	=> '',
		'width'	=> '',
		'caption' => ''
	), $attr));

	if ( 1 > (int) $width || empty($caption) )
	return $val;
	$capid = '';
	if ( $id ) {
		$id = esc_attr($id);
		$capid = 'id="figcaption_'. $id . '" ';
		$id = 'id="' . $id . '" aria-labelledby="figcaption_' . $id . '" ';
	}
	return '<figure ' . $id . ' class="wp-caption ' . esc_attr($align) . '" style="width: '
	. (10 + (int) $width) . 'px">' . do_shortcode( $content ) . '<figcaption ' . $capid
	. 'class="wp-caption-text">' . $caption . '</figcaption></figure>';
}
