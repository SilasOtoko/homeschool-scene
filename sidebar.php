<?php /*
<ul class="parent-sidebar-link-listing sidebar-link-listing link-listing">
	<li>
		<a href="/blog/">Blog</a>
	</li>
</ul>
*/ ?>


<?php if ( is_active_sidebar('primary-widget-area') ) : ?>

	<div id="primary-widget-area" class="primary-widget-area widget-area">
		<div class="sid sidebar-widget-listing widget-listing">
			<?php dynamic_sidebar('primary-widget-area'); ?>
		</div>
	</div>

<?php endif; ?>
