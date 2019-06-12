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

<section id="primary" class="content-area">
  <div class="main-content-row row">

    <div class="main-content-column content-column">
      <div class="main-content">

        <?php
          while ( have_posts() ) :
            the_post();

            get_template_part( 'template-parts/content/content', get_post_type() );

          endwhile;

          the_post_navigation();
        ?>

      </div>
    </div>

    <?php get_sidebar(); ?>

  </div>
</section>

<?php
get_footer();
