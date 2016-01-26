<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<head>

<!-- _______ So Meta ___________________________________ -->

	<meta charset="UTF-8" />
	<!-- Forces IE8 and IE9 to render best standards support -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<!-- Viewport control -->
	<meta name="viewport" content="width=device-width, initial-scale=1">


<!-- _______ Site Title & Desc. ________________________ -->

	<title><?php wp_title(' | ', true, 'right'); ?></title>
	<!-- <link href="http://domain.com" rel="home"> -->


<!-- _______ Social + Icons ____________________________ -->

	<link rel="shortcut icon" href="/favicon.ico" />
	<!-- <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" /> -->


<!-- _______ Styles + LESS _____________________________ -->

	<?php /* <!-- required stylesheet for WP -->
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" /> */ ?>

	<?php /* <!-- backend-compiled LESS --> */ ?>
	<?php echo Less::stylesheet('global.less'); ?>


<!-- _______ Scripts that need load priority ___________ -->

	<!-- jQuery - CDN request with local fallback -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/js/jquery-2.1.3.min.js">\x3C/script>')</script>

	<!-- Modernizr: Feature detection + HTML5 shim -->
	<script src="/js/modernizr-custom.js"></script>

	<!-- Respond.js: Polyfill basic @media query support -->
	<script src="/js/respond.js"></script>


	<?php /*
<!-- _______ Resource or Page Prefetch or Preload ______ -->

	<!-- <link rel="prefetch" href="http://domain.com/hello-world.html" /> -->
	<!-- <link rel="prefetch" href="/css/alt-stylesheet.css" /> -->
	<!-- <link rel="prefetch" href="/images/common-non-home-image.png" /> -->

	<!-- <link rel="preload" href="http://domain.com/hello-world.html" /> -->
	*/ ?>


<!-- _______ WordPress Head ____________________________ -->

	<?php wp_head(); ?>

</head>


<!--[if IE 8]>         <body <?php body_class('lt-ie9'); ?>> <![endif]-->
<!--[if IE 9]>         <body <?php body_class('ie9'); ?>> <![endif]-->
<!--[if gt IE 9]><!--> <body <?php body_class(); ?>> <!--<![endif]-->
	<a href="#global-main" class="sr-only">Skip to content</a>

	<div id="global-wrapper" class="global-wrapper hfeed">

		<header id="global-header" class="global-header show" role="banner">

			<div class="global-header-container container">

				<!-- Global Logo -->
				<a id="global-logo" class="global-logo" href="/">
					<img class="global-logo-image" src="//placehold.it/260x120/fceb72/726399&text=Birdpress Theme" width="130" alt="">
				</a>

			</div>

			<!-- Navigation outer wrapper -->
			<div id="global-outer-navigation-wrapper" class="global-outer-navigation-wrapper">

				<div class="global-header-container container">

					<!-- Main navigation -->
					<nav id="global-main-nav" class="global-main-nav global-nav clearfix" role="navigation" aria-label="Primary">
						<?php
						$defaults = array(
							'theme_location'  => 'main-menu',
							'container'       => 'false',
							// 'container_id'    => 'global-nav',
							// 'container_class' => 'global-nav',
							'menu_class'      => 'global-nav-list',
							'sub_menu_class'  => 'global-nav-list-child',
							'element_class'   => 'global-nav-li',
							'link_class'      => 'global-nav-link',
							'walker'          => new custom_simplify_walker
						);
						wp_nav_menu( $defaults );
						?>
					</nav>

				</div>

				<!-- Utility nav with its own container inside -->
				<nav id="global-utility-nav" class="global-utility-nav global-nav" role="navigation" aria-label="Secondary">

					<div class="global-header-container container">

						<ul class="global-utility-nav-list global-nav-list">
							<li class="global-utility-nav-li global-nav-li">
								<a class="global-utility-nav-link global-nav-link" href="#/">Utility nav link</a>
							</li>
							<li class="global-utility-nav-li global-nav-li">
								<a class="global-utility-nav-link global-nav-link" href="#/">Utility nav link</a>
							</li>
							<li class="global-utility-nav-li global-nav-li">
								<a class="global-utility-nav-link global-nav-link" href="#/">Utility nav link</a>
							</li>
						</ul>

					</div>

				</nav>

				</div><!-- /.global-outer-navigation-wrapper -->


				<div class="global-header-container container">

					<!-- Mobile hamburger menu + menu close link -->
					<a class="animated-responsive-menu-link" title="Navigation Menu" href="#global-outer-navigation-wrapper" aria-label="navigation menu button" role="button" aria-controls="global-outer-navigation-wrapper" aria-expanded="false">
						<span class="bar bar-1"></span>
						<span class="bar bar-2"></span>
						<span class="bar bar-3"></span>
						<span class="bar bar-4"></span>
					</a>


					<button class="responsive-menu-closer" title="Close Menu">
						Close Menu
					</button>

					<!-- Mobile search reveal control + the main form -->
					<button class="global-search-reveal-button icon-search" title="Click or tap here to reveal the site search">
						<span class="sr-only">Search</span>
					</button>
					<?php get_template_part('searchform', 'nav') ?>
					<?php // get_search_form(); ?>

				</div>

			</div>

		</header>

		<main id="global-main" class="global-main" role="main">

			<!--[if lt IE 9]>
				<p class="icon-warning-stop browser-outdated-message">
					 Your browser is outdated. <a href="http://browsehappy.com/" target="_blank" style="text-decoration: underline; font-weight: bold;">Upgrade to a modern browser</a> to better experience this site.
				</p>
			<![endif]-->
