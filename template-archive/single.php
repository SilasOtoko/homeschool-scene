<?php get_header(); ?>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header -->

<!-- Main content's .container -->
<div class="main-content-container container">

	<div class="main-content-row row">

		<div class="main-content-column col-xs-12 col-md-8 col-lg-9">

			<section class="main-content">
				<?php get_template_part( 'nav', 'above-single' ); ?>

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'entry' ); ?>
					<?php get_template_part( 'nav', 'below-single' ); ?>
					<?php comments_template('', true); ?>
				<?php endwhile; endif; ?>
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
