<?php get_header(); ?>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header -->

<!-- Main content's .container -->
<div class="main-content-container container">


	<div id="content" class="row">

		<section class="main-content-column col-md-9">
			<?php the_post(); ?>
			<h1 class="page-title"><?php _e( 'Tag Archives:', 'blankslate' ) ?> <span><?php single_tag_title() ?></span></h1>
			<?php rewind_posts(); ?>
			<?php get_template_part( 'nav', 'above' ); ?>
			<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'entry' ); ?>
			<?php endwhile; ?>
			<?php get_template_part( 'nav', 'below' ); ?>
		</section>

		<aside class="main-sidebar col-md-3" role="complementary">
			<?php get_sidebar(); ?>
		</aside>

	</div>


</div><!-- end Main Content's .container -->

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer -->
<?php get_footer(); ?>
