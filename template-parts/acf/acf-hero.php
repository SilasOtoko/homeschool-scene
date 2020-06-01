<?php
    $banner = wp_get_attachment_image_src( get_field( 'hero_image' ), 'full' );
?>

<?php if( get_field( 'show_hero' ) ): ?>

    <div class="hero" style="background-image: url(<?php echo $banner[0]; ?>);">
        <div class="container">

            <div class="hero__content-wrapper">

                <div class="hero__content">

                    <div class="hero__text text-xl">
                        <?php the_field( 'hero_text' ); ?>
                    </div>

                    <?php if( have_rows( 'hero_buttons' ) ): ?>

                        <div class="button-wrapper">

                            <?php while( have_rows( 'hero_buttons' ) ): the_row(); ?>

                                <?php if( get_sub_field( 'button_link' ) && get_sub_field( 'button_text' ) ): ?>

                                    <?php
                                        $link = get_sub_field( 'button_link' );
                                        $linkTarget = $link['target'];
                                    ?>

                                    <a class="button <?php the_sub_field( 'button_type' ); ?>" href="<?php echo $link['url']; ?>" target="<?php echo esc_attr($linkTarget); ?>"><?php the_sub_field( 'button_text' ); ?></a>

                                <?php endif; ?>

                            <?php endwhile; ?>

                        </div>

                    <?php endif; ?>

                </div>

            </div>

        </div>
    </div>

<?php endif; ?>