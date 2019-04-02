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
	* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>


<body <?php body_class('dom-not-yet-loaded'); ?>>

	<a href="#global-main" class="skip-link-button button button--smaller button--subtle sr-only sr-only-focusable">Skip to main content</a>

	<div id="global-wrapper" class="global-wrapper">

		<header id="global-header" class="global-header is-showing-default">

			<div class="global-header__logo">

				<?php
				the_custom_logo();
				if ( is_front_page() && is_home() ) :
					?>
					<h1 class="global-header__site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php
				else :
					?>
					<p class="global-header__site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php
				endif; ?>
				
			</div>
			
			<nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e( 'Top Menu', 'twentynineteen' ); ?>">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'main-menu',
						'menu_class'     => 'main-menu',
						'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					)
				);
				?>
			</nav><!-- #site-navigation -->

		</header>

		<main id="global-main" class="global-main">

			<?php /* Browser Outdated Message -- hidden by default but shown if the browser does not support the HTML <picture> element -- with an exception for IE 11.
			The styles are defined in Perch's _browser-fixes.less file. */ ?>
			<div class="browser-outdated-message browser-message" style="display: none;">
				<span class="far fa-exclamation-triangle"></span> Your browser is outdated. <a href="https://browsehappy.com/" target="_blank" rel="noopener" style="text-decoration: underline; font-weight: bold;">Upgrade to a modern browser</a> to better experience this&nbsp;site.
			</div>
			<?php /* Browser No JS Message -- hidden by default but shown if browser has class `mod-no-js`. This method, which relies on Modernizr's successful initialization, might give us better coverage for browsers that have JS turned on but are blocking JS with a tool/plugin/blocker on top.
			The styles are defined in Perch's _browser-fixes.less file. */ ?>
			<!-- <div class="browser-no-js-message browser-message" style="display: none;">
				<p><span class="far fa-exclamation-triangle"></span> Your browser has turned off or is blocking Javascript.</p>
				<p>If you are using a content blocker, check to see that you have not globally turned off Javascript.</p>
				<p>If you have turned it off manually in your browser, please enable it to better experience this site.</p>
			</div> -->
