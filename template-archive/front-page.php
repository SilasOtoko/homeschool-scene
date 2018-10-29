<!--
Template name: Front Page
-->
<?php get_header(); ?>
<?php /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header */ ?>

<div class="main-content-container container">
	<div class="main-content-row row">
		<div class="main-content-column col-xs-12">

			<section class="main-content">
				<h1 class="page-main-heading">This is the Birdpress Theme Site</h1>

				<p>The <a href="http://rarebird.io/diffusion/BPTHEME/">Birdpress theme</a> is Rare Bird’s recommended starting point for custom Wordpress theme development. It is made up of:</p>

				<ul>
					<li>recommended templating usage, with best practice HTML</li>
					<li>a live demonstration of Perch usage — including the Positioned Layout starter layout</li>
					<li>custom functions, shortcodes, and other Wordpress customizations</li>
					<li>Additionally, this site’s pages &amp; posts serve to demonstrate best practice Wordpress usage</li>
				</ul>

				<h2>Birdpress Setup</h2>
				<p>The Birdpress theme is tightly tied to — but separate from — the <a href="http://rarebird.io/diffusion/BPINSTALL/">Birdpress Install</a>. View the <a href="http://rarebird.io/diffusion/BPINSTALL/browse/master/README.md">installation instructions</a> for information on how to set up the Birdpress Install and Birdpress Theme.</p>

				<h2>Project Setup and Customization</h2>
				<ul>
					<li><code>package.json</code> controls which third-party libraries are to be included.</li>
					<li><code>gulpfile.babel.js</code> controls gulp and which scripts to include on the site.</li>
					<li><code>global.less</code> controls which LESS and CSS files are to be imported on the site.</li>
				</ul>

				<h2>Wordpress Templates</h2>
				<p>The Birdpress theme strives to embrace <a href="https://codex.wordpress.org/The_Loop" target="_blank" rel="noopener">the Wordpress Loop</a> for template development; all pages and posts by default look to the index.php template, and other pages or post treatments that need significant changes can create more specific template files using the Wordpress Loop.</p>

				<h2>Styles &amp; Components</h2>
				<p>All components come from Perch. Refer to <a href="http://perch.rarebirdinc.com/">Perch Documentation</a> for more information.</p>
			</section><!-- /.main-content -->

		</div><!-- /.main-content-column -->
	</div><!-- /.main-content-row -->
</div><!-- /.main-content-container container -->

<?php /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer */ ?>
<?php get_footer(); ?>
