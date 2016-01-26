		</main><!-- end #main -->

		<footer id="global-footer" class="global-footer" role="contentinfo">
			<div class="container">

				<ul class="global-bottom_social social-icons list-ui">
					<li>
						<a href="#/" target="_blank" title="Go to our Facebook page »" class="social-icon-link facebook icon-facebook2">
							<span class="sr-only">Facebook</span>
						</a>
					</li>
					<li>
						<a href="#/" target="_blank" title="Go to our Twitter profile »" class="social-icon-link twitter icon-twitter2">
							<span class="sr-only">Twitter</span>
						</a>
					</li>
					<li>
						<a href="#/" title="Go to our RSS feeds »" class="social-icon-link rss icon-feed2">
							<span class="sr-only">RSS</span>
						</a>
					</li>
				</ul>

				<div class="global-footer-copyright">
				<?php echo sprintf( __( '%1$s %2$s %3$s. All Rights Reserved.', 'blankslate' ), '&copy;', date('Y'), esc_html(get_bloginfo('name')) ); echo sprintf( __( '<br>Birdpress Theme By: %1$s.', 'blankslate' ), '<a href="https://twitter.com/k_bav" target="_blank">@k_bav</a> co./ <a href="http://rarebirdinc.com/" target="_blank">Rare Bird Inc.</a>' ); ?>
				</div>
				<a href="<?php echo site_url(); ?>/#">Terms &amp; Conditions</a>&nbsp;|&nbsp;
				<a href="<?php echo site_url(); ?>/#">Privacy Policy</a>

			</div>
		</footer>

	</div><!-- end .global-wrapper -->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* 	Bottom Scripts
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


<!-- _______ Polyfills _________________________________ -->

<script src="/js/placeholder.min.js"></script>


<!-- _______ Plugins ___________________________________ -->

<!-- ###  Bootstrap Plugins -->
<script src="/js/bootstrap-transition.js"></script>
<script src="/js/bootstrap-alert.js"></script>
<script src="/js/bootstrap-modal.js"></script>
<!-- <script src="/js/bootstrap-tab.js"></script> -->
<!-- <script src="/js/bootstrap-collapse.js"></script> __see relevant code in skeletor-scripts.js -->
<!-- <script src="/js/bootstrap-dropdown.js"></script> -->
<!-- <script src="/js/bootstrap-tooltip.js"></script> -->
<!-- <script src="/js/bootstrap-popover.js"></script> --><!-- Note: Requires Tooltip Above -->


<!-- ###  Other Plugins -->

<!-- Mousetrap.js = keyboard shortcuts -->
<script src="/js/mousetrap.min.js"></script>

<?php /*
<!-- TODO - add Select2 select / multiselect helper -->
<script src="/js/select2.min.js"></script>
*/ ?>

<!-- Parsely.js inline, as-you-go form validation & assistance -->
<script type="text/javascript" src="/js/parsley.min.js"></script>

<?php /* ?>
<!-- Prism.js for <pre><code> highlighting -->
<script type="text/javascript" src="/js/prism/prism.min.js"></script>
*/ ?>

<!-- Smooth-scroll.js -->
<script type="text/javascript" src='/js/bind-polyfill.js'></script>
<script type="text/javascript" src='/js/smooth-scroll.js'></script>
<script>
	smoothScroll.init();
</script>

<?php /* TODO - FIND A BETTER SCRIPT FOR THIS
<!-- jQuery Zoom for image hover zooms -->
<!-- <script src="/js/jquery.zoom.min.js"></script> __also needs initialized in skeletor-scripts.js__ -->
*/ ?>

<!-- _______ Scripts - Custom __________________________ -->

<!-- ###  Custom scripts -->
<script src="/js/skeletor-scripts.js"></script>

<?php wp_footer(); ?>

</body>
</html>
