<!-- Global Search // Wrapped like a nav & buried like others on mobile -->
<div class="full-page-menu global-search" id="global-search">
	<div class="container hidden-xs">
		<button class="global-search-closer button-corner-close-minimal">&times;</button>
	</div>
	<div class="full-page-menu-inner global-search-form-wrap top-level-nav-menu-inner">
		<form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get" id="searchform" role="search">
			<input class="global-search-input input-field mousetrap" type="search" id="global-search-input" name="s" size="20" maxlength="100" placeholder="Search">

			<!-- <input class="global-search-submit button button-smaller" type="submit" value="Search" /> -->
			<button id="button-global-search" class="global-search-submit button button-smaller icon-search" data-icon-text-md="Search" type="submit" title="Click here to search.">
				<span class="sr-only">Search</span>
			</button>
		</form>

		<div class="full-page-menu-actions visible-xs">
			<button id="button-close-search" class="button-close-search button button-larger">Close Search</button>
		</div>
	</div>
</div>
