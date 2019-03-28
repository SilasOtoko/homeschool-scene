<?php get_header(); ?>

<div class="main-content-container container">
	<div class="main-content-row row">
		<div class="main-content-column col-xs-12">
			<section class="main-content">

				<?php
					if ( have_posts() ) :

						if ( is_home() && ! is_front_page() ) :
							?>

							<div class="page-intro">

			          <div class="entry-header text-wrapper">

			            <h1 class="page-main-heading entry-title"><?php single_post_title(); ?></h1>
			              
			          </div>

			          <?php 

				          $posts_page_id = get_option( 'page_for_posts' ); 
				          $posts_page = get_post( $posts_page_id );

				        ?>

				        <?php if( $posts_page->post_content ): ?>

				          <p><?php echo $posts_page->post_content; ?></p>

				        <?php endif; ?>

			        </div>

							<?php
						endif;

						/* Start the Loop */
						while ( have_posts() ) :
							the_post();

							/*
							 * Include the Post-Type-specific template for the content.
							 * If you want to override this in a child theme, then include a file
							 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
							 */
							get_template_part( 'template-parts/content/content', get_post_type() );

						endwhile;

						the_posts_navigation();

					else :

						get_template_part( 'template-parts/content/content', 'none' );

					endif;
				?>

			</section>
		</div>
	</div>
</div>

<?php get_footer(); ?>
