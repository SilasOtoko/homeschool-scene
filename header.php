<!DOCTYPE html>
<html class="mod-no-js" <?php language_attributes(); ?>>
<head>
	<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	* Built with love by...
	*  ____                ___   _         _
	* |  _ \ __ _ _ __ ___\_  | (_)_ __ __| |
	* | |_) / _` | '__/ _ \ )_ \| | '__/ _` |
	* |  _ < (_| | | |  __/   ) | | | | (_| |
	* |_| \_\__,_|_|  \___|  /_/|_|_|  \__,_|
	*
	* Rare Bird, Inc. | http://rarebirdinc.com/ | @rarebirdinc.
	* Built using Rare Bird's Perch Framework v0.5.1
	* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<!-- _______ So Meta ___________________________________ -->

	<meta charset="UTF-8" />
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no">


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

	<!-- Modernizr: Feature detection + HTML5 shiv -->
	<script src="/assets/third-party/perch/js/modernizr-custom.js"></script>


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


<!--[if lt IE 9]>      <body <?php body_class('page-preloading lt-ie9'); ?>> <![endif]-->
<!--[if IE 9]>         <body <?php body_class('page-preloading ie9'); ?>> <![endif]-->
<!--[if gt IE 9]><!--> <body <?php body_class('page-preloading'); ?>> <!--<![endif]-->
	<a href="#global-main" class="sr-only">Skip to content</a>

	<div id="global-wrapper" class="global-wrapper hfeed">

		<header id="global-header" class="global-header show" role="banner">

			<div class="global-header-container container">

				<!-- Global Logo -->
				<a id="global-logo" class="global-logo" href="/">
					<span class="svg-wrapper">
						<?php
						$global_logo_path = get_template_directory() . '/assets/images/birdpress/logo--birdpress.svg';
						echo file_get_contents($global_logo_path);
						?>
					</span>
				</a>

				<!-- Mobile hamburger menu + menu close link -->
				<a class="hamburger-menu-button" title="Navigation Menu" href="#global-outer-navigation-wrapper" aria-label="navigation menu button" role="button" aria-controls="global-outer-navigation-wrapper" aria-expanded="false">
					<span class="bar bar-1"></span>
					<span class="bar bar-2"></span>
					<span class="bar bar-3"></span>
					<span class="bar bar-4"></span>
				</a>

				<!-- search reveal button -->
				<button class="global-search-reveal-button global-search-trigger" href="#/">
					<span class="global-search-reveal-icon icon-search">
						<span class="sr-only">Search</span>
					</span>
				</button>

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
							'menu_class'      => 'global-main-nav-list global-nav-list',
							'sub_menu_class'  => 'global-nav-child-list global-nav-list',
							'element_class'   => 'global-main-nav-item global-nav-item',
							'link_class'      => 'global-main-nav-link global-nav-link',
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
							<li class="global-utility-nav-item global-nav-item">
								<a class="global-utility-nav-link global-nav-link" href="#/">Utility nav link</a>
							</li>
							<li class="global-utility-nav-item global-nav-item">
								<a class="global-utility-nav-link global-nav-link" href="#/">Utility nav link</a>
							</li>
							<li class="global-utility-nav-item global-nav-item">
								<a class="global-utility-nav-link global-nav-link" href="#/">Utility nav link</a>
							</li>
							<li class="global-utility-nav-item global-nav-item">
								<a class="global-search-trigger global-utility-nav-link global-nav-link" href="#/">
									<span class="the-icon icon-search">
										<span class="sr-only">Search </span>
									</span>
									<span class="desktop-hidden">Search</span>
								</a>
							</li>
						</ul>

					</div>

				</nav>

			</div><!-- /.global-outer-navigation-wrapper -->


			<!-- Global Search Overlay -->
			<?php get_template_part('searchform', 'nav') ?>
			<?php // get_search_form(); ?>


		</header>

		<main id="global-main" class="global-main" role="main">

			<!--[if lt IE 9]>
				<p class="browser-outdated-message">
					<span class="icon-warning-stop"></span> Your browser is outdated. <a href="http://browsehappy.com/" target="_blank" style="text-decoration: underline; font-weight: bold;">Upgrade to a modern browser</a> to better experience this site.
				</p>
			<![endif]-->
