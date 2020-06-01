<?php get_header(); ?>

<?php if( function_exists( 'get_field' ) ): ?>

    <?php get_template_part( 'template-parts/acf/acf', 'hero' ); ?>

<?php endif; ?>

<section id="primary" class="content-area">
    <div class="main-content-wrapper">

        <?php if ( have_posts() ): ?>

            <?php if ( is_home() && ! is_front_page() ): ?>

                <div class="page-header">

                    <div class="text-wrapper">

                        <h1 class="page-title"><?php single_post_title(); ?></h1>

                        <?php 

                            $posts_page_id = get_option( 'page_for_posts' ); 
                            $posts_page = get_post( $posts_page_id );

                        ?>

                        <?php if( $posts_page->post_content ): ?>

                            <p><?php echo $posts_page->post_content; ?></p>

                        <?php endif; ?>

                    </div>

                </div>

            <?php endif; ?>

        <?php endif; ?>

        <div class="post-list">

            <div class="main-content-row row">

                <div class="main-content-column content-column">
                    <section class="main-content">

                        <?php
                            if ( have_posts() ) :

                                /* Start the Loop */
                                while ( have_posts() ) :
                                    the_post();

                                    /*
                                     * Include the Post-Type-specific template for the content.
                                     * If you want to override this in a child theme, then include a file
                                     * called content-___.php (where ___ is the Post Type name) and that will be used instead.
                                     */
                                    get_template_part( 'template-parts/content/content', get_post_type() );

                                endwhile; ?>

                                <nav class="navigation pagination" role="navigation">
                                    <h2 class="screen-reader-text">Posts navigation</h2>
                                    <div class="nav-links">

                                        <?php 
                                            $big = 999999999; // need an unlikely integer
                                            $translated = __( 'Page', 'mytextdomain' );
                                            global $wp_query;
                                            $total = $wp_query->max_num_pages;
                                        ?>

                                        <?php $argsp = array(
                                            'base'               => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                                            'format'             => '?paged=%#%',
                                            'total'              => $total,
                                            'current'            => max( 1, get_query_var('paged') ),
                                            'prev_next'          => true,
                                            'prev_text'          => __('«'),
                                            'next_text'          => __('»'),
                                            'type'               => 'plain',
                                            'add_args'           => false,
                                            'add_fragment'       => '...',
                                            'before_page_number' => '<span class="screen-reader-text">'.$translated.' </span>',
                                            'after_page_number'  => ''
                                        );


                                        echo paginate_links( $argsp );
                                        ?>

                                    </div>

                                </nav>

                            <?php else :

                                get_template_part( 'template-parts/content/content', 'none' );

                            endif;
                        ?>

                    </section>
                </div>

                <?php get_sidebar(); ?>

            </div>

        </div>

    </div>
</section>

<?php get_footer(); ?>
