//
// JS for Skeletor
// --------------------------------------------------


// ----------------------------------------------------------------------------
// * Default Fixes / Resets
// ----------------------------------------------------------------------------

// Remove the scrolling increment/decrement behavior from number input elements
$(':input[type=number]').on('mousewheel', function(e){
	$(this).blur();
});



// ----------------------------------------------------------------------------
// * Enhancements, Initializations, etc.
// ----------------------------------------------------------------------------

// Preloading!
// --------------------------------------------------
// When the page is loaded, add & remove classes from the body element
$(window).on('load', function() {
	$("body").addClass("page-loaded");
	$("body").removeClass("page-preloading");
});



// Navigation / Menus
// --------------------------------------------------

// Variables
// -------------------------------
var $nav_outer_wrapper 	= $('#global-outer-navigation-wrapper'),

	$main_nav 			= $('#global-main-nav'),
	$utility_nav 		= $('#global-utility-nav'),

	$nav_link 			= $('.animated-responsive-menu-link'),
	$nav_closer 		= $('.responsive-menu-closer'),
	$nav_parent 		= $('.global-nav-li-has-children'),
	$nav_parent_link 	= $('.global-nav-li-has-children > .global-nav-link'),
	$nav_child 			= $('.global-nav-list-child'),

	$search_menu 		= $('.global-search'),
	$search_link 		= $('.global-search-reveal-button'),
	$search_trigger 	= $('.global-search-trigger'),
	$search_input 		= $('#global-search-input'),
	$search_submit 		= $('#button-global-search'),
	$search_close 		= $('.global-search-closer'),
	$search_close_btn 	= $('#button-close-search'),

	$global_header 		= $('#global-header');


// Functions
// -------------------------------
function open_nav () {
	$('html').addClass('is-scroll-locked');
	$nav_link.addClass('is-active').attr('aria-expanded', 'true');
	$nav_outer_wrapper.addClass('is-active');
	$global_header.addClass('mobile-nav-is-open');
	$nav_closer.addClass('visible');
}

function close_nav () {
	$('html').removeClass('is-scroll-locked');
	$nav_outer_wrapper.addClass('animating-out');
	$nav_link.removeClass('is-active').attr('aria-expanded', 'false');
	$nav_closer.removeClass('visible');
	$global_header.removeClass('mobile-nav-is-open');
	setTimeout(function() {
		$nav_outer_wrapper.removeClass('is-active');
		$nav_outer_wrapper.removeClass('animating-out');
	}, 250);
	return false;
};

function open_search () {
	// First, make the link highlighted & show the menu
	$search_link.addClass('is-active');
	$search_menu.addClass('is-active');
	// Then, select the input field
	$search_input.select();
}

function close_search () {
	// Remove classes to the menu and the link
	// $(this).offsetWidth = $(this).offsetWidth;
	$search_menu.addClass('animating-out');
	setTimeout(function() {
		$search_link.removeClass('is-active');
		$search_menu.removeClass('is-active');
		$search_menu.removeClass('animating-out');
	}, 250);
	return false;
};


// Logic
// -------------------------------
$(document).ready(function() {

	// Close the menu is it's currently active. Otherwise: run open_nav function.
	$nav_link.click(function() {
		if ($(this).hasClass('is-active')) {
			close_nav();
			this.blur(); // Remove the focus from the button so :focus styles don't show on touch screens

		} else {
			open_nav();
		}

		return false;
	});

	// Simple: click this link & it closes the menu.
	$nav_closer.click(close_nav);


	// Close the menu is it's currently active. Otherwise: run open_search function.
	$search_link.click(function() {
		if ($(this).hasClass('is-active')) {
			close_search();
		}

		else {
			open_search();
		}

		return false;
	});


	$search_trigger.click(function() {
		// Add classes to the menu and the link
		$search_link.addClass('is-active');
		$search_menu.addClass('is-active');

		// Focus the search input
		$(this).blur();
		$search_input.select();

		return false;
	});


	$search_menu.click(close_search);
		// ...Do not close if the click is inside the inner container.
		$('.global-search-form-wrap').click(function(event) {
			event.stopPropagation();
		});
	$search_close.click(close_search);
	$search_close_btn.click(close_search);


	// If a nav menu link is clicked, open the child menu
	$nav_parent_link.click(function(e) {
		// Prevent link from being followed

		if (e.preventDefault) {
			e.preventDefault();
		} else {
			// internet explorer
			e.returnValue = false;
		}

		// remove is-open class if it's already there
		if ($nav_parent.hasClass('is-open')) {
			$(this).parent($nav_parent).removeClass('is-open');
		}
		// otherwise, add it
		else {
			$(this).parent($nav_parent).addClass('is-open');
		}

	});


	// Search keyboard assist: when search menu is open, keep focus within the search menu
	$search_submit.on('focusout', function() {
		$search_close.focus();
	});


	// Footnote back link scrolling help if sticky header is covering the target
	$('.footnote-back-link').on('click', function(scroll) {
		var $clicked_link = $(this);

		setTimeout(function() {
			if( $global_header.hasClass('show') ) {

				var destination = $clicked_link.attr('href');
				var $header_height = $global_header.outerHeight();

				// $(destination).scrollTop(-$header_height);
				$('html, body').animate({
					scrollTop: $(destination).offset().top-$header_height
				}, 200);
			}
		}, 10);
	});

});



