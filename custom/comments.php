<?php
//
// Birdpress custom widgets
// --------------------------------------------------


// Threaded comments
// ---------------------------------------
add_action('comment_form_before', 'birdpress_enqueue_comment_reply_script');

function birdpress_enqueue_comment_reply_script() {
	if(is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}


// Change default comment form markup
// ---------------------------------------
add_filter('comment_form_defaults', 'birdpress_comment_form_defaults');

function birdpress_comment_form_defaults( $args ) {
	$req = get_option( 'require_name_email' );
	$required_text = sprintf( ' ' . __('Required fields are marked %s', 'birdpress'), '<span class="required">*</span>' );
	$args['comment_notes_before'] = '<p class="comment-notes">' . __('Your email is kept private.', 'birdpress') . ( $req ? $required_text : '' ) . '</p>';
	$args['title_reply'] = __('Post a Comment', 'birdpress');
	$args['title_reply_to'] = __('Post a Reply to %s', 'birdpress');
	$args['class_submit'] = 'button';
	return $args;
}


// Use commenter's email to get an avatar...?
// ---------------------------------------
function birdpress_commenter_link() {
	$commenter = get_comment_author_link();

	if ( ereg( '<a[^>]* class=[^>]+>', $commenter ) ) {
		$commenter = preg_replace( '/(<a[^>]* class=[\'"]?)/', '\\1url ' , $commenter );
	} else {
		$commenter = preg_replace( '/(<a )/', '\\1class="url "' , $commenter );
	}

	$avatar_email = get_comment_author_email();
	$avatar = str_replace( "class='avatar", "class='photo avatar", get_avatar( $avatar_email, 80 ) );
	echo $avatar . ' <span class="fn n">' . $commenter . '</span>';
}


// Custom comment markup
// ---------------------------------------
function birdpress_custom_comments($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment;
	$GLOBALS['comment_depth'] = $depth;
?>

<li id="comment-<?php comment_ID() ?>" <?php comment_class() ?>>
	<div class="comment-author vcard"><?php birdpress_commenter_link() ?></div>
	<div class="comment-meta">
	<?php printf(__('Posted %1$s at %2$s', 'birdpress' ), get_comment_date(), get_comment_time() ); ?>
		<span class="meta-sep"> | </span>
		 <a href="#comment-<?php echo get_comment_ID(); ?>" title="<?php _e('Permalink to this comment', 'birdpress' ); ?>"><?php _e('Permalink', 'birdpress' ); ?></a>

		<?php edit_comment_link(__('Edit', 'birdpress'), ' <span class="meta-sep"> | </span> <span class="edit-link">', '</span>'); ?>

		<?php
			if($args['type'] == 'all' || get_comment_type() == 'comment') :
			comment_reply_link(array_merge($args, array(
				'reply_text' => __('Reply »','birdpress'),
				'login_text' => __('Login to reply.', 'birdpress'),
				'depth' => $depth,
				'before' => '<span class="comment-reply-link">',
				'after' => '</span>'
			)));
			endif;
		?>
	</div>

<?php if ($comment->comment_approved == '0') { echo "\t\t\t\t\t<p class=\"unapproved-comment-message text-bold text-italic\">"; _e('Your comment is awaiting moderation.', 'birdpress'); echo "</p>\n\n"; } ?>
	<div class="comment-content">
		<?php comment_text() ?>
	</div>
<?php }


// Custom ping / trackback markup
// ---------------------------------------
function birdpress_custom_pings($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment;
?>
<li id="comment-<?php comment_ID() ?>" <?php comment_class() ?>>
	<div class="comment-author"><?php printf(__('By %1$s on %2$s at %3$s', 'birdpress'),
		get_comment_author_link(),
		get_comment_date(),
		get_comment_time() );
		edit_comment_link(__('Edit', 'birdpress'), ' <span class="meta-sep"> | </span> <span class="edit-link">', '</span>'); ?>
	</div>
<?php if ($comment->comment_approved == '0') { echo "\t\t\t\t\t<p class=\"unapproved-comment-message text-bold text-italic\">"; _e('Your trackback is awaiting moderation.', 'birdpress'); echo "</p>\n\n"; } ?>
	<div class="comment-content">
		<?php comment_text() ?>
	</div>
<?php }
