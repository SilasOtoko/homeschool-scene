<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

        <?php if ( 'post' === get_post_type() ) : ?>
        <div class="entry-meta">
            <p class="byline"><?php the_time('F jS, Y') ?></p>
        </div><!-- .entry-meta -->
        <?php endif; ?>
    </header><!-- .entry-header -->

    <?php goshawk_post_thumbnail(); ?>

    <div class="entry-summary">
        <?php the_excerpt(); ?>
        <a class="button button--primary" href="<?php the_permalink(); ?>">Read More</a>
    </div><!-- .entry-summary -->

    <footer class="entry-footer">
        <?php goshawk_entry_footer(); ?>
    </footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
