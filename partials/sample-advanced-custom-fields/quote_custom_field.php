<?php if( get_field('quote_text') ): ?>
	<div class="quote-panel" style="background-color: <?php the_field('quote_background_color'); ?>;">
		<figure class="pull-quote-wrapper" style="color: <?php the_field('quote_text_color'); ?>;">
			<blockquote>
				<?php the_field('quote_text'); ?>
			</blockquote>
			<figcaption class="pull-quote-citation">
				<div class="citation-name">
					<?php the_field('quote_author'); ?>
				</div>
			</figcaption>
		</figure>
		<?php if( get_field('quote_button_text') ): ?>
			<div class="quote-panel__cta-wrapper">
				<a href="<?php the_field('quote_button_link'); ?>" class="quote-panel-cta-button button button--outline button--white button--minwidth"><?php the_field('quote_button_text'); ?></a>
			</div>
		<?php endif; ?>
	</div>

	<?php if( get_field('quote_quotation_mark_color') ): ?>
	<style>
		.quote-panel .pull-quote-wrapper::before,
		.quote-panel .pull-quote-wrapper::after {
			color: <?php the_field('quote_quotation_mark_color'); ?>;
		}
	</style>
	<?php endif; ?>

<?php endif; ?>
