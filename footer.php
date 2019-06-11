	</main>

	<footer id="global-footer" class="global-footer">

		<div class="footer-container container">

      <section class="footer-info">

        <?php $currentDate = date("Y"); ?>
        
        <?php if ($currentDate == "2019") {
          $date = $currentDate;
        } else {
          $date = "2018-" . $currentDate;
        }; ?>

        <span class="legal">&copy; <?php echo $date; ?> <?php bloginfo( 'name' ); ?></span>
        <span class="credits">by <a href="http:/rarebirdinc.com">Rare Bird Inc</a></span>

        <?php if( function_exists( 'get_field' ) ): ?>

          <div class="social">

          </div>

        <?php endif; ?>

      </section>

		</div><!-- /.footer-container -->

	</footer>

</div><!-- end .global-wrapper -->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* 	Bottom Scripts
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<?php /* WP Footer */ ?>
<?php wp_footer(); ?>


</body>
</html>
