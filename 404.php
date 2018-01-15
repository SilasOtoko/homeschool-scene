<?php get_header(); ?>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header -->

<!-- Main content's .container -->
<div class="main-content-container container">

	<div class="main-content-row row">

		<div class="main-content-column col-xs-12">

			<section class="main-content">

				<div id="post-0" class="post error404 not-found">
					<h1 class="entry-title"><?php _e('Oops! File Not Found &ndash; Error 404.', 'blankslate'); ?></h1>
					<div class="entry-content">
						<!-- <p><?php _e('Nothing found for the requested page. Try a search instead?', 'blankslate'); ?></p> -->
						<?php // get_search_form(); ?>

						<h2>The page or file requested cannot be found or has been moved.</h2>

						<p>We appreciate you visiting our site! Continue exploring by clicking on the links in the navigation.</p>

						<h3>From here you can:</h3>
						<ul>
							<?php /*
							<li class="">
								Search the site:
								<?php get_template_part('searchform', 'general') ?>
							</li>
							*/ ?>
							<li>Return to <a href="javascript:history.go(-1);">previous page</a>.</li>
							<li>Go to the <a href="/">home page</a>.</li>
							<li><a href="/contact">Contact us</a>.</li>
						</ul>
					</div><!-- /.entry-content -->
				</div><!-- /.post.error404 -->

			</section><!-- /.main-content -->

		</div><!-- /.main-content-column -->

	</div><!-- /.main-content-row -->

</div><!-- /.main-content-container container -->

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer -->
<?php get_footer(); ?>
