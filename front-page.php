<?php get_header(); ?>
<?php /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header */ ?>

<?php /* Often the home page requires a unique layout with multiple content containers. This is a sample treatment. */ ?>

<div id="page-<?php the_ID(); ?>" <?php post_class("home-page-page-wrapper page-wrapper"); ?>>

	<div class="home-hero-block hero-wrapper">
		<div class="home-hero-panel hero-panel" style="background: #777 linear-gradient(#CDB8C9, #F1EEFB);">
			<div class="home-hero-container hero-container container common-content-vertical-spacing">
				<h1 class="home-hero-heading hero-heading"><?php the_title(); ?></h1>
				<?php if( get_field('sub_heading') ): ?>
					<div class="page-main-sub-heading home-hero-copy hero-copy"><?php the_field('sub_heading'); ?></div>
				<?php endif; ?>
			</div>
		</div>
	</div>


	<?php /* Sample Main Content Block */ ?>
	<section class="main-content-block">
		<div class="main-content-container container">
			<?php
			// Show the featured image _with a caption_ if it exists.
			// Will defer to the usage of the featured-image shortcode if used.
			if ( has_post_thumbnail() && !has_shortcode(get_the_content(), 'featured-image') ) {
				echo "<figure class='featured-image figure-feature'>";
				the_post_thumbnail();
				$caption = get_the_post_thumbnail_caption();
				if (!empty($caption)) {
					echo "<figcaption class='wp-figcaption-text'>";
					echo $caption;
					echo "</figcaption>";
				}
				echo "</figure>";
			}
			?>

			<?php the_content(); ?>
		</div>
	</section>


	<?php /* Sample content in a grid 
	<section class="content-block">
		<div class="content-block-container container">
			<h2>Sample Content in a Grid</h2>

			<?php // Add class row--thinner to reduce the size of the grid gutters ?>
			<div class="row">
				<div class="col-xs-12 col-sm-4">
					<img src="holder.js/600x400?auto=yes" alt="" class="img-fluid">
				</div>
				<div class="col-xs-12 col-sm-4">
					<img src="holder.js/600x400?auto=yes" alt="" class="img-fluid">
				</div>
				<div class="col-xs-12 col-sm-4">
					<img src="holder.js/600x400?auto=yes" alt="" class="img-fluid">
				</div>
			</div>
		</div>
	</section>
	*/ ?>


	<?php /* Sample full-width call to action panel w/ACF */ ?>
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

</div><!-- #page-<?php the_ID(); ?> -->


<?php /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer */ ?>
<?php get_footer(); ?>
