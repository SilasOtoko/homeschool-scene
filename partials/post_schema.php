<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "<?php the_permalink(); ?>"
  },
  "headline": "<?php
    $title = get_the_title();
    echo (strlen($title) > 110) ? substr($title, 0, 107).'...' : $title;
  ?>",
  "image": [
  <?php if (has_post_thumbnail()) { ?>
    "<?php echo get_the_post_thumbnail_url(); ?>"
   <?php } elseif ($first_inline_image = pull_first_inline_image()) { ?>
    "<?php echo $first_inline_image; ?>"
   <?php } else { ?>
    "<?php echo get_site_url(); ?>/assets/images/ifn-logo.png"
   <?php } ?>
   ],
  "datePublished": "<?php echo get_the_date('c'); ?>",
  "dateModified": "<?php echo get_the_modified_date('c'); ?>",
  "author": {
    "@type": "Person",
    "name": "<?php echo get_the_author(); ?>"
  },
   "publisher": {
    "@type": "Organization",
    "name": "<?php bloginfo('name'); ?>",
    "logo": {
      "@type": "ImageObject",
      "url": "<?php echo get_site_url(); ?>/assets/images/ifn-logo.png",
      "width": "192px",
      "height": "192px"
    }
  },
  "description": "<?php echo strip_tags(get_the_excerpt()); ?>"
}
</script>