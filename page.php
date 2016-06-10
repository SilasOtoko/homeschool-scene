<?php get_header(); ?>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header -->

<div class="main-content-container container">

	<div class="main-content-row row">

		<div class="main-content-column col-xs-12 col-md-8 col-lg-9">

			<section class="main-content">
				<?php the_post(); ?>
				<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<h1 class="entry-title"><?php the_title(); ?></h1>
					<div class="entry-content">
						<?php
						if ( has_post_thumbnail() ) {
							the_post_thumbnail();
						}
						?>
						<?php the_content(); ?>
						<?php wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'blankslate' ) . '&after=</div>') ?>
						<?php edit_post_link( __( 'Edit', 'blankslate' ), '<div class="edit-link">', '</div>' ) ?>
					</div>
				</div>
			</section><!-- /.main-content -->

		</div><!-- /.main-content-column -->

		<div class="main-sidebar-column col-xs-12 col-md-4 col-lg-3">

			<aside class="main-sidebar" role="complementary">
				<?php get_sidebar(); ?>
			</aside><!-- /.main-sidebar -->

		</div><!-- /.main-sidebar-column -->

	</div><!-- /.main-content-row -->

	<?php comments_template( '', true ); ?>

</div><!-- /.main-content-container container -->



<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer -->
<?php get_footer(); ?>
