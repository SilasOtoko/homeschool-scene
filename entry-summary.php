<div class="entry-summary">
	<?php the_excerpt( sprintf(__( 'continue reading %s', 'blankslate' ), '<span class="meta-nav">&rarr;</span>' )  ); ?>
	<p><a href="<?php the_permalink() ?>">Read more &raquo;</a></p>

	<?php if(is_search()) {
		wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'blankslate' ) . '&after=</div>');
	}
	?>
</div>
