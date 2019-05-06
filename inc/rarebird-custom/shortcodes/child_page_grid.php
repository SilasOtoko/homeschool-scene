<?php
add_shortcode('child_page_grid', 'make_child_page_grid');

function make_child_page_grid($atts, $content = null) {
	global $post;

	$a = shortcode_atts([
		'page_id' => null,
		'type'    => '',
	], $atts );

	$page_id = !is_null($a['page_id']) ? intval($a['page_id']) : $post->ID;

	$child_pages = get_pages([
		'sort_column'  => 'menu_order',
		'post_type'    => 'page',
		'post_status'  => 'publish',
		'parent'       => $page_id,
		'hierarchical' => 0,
	]);

	if(!empty($child_pages)) {
		ob_start();
		$template = locate_template([
			'partials/shortcodes/child_page_grid-'.$a['type'].'.php',
			'partials/shortcodes/child_page_grid.php'
		]);
		include($template);
		return ob_get_clean();
	}
}