// Keyboard shortcuts with MouseTrap.js
// --------------------------------------------------
$(document).ready(function(){

	// open search
	Mousetrap.bind('/', function(e) {

		// If the search menu is already open, nevermind...
		if ($search_menu.hasClass('is-active')) {
			return true;
		}

		// But if it's not already open, let's capture the / char and then open the menu
		else {
			// Prevent '/' char from being typed into the newly-focused search field
			if (e.preventDefault) {
				e.preventDefault();
			} else {
				// internet explorer
				e.returnValue = false;
			}

			open_search();
		}
	});

	// press escape (ESC) to close menus
	Mousetrap.bind('esc', function() {
		close_nav();
		close_search();
	});

	// open the menu/nav
	Mousetrap.bind('u', function() {
		if ($global_header.hasClass('mobile-nav-is-open')) {
			close_nav();
		}
		else {
			open_nav();
		}
	});

	// konami code!
	Mousetrap.bind('up up down down left right left right b a', function() { //enter
		$('body').addClass('konami-code-is-active');
	});

});



// Bootstrap Dismissable Alert
// --------------------------------------------------
// Note: Skeletor .alert CSS was built from the
// 		 ground up by @k_bav as an exercise.
//		 This JS is Bootstrap's for .alert dismissal.
// --------------------------------------------------
$(document).ready(function(){
	$(".alert").alert();
});




// Disappearing & reappearing Sticky Nav
// --------------------------------------------------
// via http://www.netvlies.nl/blog
// --------------------------------------------------
$(document).ready(function() {
	var a = $(".global-header"), e = 0, f = window.pageYOffset, d = a.outerHeight(), g = window.location.hostname; // formerly used window.scrollY but IE10 does not support it

	$(window).on("scroll", function() {
		f = e;
		e = window.pageYOffset; // formerly used window.scrollY but IE10 does not support it

		// Only proceed IF the mobile nav is not open
		if (!$global_header.hasClass('mobile-nav-is-open')) {
			f < e ? e > d && a.removeClass("show show-not-top fast") : (a.addClass("show show-not-top"), e < d && a.addClass("fast"));

			if (e <= 0) {
				a.removeClass("show-not-top");
			};
		};
	});
});



// Accordion / Collapse help
// --------------------------------------------------
// add a class of "open" to the accordion parent
// -> assists bootstrap-collapse.js
// --------------------------------------------------
// $(document).ready(function(){
// 	$(".accordion-group").on("show", function(ev){
// 		$(this).addClass("open");
// 	});
// 	$(".accordion-group").on("hide", function(ev){
// 		$(this).removeClass("open");
// 	});
// });



// // Toggle WordPress comment form
// // --------------------------------------------------
// $(function(){
// 	if($('#respond_form').length){
// 		$('#respond_form').on('show.bs.collapse', function(){
// 			$('.toggle-comment-form').hide();
// 		});
// 	}
// });



// // input[type="number"] increment/decrement buttons
// // --------------------------------------------------
// // via Justin, first written for TPF
// // --------------------------------------------------
// $(document).ready(function() {
// 	$('.quantity-input-modifier').on('click', function(evt){
// 		evt.preventDefault();

// 		var me = $(this),
// 			action = (me.is('.quantity-input-increment')) ? 'plus' : 'minus',
// 			input = me.closest('div.quantity').find('input.quantity-input:first'),
// 			val = (action == 'minus') ? parseInt(input.val()) - 1 : parseInt(input.val()) + 1;

// 		if(val < 1) val = 1;

// 		input.val(val);
// 	});
// });
