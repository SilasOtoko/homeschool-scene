<?php get_header(); ?>
<?php /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header */ ?>

<?php /* Often the home page requires a unique layout with multiple content containers. This is a sample treatment. */ ?>

<?php the_post(); ?>

<div id="page-<?php the_ID(); ?>" <?php post_class("home-page-page-wrapper page-wrapper"); ?>>

	

</div><!-- #page-<?php the_ID(); ?> -->


<?php /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer */ ?>
<?php get_footer(); ?>
