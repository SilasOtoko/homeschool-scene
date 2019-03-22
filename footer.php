	</main>

	<footer id="global-footer" class="global-footer">

		<div class="footer-container container">

      <section class="footer-info">

        <?php $currentDate = date("Y"); ?>
        
        <?php if ($currentDate == "2018") {
          $date = $currentDate;
        } else {
          $date = "2018-" . $currentDate;
        }; ?>

        <p class="legal">&copy; <?php echo $date; ?> <?php bloginfo( 'name' ); ?></p>
        <p class="credits">by: <a href="http:/rarebirdinc.com">Rare Bird Inc</a></p>

      </section>

      <a href="#page-top" class="scroll-button">
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/arrow-up.svg" />
      </a>

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
