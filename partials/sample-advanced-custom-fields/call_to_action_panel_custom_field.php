<?php if( get_field('call_to_action_panel_text') ): ?>
	<div class="call-to-action-panel" style="background-image: url('<?php 
		if( get_field('call_to_action_panel_background_image') ):
		the_field('call_to_action_panel_background_image');
		else: echo "/assets/images/cta-panel-default-bg.jpg";
		endif;
		?>;');">

		<div class="call-to-action-panel__inner">
			<h2 class="call-to-action-panel__heading"><?php the_field('call_to_action_panel_heading'); ?></h2>
			<div class="call-to-action-panel__text"><?php the_field('call_to_action_panel_text'); ?></div>
		</div>
		<?php if( get_field('call_to_action_panel_button_text') ): ?>
			<div class="call-to-action-panel__cta-wrapper">
				<a href="<?php the_field('call_to_action_panel_button_link'); ?>" class="button button--secondary button--minwidth"><?php the_field('call_to_action_panel_button_text'); ?></a>
			</div>
		<?php endif; ?>
	</div>
<?php endif; ?>
