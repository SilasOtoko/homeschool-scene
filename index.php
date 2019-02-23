<?php get_header(); ?>
<?php /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header */ ?>


<?php
/* *** *** *** *** *** *** *** */
// IF a Page
if ( is_page() ) : the_post();
/* *** *** *** *** *** *** *** */
?>
<div class="main-content-container container">
	<div class="main-content-row row">
		<div class="main-content-column col-xs-12">
			<section class="main-content">
				<div id="post-<?php the_ID(); ?>" <?php post_class("post-content-wrapper"); ?>>
					<div class="page-main-headings">
						<h1 class="page-main-heading entry-title"><?php the_title(); ?></h1>

						<?php if( function_exists( 'get_field' ) ): ?>

							<?php if( get_field('sub_heading') ): ?>
								<div class="page-main-sub-heading"><?php the_field('sub_heading'); ?></div>
							<?php endif; ?>

						<?php endif; ?>
					</div>

					<?php if( function_exists( 'get_field' ) ): ?>

						<?php if( get_field('lead_in_copy') ): ?>
							<div class="lead-in-copy"><?php the_field('lead_in_copy'); ?></div>
						<?php endif; ?>

					<?php endif; ?>

					<div class="entry-content">
						<?php
						// Show the featured image at top _with a caption_ if it exists.
						// Will defer to the usage of the featured-image shortcode if present.
						if ( has_post_thumbnail() && !has_shortcode(get_the_content(), 'featured-image') ) {
							echo "<figure class='featured-image figure-feature'>";
							the_post_thumbnail('post-thumbnail', array( 'class' => 'img-responsive' ));
							$caption = get_the_post_thumbnail_caption();
							if (!empty($caption)) {
								echo "<figcaption class='wp-figcaption-text'>";
								echo $caption;
								echo "</figcaption>";
							}
							echo "</figure>";
						}
						?>

						<?php the_content(); ?>

						<?php /* An example of how to pull in a partial built for ACF */ ?>
						<?php // get_template_part('partials/sample-advanced-custom-fields/accordion_custom_field'); ?>

						<?php wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'blankslate' ) . '&after=</div>') ?>
						<?php edit_post_link( __( 'Edit', 'blankslate' ), '<div class="edit-link">', '</div>' ) ?>
					</div><!-- /.entry-content -->
				</div><!-- /.post-content-wrapper -->

			</section><!-- /.main-content -->
		</div><!-- /.main-content-column -->
	</div><!-- /.main-content-row -->
</div><!-- /.main-content-container container -->
<?php 
/* *** *** *** *** *** *** *** */
// End default template for pages
/* *** *** *** *** *** *** *** */
?>


<?php
/* *** *** *** *** *** *** *** */
// if NOT a Page (is a Post)
else:
/* *** *** *** *** *** *** *** */
?>
<div class="main-content-container container">
	<div class="main-content-row row">
		<div class="main-content-column col-xs-12 col-md-8 col-lg-9">
			<section class="main-content">

				<?php
				// Titles that go _above_ the wrapping post(s)
				// ---------------------------------------

				// special case title for the "Blog / home" page, which is assigned a Page in the WP admin
				if(is_home()) {
					echo '<h1 class="page-main-heading entry-title">';
					echo get_the_title(get_option( 'page_for_posts' ));
					echo '</h1>';
				}
				else if(is_archive() || is_search()) {
					echo the_archive_title( '<h1 class="page-main-heading entry-title">', '</h1>' );
				}


				// Start the Loop
				// ---------------------------------------
				while ( have_posts() ) : the_post(); ?>

					<?php
					/* NOTE: as of this writing, this post schema file needs customized with your site's particular logo information! */
					// get_template_part('partials/post_schema'); ?>

					<div id="post-<?php the_ID(); ?>" <?php post_class("post-content-wrapper"); ?>>

					<?php
						// if is a single post, show the title wrapped in an h1
						// --------------------------
						if ( is_singular() ): ?>
							<h1 class="page-main-heading entry-title">
								<?php the_title(); ?>
							</h1>

							<div class="entry-content">
								<?php
								// Show the featured image at top _with a caption_ if it exists.
								// Will defer to the usage of the featured-image shortcode if present.
								if ( has_post_thumbnail() && !has_shortcode(get_the_content(), 'featured-image') ) {
									echo "<figure class='featured-image figure-feature'>";
									the_post_thumbnail('post-thumbnail', array( 'class' => 'img-responsive' ));
									$caption = get_the_post_thumbnail_caption();
									if (!empty($caption)) {
										echo "<figcaption class='wp-figcaption-text'>";
										echo $caption;
										echo "</figcaption>";
									}
									echo "</figure>";
								}
								?>

								<?php the_content(); ?>

								<?php wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'blankslate' ) . '&after=</div>') ?>

								<?php edit_post_link( __( 'Edit', 'blankslate' ), '<div class="edit-link">', '</div>' ) ?>
							</div>

					<?php
						// otherwise (if in a listing / not singular), put the title in an h2 and a link to the post
						// --------------------------
						else: ?>
							<h2 class="non-single-entry-title entry-title">
								<a href="<?php the_permalink(); ?>" title="<?php printf( __('Read %s', 'blankslate'), the_title_attribute('echo=0') ); ?>" rel="bookmark">
									<?php the_title(); ?>
								</a>
							</h2>

							<div class="entry-summary">
								<span class="post-date"><?php echo get_the_date(); ?></span>

								<span class="the-excerpt">
								<?php the_excerpt( sprintf(__( 'continue reading %s', 'blankslate' ), '<span class="meta-nav">&rarr;</span>' )  ); ?>
								</span>

								<?php if(is_search()) {
									wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'blankslate' ) . '&after=</div>');
								}
								?>
							</div>
					<?php
						endif; /* end "if a single post or a post listing" conditional */ ?>
				</div><!-- /.post-content-wrapper -->

				<?php
				endwhile; /* end the Loop */
				// the_posts_pagination(array( 'prev_text' => '<span class="sr-only">Go to the previous paginated page</span>«', 'next_text' => '<span class="sr-only">Go to the next paginated page</span>»' ));
				?>

			</section><!-- /.main-content -->
		</div><!-- /.main-content-column -->
		<div class="main-sidebar-column col-xs-12 col-md-4 col-lg-3">
			<div class="main-sidebar">
				<?php
					/* DEMO -- WOULD REQUIRE MARKUP CHANGES!! */
					// If the page is a "page" type, retrieve sidebar-page.php. Otherwise return sidebar.php
					// get_sidebar( is_page() ? 'page' : null);

					/* PLAIN SIDEBAR */
					get_sidebar();
				?>
			</div><!-- /.main-sidebar -->
		</div><!-- /.main-sidebar-column -->
	</div><!-- /.main-content-row -->
</div><!-- /.main-content-container container -->
<?php 
/* *** *** *** *** *** *** *** */
// End default template for posts
/* *** *** *** *** *** *** *** */
?>


<?php 
/* *** *** *** *** *** *** *** */
// end "page or post" conditional
endif; 
/* *** *** *** *** *** *** *** */
?>


<?php /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer */ ?>
<?php get_footer(); ?>
