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
							<a href="#/" title="Go to our Pinterest Profile »" class="social-icon-link pinterest icon-pinterest-alt">
								<span class="sr-only">Pinterest</span>
							</a>
						</li>
						<li>
							<a href="#/" title="Go to our Instagram Profile »" class="social-icon-link instagram icon-instagram">
								<span class="sr-only">Instagram</span>
							</a>
						</li>
						<li>
							<a href="#/" title="Go to our Google Plus Profile »" class="social-icon-link google-plus icon-google-plus-alt">
								<span class="sr-only">Google Plus</span>
							</a>
						</li>
						<li>
							<a href="#/" title="Go to our LinkedIn Profile »" class="social-icon-link linkedin icon-linkedin">
								<span class="sr-only">LinkedIn</span>
							</a>
						</li>
						<li>
							<a href="#/" title="Go to our YouTube Profile »" class="social-icon-link youtube icon-youtube">
								<span class="sr-only">YouTube</span>
							</a>
						</li>
						<li>
							<a href="#/" title="Go to our Vimeo Profile »" class="social-icon-link vimeo icon-vimeo-alt">
								<span class="sr-only">Vimeo</span>
							</a>
						</li>
						<li>
							<a href="#/" title="Our Newsletter »" class="social-icon-link mail icon-mail">
								<span class="sr-only">Our Newsletter</span>
							</a>
						</li>
						<li>
							<a href="#/" title="Go to our RSS feeds »" class="social-icon-link rss icon-feed-alt">
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
<script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="/assets/third-party/perch/js/jquery-2.2.3.min.js">\x3C/script>')</script>


<?php /*
<!-- _______ Polyfills _________________________________ -->
*/ ?>


<?php /*
<!-- _______ Analytics _________________________________ -->

	<script>
		window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
		ga('create', 'UA-XXXXX-Y', 'auto');
		ga('require', 'autotrack');
		ga('send', 'pageview');
	</script>
	<script async src='//www.google-analytics.com/analytics.js'></script>
	<script async src='/assets/third-party/perch/js/autotrack.js'></script>
*/ ?>


<!-- _______ Plugins ___________________________________ -->

<!-- ###  Bootstrap Plugins -->
<script src="/assets/third-party/perch/js/bootstrap-transition.js"></script>
<script src="/assets/third-party/perch/js/bootstrap-alert.js"></script>
<script src="/assets/third-party/perch/js/bootstrap-modal.js"></script>
<?php /* <script src="/assets/third-party/perch/js/bootstrap-collapse.js"></script> */ ?>
<?php /* <script src="/assets/third-party/perch/js/bootstrap-tab.js"></script> */ ?>


<!-- ###  Other Plugins -->

<!-- Mousetrap.js = keyboard shortcuts -->
<script src="/assets/third-party/perch/js/mousetrap.min.js"></script>

<!-- Parsely.js inline, as-you-go form validation & assistance -->
	<?php /* Luhn extra validator added for credit card number fields. It MUST be before main parsley script */ ?>
<script src="/assets/third-party/perch/js/parsley.luhn.js"></script>
<script src="/assets/third-party/perch/js/parsley.min.js"></script>


<?php /*
<!-- Smooth-scroll.js -->
<script src='/assets/third-party/perch/js/smooth-scroll.min.js'></script>
<script>
	smoothScroll.init();
</script>
*/ ?>

<!-- _______ Scripts - Custom __________________________ -->

<!-- ###  Custom scripts -->
<script src="/assets/third-party/perch/js/scripts.js"></script>

<?php wp_footer(); ?>

</body>
</html>
