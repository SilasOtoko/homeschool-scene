<?php

function register_acf_block_types() {

    // register a testimonial block.
    acf_register_block_type(array(
        'name'              => 'testimonial',
        'title'             => __('Testimonial'),
        'description'       => __('A custom testimonial block.'),
        'render_template'   => 'template-parts/acf-blocks/testimonial.php',
        'category'          => 'formatting',
        'icon'              => 'admin-comments',
        'keywords'          => array( 'testimonial', 'quote' ),
    ));

    acf_register_block_type(array(
        'name'              => 'cta',
        'title'             => __('CTA'),
        'description'       => __('A custom CTA block.'),
        'render_template'   => 'template-parts/acf-blocks/cta.php',
        'category'          => 'layout',
        'icon'              => 'admin-comments',
        'keywords'          => array( 'cta', 'callout' ),
        'align'             => array( 'full', 'wide' ),
    ));
}

// Check if function exists and hook into setup.
if( function_exists('acf_register_block_type') ) {
    add_action('acf/init', 'register_acf_block_types');
}

?>