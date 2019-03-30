<?php
/**
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
      the_excerpt();

      wp_link_pages( array(
        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'goshawk' ),
        'after'  => '</div>',
      ) );
      ?>
    </div><!-- .entry-content -->

    <?php if ( get_edit_post_link() ) : ?>
      <footer class="entry-footer">
        <?php
        edit_post_link(
          sprintf(
            wp_kses(
              /* translators: %s: Name of current post. Only visible to screen readers */
              __( 'Edit <span class="screen-reader-text">%s</span>', 'goshawk' ),
              array(
                'span' => array(
                  'class' => array(),
                ),
              )
            ),
            get_the_title()
          ),
          '<span class="edit-link">',
          '</span>'
        );
        ?>
      </footer><!-- .entry-footer -->
    <?php endif; ?>
  </div>
</article><!-- #post-<?php the_ID(); ?> -->
