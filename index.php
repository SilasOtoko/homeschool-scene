<?php get_header(); ?>

<div class="main-content-container container">
	<div class="main-content-row row">
		<div class="main-content-column col-xs-12">
			<section class="main-content">

				<?php if( have_posts() ): ?>

        	<?php while( have_posts() ): the_post(); ?>


						<div id="post-<?php the_ID(); ?>" <?php post_class("post-content-wrapper"); ?>>

							<div class="page-intro">

	              <div class="entry-header text-wrapper">

	                <h1 class="page-main-heading entry-title"><?php the_title(); ?></h1>

	                <?php if( function_exists( 'get_field' ) ): ?>

	                  <?php the_field( 'page_intro' ); ?>

	                <?php endif; ?>
	                  
	              </div>

	            </div>

							<div class="entry-content text-wrapper">

								<?php the_content(); ?>

								<?php wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'blankslate' ) . '&after=</div>'); ?>
								<?php edit_post_link( __( 'Edit', 'blankslate' ), '<div class="edit-link">', '</div>' ); ?>
							</div>

						</div>

					<?php endwhile; ?>

				<?php endif; ?>

			</section>
		</div>
	</div>
</div>

<?php get_footer(); ?>
