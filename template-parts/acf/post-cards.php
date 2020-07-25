<?php

/**
 * CTA Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'post-cards-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'acf-block--post-cards acf-block';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">

    <?php if( have_rows( 'posts' ) ): ?>

        <div class="post-cards">

            <?php while( have_rows( 'posts' ) ): the_row(); ?>

                <div class="post-card">

                    <?php
                        // override $post
                        $post_object = get_sub_field( 'post');
                        $post = $post_object;
                        setup_postdata( $post );
                        $cardImage = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large');
                    ?>

                    <div class="post-card__header" style="background-image: url(<?php echo $cardImage[0]; ?>);"></div>

                    <div class="post-card__body">

                        <h3 class="text-md"><a href="<?php the_permalink( $post->ID ); ?>"><?php echo get_the_title( $post->ID ); ?></a></h3>

                        <p><?php echo get_the_excerpt( $post->ID ); ?></p>

                        <p class="post-date"><?php the_time('F jS, Y') ?></p>

                    </div>

                </div>

                <?php wp_reset_postdata(); ?>

            <?php endwhile; ?>

        </div>

    <?php endif; ?>

</div>