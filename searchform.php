<form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get" role="search">
	<input class="search-form-input input-autowidth input-field" type="search" name="s" size="20" maxlength="100" placeholder="Search the blog...">
	<input type="hidden" name="post_type" value="post">

	<button class="search-form-button button button-smaller icon-search" type="submit" title="Click here to search.">
		<span class="sr-only">Search</span>
	</button>
</form>
