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
$id = 'icon-text-columns-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'acf-block--icon-text-columns acf-block';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

// Load values and assing defaults.
$heading = get_field('section_heading') ?: 'Your heading here...';
$intro = get_field('section_intro') ?: 'Your intro here...';

$background_color = get_field('background_color');

?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> bg-<?php echo $background_color; ?>">

    <?php if( get_field( 'section_heading' ) || get_field( 'section_intro' ) ): ?>

      <div class="section-header">

        <div class="text-wrapper">

          <?php if( get_field( 'section_heading' ) ): ?>

            <h2><?php echo $heading; ?></h2>

          <?php endif; ?>

          <?php if( get_field( 'section_intro' ) ): ?>

            <div class="section-intro">

              <?php echo $intro; ?>

            </div>

          <?php endif; ?>

        </div>

      </div>

    <?php endif; ?>

    <?php if( have_rows( 'columns' ) ): ?>

        <div class="columns">

            <?php while( have_rows( 'columns' ) ): the_row(); ?>

                <?php $icon = get_sub_field('icon'); ?>

                <div class="column">

                    <div class="column__media">

                        <?php echo wp_get_attachment_image( $icon['id'], 'full' ); ?>

                    </div>

                    <h3 class="column__heading"><?php the_sub_field( 'heading' ); ?></h3>

                    <p><?php the_sub_field( 'message' ); ?></p>

                    <?php if( get_sub_field( 'link' ) ): ?>

                        <?php
                          $link = get_sub_field( 'link' );
                          $linkTarget = $link['target'];
                        ?>

                        <a class="column__link" href="<?php echo $link['url']; ?>" target="<?php echo esc_attr($linkTarget); ?>"><?php the_sub_field( 'link_text' ); ?></a>

                    <?php endif; ?>

                </div>

            <?php endwhile; ?>

        </div>

    <?php endif; ?>

</div>