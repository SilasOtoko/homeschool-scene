		</main><!-- end #main -->

		<footer id="global-footer" class="global-footer" role="contentinfo">

			<div class="footer-body">
				<div class="container">
					<p><code>{Footer body for sitemap, main footer content, etc.}</code></p>
				</div>
			</div>

			<div class="footer-bottom">
				<div class="container">
					<p><code>{Footer bottom for social, legal content, etc.}</code></p>

					<ul class="global-bottom_social social-icons list-ui">
						<li>
							<a href="#/" target="_blank" title="Go to our Facebook page »" class="social-icon-link facebook icon-facebook2">
								<span class="sr-only">Facebook</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Go to our Twitter profile »" class="social-icon-link twitter icon-twitter-alt">
								<span class="sr-only">Twitter</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Go to our Pinterest Profile »" class="social-icon-link pinterest icon-pinterest-alt">
								<span class="sr-only">Pinterest</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Go to our Instagram Profile »" class="social-icon-link instagram icon-instagram">
								<span class="sr-only">Instagram</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Go to our Google Plus Profile »" class="social-icon-link google-plus icon-google-plus-alt">
								<span class="sr-only">Google Plus</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Go to our LinkedIn Profile »" class="social-icon-link linkedin icon-linkedin">
								<span class="sr-only">LinkedIn</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Go to our YouTube Profile »" class="social-icon-link youtube icon-youtube">
								<span class="sr-only">YouTube</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Go to our Vimeo Profile »" class="social-icon-link vimeo icon-vimeo-alt">
								<span class="sr-only">Vimeo</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Our Newsletter »" class="social-icon-link mail icon-mail">
								<span class="sr-only">Our Newsletter</span>
							</a>
						</li>
						<li>
							<a href="#/" target="_blank" title="Go to our RSS feeds »" class="social-icon-link rss icon-feed-alt">
								<span class="sr-only">RSS</span>
							</a>
						</li>
					</ul>

					<div class="global-footer-copyright">
					<?php
						echo sprintf( __( '%1$s %2$s %3$s. All Rights Reserved.', 'blankslate' ), '&copy;', date('Y'), esc_html(get_bloginfo('name')) );
						echo sprintf( __( '<br>Birdpress Theme By: %1$s.', 'blankslate' ), '<a href="http://rarebirdinc.com/" target="_blank">Rare Bird Inc.</a>' ); ?>
					</div>

				</div>
			</div>

		</footer>

	</div><!-- end .global-wrapper -->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* 	Bottom Scripts
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


<!-- jQuery - CDN request with local fallback -->
<?php /* google cdn commented out as it does not have this version of jquery as of this moment --kb  2016-04-29 11:17 AM
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
*/ ?>
<script src="//code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc=" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="<?php echo get_stylesheet_directory_uri() ?>/assets/third-party/perch/js/jquery-3.1.1.slim.min.js">\x3C/script>')</script>


<?php /*
<!-- _______ Polyfills _________________________________ -->
*/ ?>


<?php /*
<!-- _______ Analytics _________________________________ -->
	[DEPRECATED / REMOVED -- USE THE GA WP PLUGIN FOR MANAGING THIS]
*/ ?>

<script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/app.js"></script>

<?php wp_footer(); ?>

</body>
</html>
