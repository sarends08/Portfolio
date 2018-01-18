$(document).ready(function() {

	// Navbar
	$("#navToggle a").click(function(e) {
		e.preventDefault(); // prevents "e" from following the href link

		$("header > nav").slideToggle("medium"); 
		$("#logo").toggleClass("menuUp menuDown");
	});

	$(window).resize(function() {
		if($(window).width() >= "600"){
			$("header > nav").css("display", "block");

			if($("#logo").attr('class') === "menuDown") {
				$("#logo").toggleClass("menuUp menuDown");
			}
		}else{
			$("header > nav").css("display", "none");
		}
	});

	//Fade onScroll
	var tags = $(".title-container");

	$(document).on('scroll', function() {
		if($(this).scrollTop() > 50){
			$(tags).addClass("invisible");
		}else{
			$(tags).removeClass('invisible');
		}
	});
		
		
	//Change active navbar button on scroll

	var nav = $('nav'),
		navHeight = nav.outerHeight(),
		sections = $('section');

	$(window).on('scroll', function() {
		var currentPosition = $(this).scrollTop();

		sections.each(function() {
			var top = $(this).offset().top - navHeight,
			bottom = top + $(this).outerHeight();

			if(currentPosition >= top && currentPosition <= bottom){
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#' +$(this).attr('id') + '"]').addClass('active');
			}
		});
	});


});