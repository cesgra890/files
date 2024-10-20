/* jquery.js */
/* velocity.js */

$(document).ready(function(){

	/* Use Modernizr to detect SVG. If there's no support, add class "no-svg" to <html> tag */
	// if (!Modernizr.svg) {$("html").addClass("no-svg");}

	/* VARIABLES SETUP */

    /*  Globe intro animation duration (ms)  */
    var globe_intro_duration = 1500;
	/*  Globe rotation loop interval (ms) */
    var globe_loop_interval = 16000;
	/*  Logo rotation loop interval (ms) */
	var logo_loop_interval = 3000;
	/*  Logo animation in: delay (ms), duration (ms), easing */
	var logo_in_params = [0, 1000, "swing"];
	/*  Logo animation out: delay (ms), duration (ms), easing */
	var logo_out_params = [250, 650, "swing"];
	/*  Delay function globe_intro_animation() call after Globe is visible (ms)  */
	var delay_after_scroll_ok = 500;

	/* VARIABLES SETUP: END */



	var $globe_fr = $(".globe__worldmap__front"),
		$globe_bk = $(".globe__worldmap__back"),
		$globe_lg = $(".globe__worldmap__logos"),
		$globe_lg_div = $(".globe__worldmap__logos").find("div"),
		$globe = $(".globe");

	var globe_el_x = [0, -473];
	var logo_i;
	var logo_loop_int;
	var globe_played = false;


	/*  Set the Globe  */
	function set_globe() {
        $.Velocity.hook($globe, "visibility", "hidden");
	    $.Velocity.hook($globe_fr, "translateX", globe_el_x[1] + "px");
	    $.Velocity.hook($globe_bk, "translateX", globe_el_x[0] + "px");

		$globe_lg_div.each(function(index) {
            $.Velocity.hook($(this), "visibility", "hidden");
	    	$.Velocity.hook($(this), "translateX", -400 + "px");
		});
	}


    /*  Run Globe intro animation  */
	function globe_intro_animation() {

        $globe.velocity({scale: [1, 0], opacity: 1 }, {visibility: "visible", duration: globe_intro_duration, easing: "swing"});

		globe_animation();

		logo_i = 0;
		clearInterval(logo_loop_int);
		setTimeout(function () {
			logo_loop(true);
			logo_loop_int = setInterval(logo_loop, logo_loop_interval);
		}, globe_intro_duration);

	}


    /*  Run Globe animation  */
	function globe_animation() {
		// Note: 'for' loop needed to fix some lag in iOS browsers
    	for (var i = 0; i < 99; i++) {
			$globe_fr.velocity({translateX: [ globe_el_x[0], globe_el_x[1] ] }, {duration: globe_loop_interval, easing: "linear"});
			$globe_bk.velocity({translateX: [ globe_el_x[1], globe_el_x[0] ] }, {duration: globe_loop_interval, easing: "linear"});
    	};  
		$globe_fr.velocity({translateX: [ globe_el_x[0], globe_el_x[1] ] }, {duration: globe_loop_interval, easing: "linear"});
		$globe_bk.velocity({translateX: [ globe_el_x[1], globe_el_x[0] ] }, {duration: globe_loop_interval, easing: "linear", complete: globe_animation});
	}


	/* Logo carousel */
	function logo_loop(first) {

		if ($globe_lg_div.length > 1) {

			if (logo_i >= $globe_lg_div.length) { logo_i = 0; }

            $.Velocity.hook($globe_lg_div.eq(logo_i), "visibility", "visible");

		    $globe_lg_div.eq(logo_i).velocity({translateX: [ 0, -200 ] }, {duration: logo_in_params[1], delay: logo_in_params[0], easing: logo_in_params[2]});
			if (!first) {
				$globe_lg_div.eq(logo_i-1).velocity({translateX: [ 200, 0 ] },  {
					duration: logo_out_params[1], 
					delay: logo_out_params[0], 
					easing: logo_out_params[2], 
					complete: function(){ 
                        $.Velocity.hook($globe_lg_div.eq(logo_i-2), "visibility", "hidden");
					    }
					});
			}
			logo_i++;
		}
	}


	/* Toggle animation */
	$('#toggle_animation').click(function(){

		if ( $globe_fr.hasClass("velocity-animating") ) {
			$globe.velocity("stop", true);
			$globe_fr.velocity("stop", true);
			$globe_bk.velocity("stop", true);
			clearInterval(logo_loop_int);
		} else {
	        set_globe();
			globe_intro_animation();
		}
	});


	/* Activate animation on these events: onScroll, onLoad */
	var elem = $(".globe__placeholder");

	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();
	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	};

	function isScrolled() {
	    if (isScrolledIntoView(elem) && globe_played == false) {
			setTimeout(globe_intro_animation,delay_after_scroll_ok);
	        globe_played = true;
	        $(window).unbind('scroll');
	    }
	}

	$(window).load(set_globe);
	$(window).load(isScrolled);
	$(window).scroll(isScrolled);

	/* TEMP: globe_animation */
    $('#restart').click(function() {
      set_globe();
      globe_intro_animation();
    }); 

});