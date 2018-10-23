<?php /* Demonstration sidebar for pages. As of this writing a copy of the same file from IFN. Shows lots of conditional logic for adding items. */ ?>

<?php /* */
	add_filter('the_title', 'ifn_custom_list_page_title', 10, 2);

	$ancestors = ($post->post_parent) ? get_ancestors( $post->ID, 'page' ) : [$post->ID];
	$ancestor_id = array_pop($ancestors);


	echo '<ul class="parent-sidebar-link-listing sidebar-link-listing link-listing"><li>';

	$ancestor = get_page( $ancestor_id );
	echo '<a href="' . get_permalink( $ancestor ) . '">' . apply_filters('the_title', $ancestor->post_title, $ancestor_id) .'</a>';

	echo '<ul class="child-sidebar-link-listing sidebar-link-listing link-listing">';

	// applies to all pages
	wp_list_pages(
		array (
			'title_li' => '',
			'sort_column' => 'menu_order',
			'child_of' => $ancestor_id,
			'depth' => 2
		)
	);

	// applies to the Carrier Wholesale & Business Direct pages only — throw in the Services subnav
	if (
		is_page('Carrier Wholesale') || 
		$post->post_parent == '265' ||
		is_page('Business Direct') || 
		$post->post_parent == '168'
	) :
	wp_list_pages(
		array (
			'title_li' => '',
			'sort_column' => 'menu_order',
			'child_of' => 57,
			'depth' => 2
		)
	);
	endif;

	remove_filter('the_title', 'ifn_custom_list_page_title', 10, 2);

	echo '</ul>';

	echo '</li></ul>';
 ?>



<?php /* Hardcoded (for now) list of links that get added on for certain sections */ ?>
<ul class="sidebar-link-listing sidebar-extra-links-listing link-listing">
	<?php if (is_page('Services') || $post->post_parent == '57') : ?>
	<li><a class="extra-sidebar-link sidebar-link" href="/network/statewide-fiber-map/">Fiber Locator</a></li>
	<?php /*<li><a class="extra-sidebar-link sidebar-link" href="#/">Sales Sheet</a></li>*/ ?>

	<?php /* elseif (is_page('84') || $post->post_parent == '84') : ?>
		<li><a class="extra-sidebar-link sidebar-link" href="/category/economic-development/">Economic Development</a></li>
	<?php /**/ ?>

	<?php /* elseif (is_page('154') || $post->post_parent == '154') : ?>
		<li><a class="extra-sidebar-link sidebar-link" href="https://indianafiber.smarthub.coop/Login.html"  target="_blank" rel="noopener">Billing &amp; Payments</a></li>
		<li><a class="extra-sidebar-link sidebar-link" href="/support/rates">Rates</a></li>
	<?php /**/ ?>

	<?php // Case Study page download links ?>
	<?php elseif (is_page('35')) : ?>
		<li><a class="extra-sidebar-link sidebar-link" href="/assets/documents/cs-harrison-college.pdf"><span class="icon-download"></span> Download Case Study</a></li>
	<?php elseif (is_page('46')) : ?>
		<li><a class="extra-sidebar-link sidebar-link" href="/assets/documents/cs-becks.pdf"><span class="icon-download"></span> Download Case Study</a></li>
	<?php elseif (is_page('49')) : ?>
		<li><a class="extra-sidebar-link sidebar-link" href="/assets/documents/cs-community-health-network.pdf"><span class="icon-download"></span> Download Case Study</a></li>
	<?php elseif (is_page('54')) : ?>
		<li><a class="extra-sidebar-link sidebar-link" href="/assets/documents/cs-macallister-machinery.pdf"><span class="icon-download"></span> Download Case Study</a></li>


	<?php endif; ?>
</ul>


<?php if( get_field('sidebar_extra_content') ): ?>
	<div class="sidebar-extra-content"><?php the_field('sidebar_extra_content'); ?></div>
<?php endif; ?>
