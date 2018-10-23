<div class="header-body-container container">

	<?php /* Global Logo */ ?>
	<?php /* If using a separate, "re-used" version of logo for mobile (cf. commented out block below), add class `u-hide-mobile` to this logo */ ?>
	<a id="global-logo" class="global-desktop-logo global-logo" href="/" title="Go to the home page &raquo;">
		<span class="svg-wrapper">
			<?php include(get_stylesheet_directory() . "/assets/images/birdpress/logo--birdpress.svg"); ?>
		</span>
	</a>

	<?php /* If creating a mobile version of a logo that reduces the amount of logo shown, you can "re-use" the original/main logo SVG with the code below. The key is in the <use> tag to reference the xlink:href attribute to the original/main logo SVG's id attribute.

	To achieve the visual reduction for this version, you can set the <svg>'s height or width to a different value to visually crop items out — or use CSS to hide relevant group ID's */ 
	/*
	<a class="global-mobile-logo global-logo u-hide-desktop" href="/" title="Go to the home page &raquo;">
		<span class="svg-wrapper">
			<svg id="global-mobile-logo-used-svg" width="100%" height="54.307" class="footer-logo-used-svg" version="1.1" viewBox="0 0 277.945 41">
				<use xlink:href="#logo--takeoff"/>
			</svg>
		</span>
	</a>
	*/ ?>

	<?php /* Mobile hamburger menu + menu close link */ ?>
	<a class="hamburger-menu-button" title="Navigation Menu Access Button" href="#global-outer-navigation-wrapper" aria-label="navigation menu access button" role="button" aria-controls="global-outer-navigation-wrapper" aria-expanded="false" aria-pressed="false">
		<span class="sr-only">Menu</span>
		<span class="bar bar-1"></span>
		<span class="bar bar-2"></span>
		<span class="bar bar-3"></span>
		<span class="bar bar-4"></span>
	</a>

	<?php /* search reveal button */ ?>
	<button class="global-search-reveal-button global-search-trigger" aria-controls="global-search-panel" aria-expanded="false" aria-pressed="false">
		<span class="global-search-reveal-icon icon-search">
			<span class="sr-only">Search</span>
		</span>
	</button>

	<?php /* Global Search Panel */ ?>
	<div id="global-search-panel" class="global-search-panel">
		<div class="global-search-panel__inner">
			<form action="/search" method="get" id="global-search-panel-form" class="global-search-panel-form" autocomplete="off" role="search">
				<div class="global-search-panel-input-wrapper input-embedded-button">
					<input id="global-search-panel__input" class="global-search-panel__input input-embedded-button__input input-field mousetrap" type="search" name="s" size="20" maxlength="100" placeholder="Search keyword(s)">

					<button id="global-search-panel__submit" class="global-search-panel__submit input-embedded-button__button icon-search button button--smaller" type="submit" title="Click here to search.">
						<span class="sr-only">Search</span>
					</button>
				</div>
			</form>

			<div class="global-search-panel__actions">
				<button id="global-search-panel__close-button" class="global-search-panel__close-button button button--outline button--subtle button--single-icon u-border-radius-rounded-circle" aria-label="Use this button to close the search panel">
					<?php /* AKA Perch's /assets/images/icon--times--thicker.svg */ ?>
					<svg class="svg-icon--times--thicker" width="1em" height="1em" viewBox="0 0 89 89" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="icon--times" transform="translate(44.709875, 44.709875) rotate(45.273138) translate(-44.709875, -44.709875) translate(-5.290125, -5.290125)" fill="currentColor"><polygon points="44.1799658 -6.01898966 56.1799039 -5.98043219 55.8200342 106.01899 43.8200961 105.980432"></polygon><polygon points="-6 56 -6 44 106 44 106 56"></polygon></g></svg>
				</button>
			</div>
		</div>
	</div>

</div><!-- /.header-body-container -->


<?php /* Utility Nav */ ?>
<?php /* NOTE: If using Utility Nav...
	Mind the aria-label value! Make sure it's descriptive for the items it contains. */ ?>
<nav id="global-utility-nav" class="global-utility-nav global-nav" aria-label="Account and Store pages navigation">
	<div class="global-utility-nav-container container">
		<ul class="global-utility-nav-list global-nav-list u-hide-mobile">
			<li class="global-utility-nav-item global-nav-item">
				<a class="global-utility-nav-link global-nav-link" href="/login.php">
					Sign In
				</a>
			</li>
			<li class="global-utility-nav-item global-nav-item">
				<a class="global-utility-nav-link global-nav-link" href="#/">
					My Favorites
				</a>
			</li>
		</ul>
	</div>
</nav><!-- /#global-utility-nav -->


<?php /* Global Outer Navigation Wrapper / navigation drawer wrapper */ ?>
<div id="global-outer-navigation-wrapper" class="navigation-drawer-wrapper">
	<div class="navigation-drawer-overlay" aria-hidden="true"></div>

	<div class="navigation-drawer">
		<?php /* Main navigation */ ?>
		<nav id="global-main-nav" class="global-main-nav global-nav" aria-label="Primary Navigation">
			<?php
			$defaults = array(
				'theme_location'  => 'main-menu',
				'container'       => 'false',
				// 'container_id'    => 'global-nav',
				// 'container_class' => 'global-nav',
				'menu_class'      => 'global-main-nav-list global-nav-list',
				'sub_menu_class'  => 'global-main-nav-child-list global-nav-child-list global-nav-list',
				'element_class'   => 'global-main-nav-item global-nav-item',
				'link_class'      => 'global-main-nav-link global-nav-link',
				'link_before'     => '<span class="nav-link-inner">',
				'link_after'      => '</span>',
				'walker'          => new custom_simplify_walker
			);
			wp_nav_menu( $defaults );
			?>
	</div><!-- /.navigation-drawer -->
</div><!-- /.navigation-drawer-wrapper -->
