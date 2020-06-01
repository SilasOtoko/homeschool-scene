<nav class="global-header__navigation--hamburger">

    <button tabindex="0" onclick="openNav()" class="toggle-sidebar">
        <span class="hamburger">

            <span class="hamburger__label">Menu</span>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 512 512" xml:space="preserve" style="max-width: 25px;">
                <g>
                    <g>
                        <path class="st0" d="M491.3,235.3H20.7C9.3,235.3,0,244.6,0,256s9.3,20.7,20.7,20.7h470.6c11.4,0,20.7-9.3,20.7-20.7
                            C512,244.6,502.7,235.3,491.3,235.3z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path class="st0" d="M491.3,78.4H20.7C9.3,78.4,0,87.7,0,99.1s9.3,20.7,20.7,20.7h470.6c11.4,0,20.7-9.3,20.7-20.7
                            S502.7,78.4,491.3,78.4z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path class="st0" d="M491.3,392.2H20.7C9.3,392.2,0,401.5,0,412.9s9.3,20.7,20.7,20.7h470.6c11.4,0,20.7-9.3,20.7-20.7
                            S502.7,392.2,491.3,392.2z"/>
                    </g>
                </g>
            </svg>

        </span>
    </button>

    <div id="overlay-menu-container" class="overlay-menu-container">

        <button tabindex="0" class="close-button" onclick="closeNav()">

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 119" style="enable-background:new 0 0 120 119; max-height: 50px; max-width: 50px;" xml:space="preserve">
                <style type="text/css">
                    .st0{stroke-width:8;stroke-miterlimit:10;}
                </style>
                <title>close</title>
                <line class="st0" x1="10" y1="9" x2="110" y2="109"/>
                <line class="st0" x1="110" y1="9" x2="10" y2="109"/>
            </svg>

        </button>

        <nav class="overlay-menu">

            <?php
                $defaults = array(
                    'container' => false,
                    'div' => false,
                    'theme_location' => 'responsive-menu'
                );
             wp_nav_menu( $defaults );
            ?>

        </nav>

    </div>

    <script>
        function openNav() {
            jQuery('.global-wrapper').removeClass('nav-closed').addClass('nav-open');
        }

        function closeNav() {
            jQuery('.global-wrapper').removeClass('nav-open').addClass('nav-closed');
        }
    </script>

</nav>
