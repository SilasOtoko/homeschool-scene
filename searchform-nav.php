<div id="global-search-overlay" class="global-search-overlay full-page-backdrop">
	<div class="global-search-overlay__inner full-page-backdrop__inner">
		<form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get" id="global-search-overlay-form" autocomplete="off" role="search">
			<div class="global-search-overlay-input-wrapper">
				<input id="global-search-overlay__input" class="global-search-overlay__input input-field mousetrap" type="search" name="global-search-overlay__input" size="20" maxlength="100" placeholder="Enter search keyword(s)">

				<button id="global-search-overlay__submit" class="global-search-overlay__submit icon-search button button--smaller" type="submit" title="Click here to search.">
					<span class="sr-only">Search</span>
				</button>
			</div>
		</form>

		<div class="global-search-overlay__actions">
			<button id="global-search-overlay__close-button" class="global-search-overlay__close-button button button--larger">Close Search</button>
		</div>
	</div>
</div>
