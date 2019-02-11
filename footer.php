	</main>

	<footer id="global-footer" class="global-footer">

		<div class="footer-container container">

			<div class="footer-promo-block">
				<?php /* Newsletter Signup form */
				// get_template_part('partials/newsletter-signup-form'); 
				include 'partials/footer-newsletter-signup-form.php';
				?>
			</div>

			<div class="footer-main-block">
				<nav class="footer-links" aria-label="Footer Navigation">
					<ul class="footer-links__list">
						<li class="footer-links__item">
							<a class="footer-links__top-level-link footer-links__link" href="#/">Services</a>
							<ul class="footer-links__child-list footer-links__list">
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Fiber Transport</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Internet Access</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Colocation</a>
								</li>
							</ul>
						</li>
						<li class="footer-links__item">
							<a class="footer-links__top-level-link footer-links__link" href="#/">Network</a>
							<ul class="footer-links__child-list footer-links__list">
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Statewide Fiber Map</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Metro City Fiber Rings</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">National Fiber Map / INDATEL</a>
								</li>
							</ul>
						</li>
						<li class="footer-links__item">
							<a class="footer-links__top-level-link footer-links__link" href="#/">About</a>
							<ul class="footer-links__child-list footer-links__list">
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Company History</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Leadership Team</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Board of Directors</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Members / Owners</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Economic Development</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Careers</a>
								</li>
							</ul>
						</li>
						<li class="footer-links__item">
							<a class="footer-links__top-level-link footer-links__link" href="#/">Support</a>
							<ul class="footer-links__child-list footer-links__list">
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Help</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">FAQ</a>
								</li>
								<li class="footer-links__child-list-item footer-links__item">
									<a class="footer-links__child-list-link footer-links__link" href="#/">Billing &amp; Payments</a>
								</li>
							</ul>
						</li>
						<li class="footer-links__item--solo footer-links__item">
							<a class="footer-links__top-level-link footer-links__link" href="#/">News</a>
						</li>
						<li class="footer-links__item--solo footer-links__item">
							<a class="footer-links__top-level-link footer-links__link" href="#/">Contact</a>
						</li>
					</ul>
				</nav>

				<div class="global-footer-legal-and-social">
					<p class="global-footer-legal">
					<?php
						echo sprintf( __( '%1$s %2$s %3$s All Rights Reserved.', 'blankslate' ), '&copy;', date('Y'), esc_html(get_bloginfo('name')) . ' by <a href="http://rarebirdinc.com/" target="_blank">Rare Bird Inc.</a>' );
					?>
					</p>

					<ul class="global-footer_social social-icons list-ui">
						<li>
							<a class="social-icon-link social-icon-link--subtle facebook" href="#/" target="_blank" rel="noopener" title="Go to our Facebook page »">
								<span class="sr-only">Facebook</span>
								<span class="social-icon fab fa-facebook-f"></span>
							</a>
						</li>
						<li>
							<a class="social-icon-link social-icon-link--subtle twitter" href="#/" target="_blank" rel="noopener" title="Go to our Twitter profile »">
								<span class="sr-only">Twitter</span>
								<span class="social-icon fab fa-twitter"></span>
							</a>
						</li>
						<li>
							<a class="social-icon-link social-icon-link--subtle pinterest" href="#/" target="_blank" rel="noopener" title="Go to our Pinterest Profile »">
								<span class="sr-only">Pinterest</span>
								<span class="social-icon fab fa-pinterest"></span>
							</a>
						</li>
						<li>
							<a class="social-icon-link social-icon-link--subtle instagram" href="#/" target="_blank" rel="noopener" title="Go to our Instagram Profile »">
								<span class="sr-only">Instagram</span>
								<span class="social-icon fab fa-instagram"></span>
							</a>
						</li>
						<li>
							<a class="social-icon-link social-icon-link--subtle linkedin" href="#/" target="_blank" rel="noopener" title="Go to our LinkedIn Profile »">
								<span class="sr-only">LinkedIn</span>
								<span class="social-icon fab fa-linkedin"></span>
							</a>
						</li>
						<li>
							<a class="social-icon-link social-icon-link--subtle youtube" href="#/" target="_blank" rel="noopener" title="Go to our YouTube Profile »">
								<span class="sr-only">YouTube</span>
								<span class="social-icon fab fa-youtube"></span>
							</a>
						</li>
						<li>
							<a class="social-icon-link social-icon-link--subtle mail" href="#/" target="_blank" rel="noopener" title="Our Newsletter »">
								<span class="sr-only">Our Newsletter</span>
								<span class="social-icon far fa-envelope"></span>
							</a>
						</li>
					</ul>
				</div>
			</div><!-- /.footer-main-block -->

		</div><!-- /.footer-container -->

	</footer>

</div><!-- end .global-wrapper -->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* 	Bottom Scripts
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


<?php /* jQuery - CDN request with local fallback (included via npm) brought in by `gulp copy:jquery` */ ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/assets/js/jquery.min.js">\x3C/script>')</script>


<?php /* Polyfills */ ?>

<?php /* Analytics [DEPRECATED / REMOVED -- USE THE GA WP PLUGIN FOR MANAGING THIS] */ ?>

<?php /* Gulp compiled JS */ ?>
<script src="/assets/js/global.js"></script>

<?php /* WP Footer */ ?>
<?php wp_footer(); ?>


</body>
</html>
