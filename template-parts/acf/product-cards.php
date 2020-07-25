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
$id = 'product-cards-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'acf-block--product-cards acf-block';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">

    <?php if( have_rows( 'cards' ) ): ?>

        <div class="cards">

            <?php while( have_rows( 'cards' ) ): the_row(); ?>

                <div class="card">

                    <?php

                        $image = get_sub_field( 'card_image' );
                        $size = 'medium';
                        $src = $image['url'];
                        $alt = $image['alt'];
                        $thumb = $image['sizes'][ $size ];

                    if( $image ): ?>

                        <div class="card__header">
                            <img src="<?php echo $thumb; ?>" alt="<?php echo $alt; ?>">
                        </div>

                    <?php endif; ?>

                    <div class="card__body">

                        <?php
                            $link = get_sub_field( 'link' );
                            $linkTarget = $link['target'];
                          ?>

                        <h3 class="text-md"><a href="<?php echo $link['url']; ?>" target="<?php echo esc_attr($linkTarget); ?>"><?php the_sub_field( 'card_title' ); ?></a></h3>

                        <p><?php the_sub_field( 'card_paragraph' ); ?></p>

                    </div>

                </div>

                <?php wp_reset_postdata(); ?>

            <?php endwhile; ?>

        </div>

    <?php endif; ?>

</div>