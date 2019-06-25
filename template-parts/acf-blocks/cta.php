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
$id = 'cta-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'acf-block--cta acf-block';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

// Load values and assing defaults.
$heading = get_field('heading');
$message = get_field('message');
$link = get_field('button_link') ?: 'Select Link';
$button_text = get_field('button_text') ?: 'Set Button Text';
$background_color = get_field('background_color');
$alignment = get_field('alignment');

?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> bg-<?php echo $background_color; ?> align<?php echo $alignment; ?>">

  <div class="text-wrapper">

    <?php if( get_field( 'heading' ) ): ?>

      <h2><?php echo $heading; ?></h2>

    <?php endif; ?>

    <?php if( get_field( 'message' ) ): ?>

      <div><?php echo $message; ?></div>

    <?php endif; ?>

    <?php if( get_field( 'button_link' ) && get_field( 'button_text' ) ): ?>

      <?php
        $link = get_field( 'button_link' );
        $linkTarget = $link['target'];
      ?>
      
      <div class="button-wrapper">
        <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>" class="button button--primary">
          <?php echo $button_text; ?>
        </a>
      </div>

    <?php endif; ?>

  </div>

</div>