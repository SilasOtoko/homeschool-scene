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
$heading = get_field('heading') ?: 'Your heading here...';
$message = get_field('message') ?: 'Your message here...';
$link = get_field('button_link') ?: 'Select Link';
$button_text = get_field('button_text') ?: 'Set Button Text';
$background_color = get_field('background_color');
$alignment = get_field('alignment');

?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> bg-<?php echo $background_color; ?> align<?php echo $alignment; ?>">

    <div class="text-wrapper">
        <h2><?php echo $heading; ?></h2>
        <p><?php echo $message; ?></p>
        <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>" class="button button--primary">
            <?php echo $button_text; ?>
        </a>
    </div>

</div>