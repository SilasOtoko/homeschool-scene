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
	* Rare Bird, Inc. | http://rarebirdinc.com/ | @rarebirdinc
	* Built using Rare Bird’s Perch Framework v0.9.0 + BirdPress v0.9.0
	* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

	<?php /* Meta Tags */ ?>
	<meta charset="UTF-8" />
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no">

	<?php /* Site Title & Description */ ?>
	<title><?php wp_title(' | ', true, 'right'); ?></title>
	<!-- <link href="http://domain.com" rel="home"> -->

	<?php /* Preconnect + Preload for speedier performance
	<link rel="preconnect" href="https://use.typekit.net" crossorigin>
	<link rel="preload" href="https://use.typekit.net/{{TYPEKIT_KIT_ID}}.js" as="script" crossorigin>
	*/ ?>

	<?php /* CSS file compiled with Gulp */ ?>
	<link rel="stylesheet" type="text/css" href="/assets/css/global.css">

	<?php /* Favicons + Device Icons */ ?>
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"> <?php /* All iOS versions __ this is a single 180px file that should scale down OK */ ?>
	<link rel="icon" sizes="192x192" href="/icon-hd.png"> <?php /* Android Devices High Resolution */ ?>
	<link rel="icon" sizes="128x128" href="/icon.png"> <?php /* Android Devices Normal Resolution */ ?>
	<link rel="icon" href="/favicon.ico"> <?php /* Combined 16px, 32px, 48px, 64px favicon
		----> TIP::: Install ImageMagick and run
		$convert favicon-16.png favicon-32.png favicon-48.png favicon-64.png favicon.ico
		*/ ?>

	<?php /* <!-- Modernizr: Feature detection --> */ ?>
	<script><?php include(get_stylesheet_directory() . "/assets/js/modernizr-custom.js"); ?></script>

	<?php /* TypeKit Advanced Embed Code */ ?>
	<?php /*
	<script>
	  (function(d) {
	    var config = {
	      kitId: '{{TYPEKIT_KIT_ID}}',
	      scriptTimeout: 3000,
	      async: true
	    },
	    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
	  })(document);
	</script>
	*/ ?>

	<?php /* WordPress Head */ ?>
	<?php wp_head(); ?>
</head>


<!--[if lte IE 9]>     <body <?php body_class('dom-not-yet-loaded lte-ie9'); ?>> <![endif]-->
<!--[if gt IE 9]><!--> <body <?php body_class('dom-not-yet-loaded'); ?>> <!--<![endif]-->

	<a href="#global-main" class="sr-only">Skip to main content</a>

	<div id="global-wrapper" class="global-wrapper hfeed">

		<header id="global-header" class="global-header show">

			<div class="global-header-container container">

				<?php /* Global Logo */ ?>
				<div itemscope itemtype="http://schema.org/Organization">
					<a id="global-logo" class="global-logo" href="/" itemprop="url">
						<?php /* ---> 1 <--- The <svg> method --- */ ?>
						<div class="svg-wrapper">
							<?php include(get_stylesheet_directory() . "/assets/images/birdpress/logo--birdpress.svg"); ?>
						</div>
						<!-- schema.org itemprop markup -->
						<link itemprop="logo" content="<?php get_stylesheet_directory(); ?>/assets/images/logo--birdpress.png" />

						<?php /* ---> 2 <--- The <img> method ---
						<img class="global-logo-image" src="<?php get_template_directory(); ?>/assets/images/birdpress/logo--birdpress--white.svg" alt="Birdpress logo" itemprop="logo">
						*/ ?>
					</a>
				</div>

				<!-- Mobile hamburger menu + menu close link -->
				<a class="hamburger-menu-button" title="Navigation Menu Access Button" href="#global-outer-navigation-wrapper" aria-label="navigation menu access button" role="button" aria-controls="global-outer-navigation-wrapper" aria-expanded="false" aria-pressed="false">
					<span class="sr-only">Menu</span>
					<span class="bar bar-1"></span>
					<span class="bar bar-2"></span>
					<span class="bar bar-3"></span>
					<span class="bar bar-4"></span>
				</a>

				<!-- search reveal button -->
				<button class="global-search-reveal-button global-search-trigger" aria-controls="global-search-overlay" aria-expanded="false" aria-pressed="false">
					<span class="global-search-reveal-icon icon-search">
						<span class="sr-only">Search</span>
					</span>
				</button>

			</div>

			<!-- Navigation outer wrapper -->
			<div id="global-outer-navigation-wrapper" class="global-outer-navigation-wrapper">

				<div class="global-header-container container">

					<!-- Main navigation -->
					<nav id="global-main-nav" class="global-main-nav global-nav clearfix" aria-label="Primary Navigation">
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
				<?php /* NOTE: If using Utility Nav...
						Change the aria-label="Secondary Navigation" to something more descriptive,
						like "Account and Store pages navigation" (if an account / store was linked) */ ?>
				<nav id="global-utility-nav" class="global-utility-nav global-nav" aria-label="Secondary Navigation">
					<div class="container"><!-- global-header-container -->
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
						</ul>
					</div>
				</nav>

			</div><!-- /.global-outer-navigation-wrapper -->


			<!-- Global Search Overlay -->
			<?php get_template_part('searchform', 'nav') ?>
			<?php // get_search_form(); ?>


		</header>

		<main id="global-main" class="global-main">

			<?php /* Browser Outdated Message -- hidden by default but shown if the browser does not support the HTML <picture> element -- with an exception for IE 11.
			The styles are defined in Perch's _browser-fixes.less file. */ ?>
			<div class="browser-outdated-message browser-message" style="display: none;">
				<span class="icon-warning-stop"></span> Your browser is outdated. <a href="https://browsehappy.com/" target="_blank" style="text-decoration: underline; font-weight: bold;">Upgrade to a modern browser</a> to better experience this&nbsp;site.
			</div>
			<?php /* Browser No JS Message -- hidden by default but shown if browser has class `mod-no-js`. This method, which relies on Modernizr's successful initialization, might give us better coverage for browsers that have JS turned on but are blocking JS with a tool/plugin/blocker on top.
			The styles are defined in Perch's _browser-fixes.less file. */ ?>
			<div class="browser-no-js-message browser-message" style="display: none;">
				<p><span class="icon-warning-stop"></span> Your browser has turned off or is blocking Javascript.</p>
				<p>If you are using a content blocker, check to see that you have not globally turned off Javascript.</p>
				<p>If you have turned it off manually in your browser, please enable it to better experience this site.</p>
			</div>
