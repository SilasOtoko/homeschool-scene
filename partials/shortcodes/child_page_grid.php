<ul class="child-page-grid row row--thinner row--flex list--stripped">
	<?php foreach ( $child_pages as $pageChild ) : setup_postdata( $pageChild ); ?>
	<li class="child-page-grid-item col-xs-12 col-sm-6 col-md-4 col-xl-3">
		<a class="child-page-grid-link hover-shadow-block-link" href="<?php echo get_permalink($pageChild->ID); ?>" >

			<?php echo get_the_post_thumbnail($pageChild->ID, 'full', array( 'class' => 'child-page-grid-image img-responsive', 'alt' => $pageChild->post_title )); ?>

			<div class="child-page-grid-item-title-wrapper">
				<span class="child-page-grid-item-title"><?php echo apply_filters('the_title', $pageChild->post_title); ?></span>

				<span class="child-page-grid-item-title-secondary"><?php the_field('sub_heading', $pageChild); ?></span>
			</div>
		</a>
	</li>
	<?php endforeach; ?>
</ul>
