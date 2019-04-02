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

  <div class="main-content-container container">
    <div class="main-content-row row">
      <div class="main-content-column col-xs-12">
        <section class="main-content">

          <?php
          while ( have_posts() ) :
            the_post();

            get_template_part( 'template-parts/content', get_post_type() );

            the_post_navigation();

            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
              comments_template();
            endif;

          endwhile; // End of the loop.
          ?>

        </section>
      </div>
    </div>
  </div>

<?php
get_sidebar();
get_footer();
