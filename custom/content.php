<?php
//
// Birdpress content customization
// --------------------------------------------------


// Remove the hentry class from posts.
// ---------------------------------------
// Related to microformats & structured data.
// Allows a JSON version of structured data to appease search engines
// ---------------------------------------
function post_class_remove_hentry( $post_class ) {
	$post_class = array_diff( $post_class, array( 'hentry' ) );
	return $post_class;
}
add_filter( 'post_class', 'post_class_remove_hentry' );
