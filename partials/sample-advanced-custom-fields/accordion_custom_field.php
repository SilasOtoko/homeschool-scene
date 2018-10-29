<?php if( have_rows('accordion_row') ): ?>
	<div class="main-content-accordion accordion panel-group" id="inside-page-accordion" role="tablist" aria-multiselectable="true">
	<?php while( have_rows('accordion_row') ): the_row(); ?>
		<div class="panel">
			<div class="panel-heading" role="tab" id="accordionHeading<?php echo get_row_index(); ?>">
				<h4 class="panel-title">
					<a class=" accordion-trigger collapsed" role="button" data-toggle="collapse" data-parent="#inside-page-accordion" href="#accordionCollapse<?php echo get_row_index(); ?>" aria-expanded="false" aria-controls="accordionCollapse<?php echo get_row_index(); ?>">
						<span class="accordion-trigger-text"><?php the_sub_field('accordion_heading_text'); ?></span>
					</a>
				</h4>
			</div>
			<div id="accordionCollapse<?php echo get_row_index(); ?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="accordionHeading<?php echo get_row_index(); ?>">
				<div class="panel-body">
					<div class="lead-in-copy"><?php the_sub_field('accordion_body_lead_in_copy'); ?></div>
					<?php the_sub_field('accordion_body_text'); ?>
				</div>
			</div>
		</div>
	<?php endwhile; ?>
	</div>
<?php endif; ?>
