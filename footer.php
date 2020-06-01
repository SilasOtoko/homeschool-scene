    </main>

    <footer id="global-footer" class="global-footer">

        <div class="footer-container container">

            <section class="footer-info">

                <?php $currentDate = date("Y"); ?>
                
                <?php if ($currentDate == "2020") {
                    $date = $currentDate;
                } else {
                    $date = "2020-" . $currentDate;
                }; ?>

                <span class="legal">&copy; <?php echo $date; ?> <?php bloginfo( 'name' ); ?></span>
                <span class="credits">by <a href="http:/rarebirdinc.com">Rare Bird Inc</a></span>

            </section>

            <?php if( function_exists( 'get_field' ) ): ?>

                <?php if( have_rows( 'social', 'options' ) ): ?>

                    <div class="social">

                        <?php while( have_rows( 'social', 'options' ) ): the_row(); ?>

                            <a href="<?php the_sub_field( 'social_link', 'options' ); ?>">

                                <?php the_sub_field( 'social_icon', 'options' ); ?>

                            </a>

                        <?php endwhile; ?>

                    </div>

                <?php endif; ?>

            <?php endif; ?>

        </div><!-- /.footer-container -->

    </footer>

</div><!-- end .global-wrapper -->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*   Bottom Scripts
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<?php /* WP Footer */ ?>
<?php wp_footer(); ?>


</body>
</html>
