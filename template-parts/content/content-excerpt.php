<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <h2 class="entry-title">
      <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </h2>
  </header><!-- .entry-header -->

  <div class="entry-content">

    <?php the_excerpt(); ?>
    <a href="<?php the_permalink(); ?>">Read More</a>
    
  </div><!-- .entry-content -->

</article><!-- #post-${ID} -->