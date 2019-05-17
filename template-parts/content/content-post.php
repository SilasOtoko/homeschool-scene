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

    <?php goshawk_post_thumbnail(); ?>

    <header class="entry-header">
      <p class="byline"><?php the_time('F jS, Y') ?></p>
      <?php
        if ( is_singular() ) :
          the_title( '<h1 class="entry-title">', '</h1>' );
        else :
          the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
      endif; ?>
    </header><!-- .entry-header -->

    <div class="entry-content">
      <?php
      the_excerpt(); ?>
      <a class="button button--primary" href="<?php the_permalink(); ?>">Read More</a>

      <?php wp_link_pages( array(
        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'goshawk' ),
        'after'  => '</div>',
      ) );
      ?>
    </div><!-- .entry-content -->
  </div>
</article><!-- #post-<?php the_ID(); ?> -->
