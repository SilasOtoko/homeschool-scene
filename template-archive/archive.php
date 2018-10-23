<?php get_header(); ?>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header -->

<!-- Main content's .container -->
<div class="main-content-container container">

	<div class="main-content-row row">

		<div class="main-content-column col-xs-12 col-md-8 col-lg-9">

			<section class="main-content">

				<?php the_post(); ?>

				<?php if ( is_day() ) : ?>
					<h1 class="page-main-heading page-title"><?php printf( __( 'Daily Archives: %s', 'blankslate' ), '<span>' . get_the_time(get_option('date_format')) . '</span>' ) ?></h1>
				<?php elseif ( is_month() ) : ?>
					<h1 class="page-main-heading page-title"><?php printf( __( 'Monthly Archives: %s', 'blankslate' ), '<span>' . get_the_time('F Y') . '</span>' ) ?></h1>
				<?php elseif ( is_year() ) : ?>
					<h1 class="page-main-heading page-title"><?php printf( __( 'Yearly Archives: %s', 'blankslate' ), '<span>' . get_the_time('Y') . '</span>' ) ?></h1>
				<?php elseif ( isset($_GET['paged']) && !empty($_GET['paged']) ) : ?>
					<h1 class="page-main-heading page-title"><?php _e('Blog Archives', 'blankslate' ); ?></h1>
				<?php endif; ?>

				<?php rewind_posts(); ?>

				<?php get_template_part( 'nav', 'above' ); ?>

				<?php while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'entry' ); ?>
				<?php endwhile; ?>

				<?php get_template_part( 'nav', 'below' ); ?>
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
