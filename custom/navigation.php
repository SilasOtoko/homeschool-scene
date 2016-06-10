<?php

/**
 * CUSTOM NAVIGATION
 */



/**
 * SIMPLIFY NAVIGATION CLASSES
 * convert current-menu|page|post-item|parent|ancestor to active|active-parent
 */

add_filter('wp_nav_menu', 'custom_wp_nav_menu');
function custom_wp_nav_menu($text) {
	$text = preg_replace(array('/(current(-menu-|[-_]page[-_]|[-_]post[-_])(parent|ancestor))/', '/current(-menu-|[-_]page[-_]|[-_]post[-_])item/'), array('active-parent', 'active'), $text);
	$text = preg_replace(array('/( active(?!-parent)){2,}/', '/( active-parent){2,}/'), array(' active', ' active-parent'), $text);
	$text = preg_replace('/(menu-item-has-children)/', 'global-nav-item--has-children', $text);
	return $text;
} //EF


/**
 * ALTER WP_NAV_MENU ARGUMENTS
 * add default sub_menu_class_arg
 */
add_filter('wp_nav_menu_args', 'custom_wp_nav_menu_args');
function custom_wp_nav_menu_args($args){
	if(!isset($args['sub_menu_class'])){
		$args['sub_menu_class'] = 'sub-menu';
		$args['element_class'] = '';
		$args['link_class'] = '';
	}
	return $args;
} //EF


/**
 * SIMPLIFY NAVIGATION OUTPUT
 * alter navigation output to help hide WordPress
 * http://benword.com/how-to-hide-that-youre-using-wordpress/
 */

class custom_simplify_walker extends Walker_Nav_Menu {

	var $found_items = array();

	function check_current($classes){
		return preg_match('/(current[-_])|(has-children)/', $classes);
	} //EF

	function start_el(&$output, $item, $depth, $args){

		$indent = ($depth) ? str_repeat("\t", $depth) : '';

		$this->found_items[] = $item->ID;

		$slug = sanitize_title($item->title);
		$id = apply_filters('nav_menu_item_id', 'menu-' . $slug, $item, $args);
		$id = strlen($id) ? '' . esc_attr( $id ) . '' : '';

		$class_names = $value = '';
		$classes = empty($item->classes) ? array() : (array) $item->classes;

		$classes = array_filter($classes, array(&$this, 'check_current'));

		if($custom_classes = get_post_meta($item->ID, '_menu_item_classes', true)){
			foreach($custom_classes as $custom_class){
				$classes[] = $custom_class;
			}
		}

		$class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
		$class_names = $class_names ? " class=\"{$args->element_class} {$id} " . esc_attr($class_names) . "\"" : " class=\"{$args->element_class} {$id}\"";

		$output .= $indent . '<li' . $class_names . '>';

		$attributes  = "";
		$attributes .= ! empty($args->link_class) ? ' class="'  . esc_attr($args->link_class) .'"' : '';
		$attributes .= ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
		$attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target    ) .'"' : '';
		$attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn       ) .'"' : '';
		$attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url       ) .'"' : '';

		$item_output  = $args->before;
		$item_output .= '<a'. $attributes .'>';
		$item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
		$item_output .= '</a>';
		$item_output .= $args->after;

		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
	} //EF

	function start_lvl(&$output, $depth, $args){
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"{$args->sub_menu_class}\">\n";
	}
} //EC


