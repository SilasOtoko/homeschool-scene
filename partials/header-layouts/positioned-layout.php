<div class="global-header-container container">

	<?php /* Global Logo */ ?>
	<div itemscope="" itemtype="http://schema.org/Organization">
		<?php /* If using a separate, "re-used" version of logo for mobile (cf. commented out block below), add class `u-hide-mobile` to this logo */ ?>
		<a id="global-logo" class="global-desktop-logo global-logo" href="/" title="Go to the home page &raquo;" itemprop="url">
			<span class="svg-wrapper">
				<?php include(get_stylesheet_directory() . "/assets/images/birdpress/logo--birdpress.svg"); ?>
			</span>
			<?php /* schema.org itemprop markup */ ?>
			<link itemprop="logo" href="<?php get_stylesheet_directory(); ?>/assets/images/logo--birdpress.png" />

			<?php /* If creating a mobile version of a logo that reduces the amount of logo shown, you can "re-use" the original/main logo SVG with the code below. The key is in the <use> tag to reference the xlink:href attribute to the original/main logo SVG's id attribute.

			To achieve the visual reduction for this version, you can set the <svg>'s height or width to a different value to visually crop items out — or use CSS to hide relevant group ID's. */ 
			/*
			<a class="global-mobile-logo global-logo u-hide-desktop" href="/" title="Go to the home page &raquo;" itemprop="url">
				<span class="svg-wrapper">
					<svg id="global-mobile-logo-used-svg" width="100%" height="54.307" class="footer-logo-used-svg" version="1.1" viewBox="0 0 277.945 41">
						<use xlink:href="#logo--birdpress"/>
					</svg>
				</span>
			</a>
			*/ ?>
		</a>
	</div>

	<?php /* Mobile hamburger menu + menu close link */ ?>
	<a class="hamburger-menu-button" title="Navigation Menu Access Button" href="#global-outer-navigation-wrapper" aria-label="navigation menu access button" role="button" aria-controls="global-outer-navigation-wrapper" aria-expanded="false" aria-pressed="false">
		<span class="sr-only">Menu</span>
		<span class="bar bar-1"></span>
		<span class="bar bar-2"></span>
		<span class="bar bar-3"></span>
		<span class="bar bar-4"></span>
	</a>

	<?php /* search reveal button */ ?>
	<button class="global-search-reveal-button global-search-trigger" aria-controls="global-search-overlay" aria-expanded="false" aria-pressed="false">
		<span class="global-search-reveal-icon icon-search">
			<span class="sr-only">Search</span>
		</span>
	</button>

</div>

<?php /* Navigation outer wrapper */ ?>
<div id="global-outer-navigation-wrapper" class="global-outer-navigation-wrapper">

	<div class="global-header-container container">

		<?php /* Main navigation */ ?>
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
				'link_before'     => '<span class="nav-link-inner">',
				'link_after'      => '</span>',
				'walker'          => new custom_simplify_walker
			);
			wp_nav_menu( $defaults );
			?>
		</nav>

	</div>

	<?php /* Utility nav with its own container inside */ ?>
	<?php /* NOTE: If using Utility Nav...
		Mind the aria-label value! Make sure it's descriptive for the items it contains. */ ?>
	<nav id="global-utility-nav" class="global-utility-nav global-nav" aria-label="Account and Store pages navigation">
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


<?php /* Global Search Overlay */ ?>
<div id="global-search-overlay" class="global-search-overlay full-page-backdrop">
	<div class="global-search-overlay__inner full-page-backdrop__inner">
		<form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get" id="global-search-overlay-form" autocomplete="off" role="search">
			<div class="global-search-overlay-input-wrapper">
				<input id="global-search-overlay__input" class="global-search-overlay__input input-field mousetrap" type="search" name="s" size="20" maxlength="100" placeholder="Enter search keyword(s)">

				<button id="global-search-overlay__submit" class="global-search-overlay__submit icon-search button button--smaller" type="submit" title="Click here to search.">
					<span class="sr-only">Search</span>
				</button>
			</div>
		</form>

		<div class="global-search-overlay__actions">
			<button id="global-search-overlay__close-button" class="global-search-overlay__close-button button button--outline">Close Search</button>
		</div>
	</div>
</div>
