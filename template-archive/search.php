<?php get_header(); ?>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header -->

<!-- Main content's .container -->
<div class="main-content-container container">

	<div class="main-content-row row">

		<div class="main-content-column col-xs-12 col-md-8 col-lg-9">

			<section class="main-content">
				<?php if ( have_posts() ) : ?>
					<h1 class="page-main-heading page-title"><?php printf( __( 'Search Results for: %s', 'blankslate' ), '<span>' . get_search_query()  . '</span>' ); ?></h1>

					<?php get_template_part( 'nav', 'above' ); ?>

					<?php while ( have_posts() ) : the_post() ?>
						<?php get_template_part( 'entry' ); ?>
					<?php endwhile; ?>

					<?php get_template_part( 'nav', 'below' ); ?>

				<?php else : ?>
					<div id="post-0" class="post no-results not-found">
						<h2 class="page-main-heading entry-title"><?php _e( 'Nothing Found', 'blankslate' ) ?></h2>
						<div class="entry-content">
							<p><?php _e( 'Sorry, nothing matched your search. Please try again.', 'blankslate' ); ?></p>
							<?php get_search_form(); ?>
						</div>
					</div>
				<?php endif; ?>
			</section><!-- /.main-content -->

		</div><!-- /.main-content-column -->

		<div class="main-sidebar-column col-xs-12 col-md-4 col-lg-3">

			<aside class="main-sidebar" role="complementary">
				<?php get_sidebar(); ?>
			</aside><!-- /.main-sidebar -->

		</div><!-- /.main-sidebar-column -->

	</div><!-- /.main-content-row -->

</div><!-- /.main-content-container container -->

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer -->
<?php get_footer(); ?>
