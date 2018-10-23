<?php
add_shortcode('featured-image', 'make_featured_image_shortcode');

function make_featured_image_shortcode($atts, $content = null) {
	global $post;

	$a = shortcode_atts(array(
		'class' => null,
		'size'  => null,
	), $atts );

	if(has_post_thumbnail()) {
		$thumb = get_the_post_thumbnail(null, $a['size']);
		if($caption = get_the_post_thumbnail_caption()) {
			$caption = sprintf("<figcaption class=\"wp-figcaption-text\">%s</figcaption>", $caption);
		}

		return sprintf("<figure class=\"featured-image figure-feature %s\">%s%s</figure>",
			$a['class'],
			$thumb,
			$caption
		);
	}
}
