<?php

if( !function_exists( 'register_acf_block_types' ) ) { // in case child theme wants to use this
    function register_acf_block_types() {

        acf_register_block_type(array(
            'name'              => 'post-cards',
            'title'             => __('Post Cards'),
            'description'       => __('A grid of posts in card format'),
            'render_template'   => 'template-parts/acf/post-cards.php',
            'category'          => 'homeschoolscene-blocks',
            'icon'              => 'screenoptions',
            'keywords'          => array( 'posts', 'cards' ),
        ));

        acf_register_block_type(array(
            'name'              => 'product-cards',
            'title'             => __('Product Cards'),
            'description'       => __('A grid of products in card format'),
            'render_template'   => 'template-parts/acf/product-cards.php',
            'category'          => 'homeschoolscene-blocks',
            'icon'              => 'screenoptions',
            'keywords'          => array( 'products', 'cards' ),
        ));
    }

    // Check if function exists and hook into setup.
    if( function_exists('acf_register_block_type') ) {
        add_action('acf/init', 'register_acf_block_types');
    }
}

?>