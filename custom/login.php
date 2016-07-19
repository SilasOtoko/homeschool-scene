<?php

/**
 * CUSTOM LOGIN
 */



/**
 * Custom login page for theme
 */
class customize_wp_login {

    function __construct(){
        add_action('login_head', array($this, 'login_head'));
        add_filter('login_headerurl', array($this, 'login_headerurl'));
        add_filter('login_headertitle', array($this, 'login_headertitle'));
        // add_filter('login_redirect', array($this, 'login_redirect'), 10, 3);
    }

    /* Add to login header */
    function login_head(){
    ?>
        <style>
            .login {
                background-color: #ececec;
            }
            .login form {
                background-color: #ffffff;
            }
            .login h1 a {
                background-image: url('/assets/images/birdpress/screenshot.png');
                background-size: 320px 240px;
                width: 320px;
                height: 240px;
                margin-bottom: 15px;

                box-shadow: 0 1px 3px rgba(0,0,0,.13);
            }
            .login #nav a {
                color: #726399;
            }
            p#backtoblog {
                display: none;
            }
            #wp-submit {
                position: relative;
                display: inline-block;
                padding: 0 1.0em;
                height: 2em;
                line-height: 1.9em;
                border: 1px solid #726399;
                border-radius: 0.33em;
                cursor: pointer;
                font-family: Freesans, Helmet, sans-serif;
                font-size: 18px;
                -webkit-font-smoothing: antialiased;
                color: #fff;
                text-shadow: 0 0.0825em 0.0825em rgba(0, 0, 0, 0.5);
                text-decoration: none !important;
                background-color: #726399;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -ms-touch-action: none;
                white-space: nowrap;
                -webkit-box-shadow: inset 0 -0.125em 0.375em 0 rgba(0, 0, 0, 0.25), inset 0 0.125em 0.375em rgba(255, 255, 255, 0.25), 0 0.0625em 0.1875em 0 rgba(0, 0, 0, 0.25);
                box-shadow: inset 0 -0.125em 0.375em 0 rgba(0, 0, 0, 0.25), inset 0 0.125em 0.375em rgba(255, 255, 255, 0.25), 0 0.0625em 0.1875em 0 rgba(0, 0, 0, 0.25);
                -webkit-transition: all 0.12s ease-out;
                transition: all 0.12s ease-out;
            }
            #wp-submit:focus,
            #wp-submit:hover {
                background-color: #8e81ae;
                color: #fff;
                text-decoration: none;
            }
            #wp-submit:active {
                color: #ccc;
                text-shadow: 0 -0.0625em 0.0625em rgba(0, 0, 0, 0.5);
                background-color: #443b5b;
                outline: none;
                -webkit-transform: translateY(1px);
                -ms-transform: translateY(1px);
                transform: translateY(1px);
                -webkit-box-shadow: inset 0 -0.125em 0.375em 0 rgba(0, 0, 0, 0.01), inset 0 0.1875em 0.125em 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.15);
                box-shadow: inset 0 -0.125em 0.375em 0 rgba(0, 0, 0, 0.01), inset 0 0.1875em 0.125em 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.15);
            }


        </style>
    <?php
    }

    /* Set header link URL to current site home */
    function login_headerurl(){
        return get_bloginfo('url');
    }

    /* Set header link title to current site name */
    function login_headertitle(){
        return get_bloginfo('name');
    }

} //EC
new customize_wp_login;

