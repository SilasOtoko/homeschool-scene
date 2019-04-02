<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Goshawk
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="text-wrapper">
    <header class="entry-header">
      <?php
      if ( is_singular() ) :
        the_title( '<h1 class="entry-title">', '</h1>' );
      else :
        the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
      endif; ?>

    </header><!-- .entry-header -->

    <?php goshawk_post_thumbnail(); ?>

    <div class="entry-content">
      <?php
      the_content( sprintf(
        wp_kses(
          /* translators: %s: Name of current post. Only visible to screen readers */
          __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'goshawk' ),
          array(
            'span' => array(
              'class' => array(),
            ),
          )
        ),
        get_the_title()
      ) ); ?>

      <a href="<?php the_permalink(); ?>">Read More</a>

      <?php wp_link_pages( array(
        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'goshawk' ),
        'after'  => '</div>',
      ) );
      ?>
    </div><!-- .entry-content -->

    <footer class="entry-footer">
      <?php goshawk_entry_footer(); ?>
    </footer><!-- .entry-footer -->
  </div>
</article><!-- #post-<?php the_ID(); ?> -->
