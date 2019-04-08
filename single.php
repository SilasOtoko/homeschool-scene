<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Goshawk
 */

get_header();
?>

  <div class="page-banner">
    <?php goshawk_post_thumbnail(); ?>
  </div>

  <div class="main-content-container container">
    <div class="main-content-row row">
      <div class="main-content-column col-xs-12">
        <section class="main-content">

          <?php
            while ( have_posts() ) :
            the_post();

            get_template_part( 'template-parts/content/content', get_post_type() ); ?>

            <div class="text-wrapper">

              <?php the_post_navigation(); ?>

            </div>

          <?php endwhile; // End of the loop. ?>

        </section>
      </div>
    </div>
  </div>

<?php
get_sidebar();
get_footer();
