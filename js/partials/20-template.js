	/* MOBILE MENU
	------------------------------------*/
	if ($o.menuicon) {
		var button = $(".menu-icon");
		var pageLink = $(".pagelink");
		var header = $(".header");
		button.on("click", function() {
			button.toggleClass('open');
			header.toggleClass('active-open');
		});

		pageLink.on("click", function() {
			button.toggleClass('open');
			pageLink.toggleClass('open');
			header.toggleClass('active-open');
		});
	};

	/* PAGE TRANSITION
	------------------------------------*/
	if ($o.pages) {
		
		// DEFINE VARIABLES
		var currentpage, nextpage, activepage;
		var pagelinkto = $('[data-pagelinkto]');
		var mainwrapper = $(".mainwrapper");
		var outanimation = "pt-page-scaleDown page-transition";
		var inanimation = "pt-page-moveFromBottom pt-page-ontop page-transition activepage";
		var allanimation = "pt-page-scaleDown pt-page-moveFromBottom pt-page-ontop page-transition"

		pagelinkto.on("click", function() {
			if($(this).hasClass("pagelink")) {
				$(".pagelink").removeClass("active-menulink");
				$(this).addClass("active-menulink");
			}
			currentpage = $(".ckav-pages.activepage").attr('data-thispage');
			nextpage = $(this).attr('data-pagelinkto');

			if( currentpage != nextpage ) {
				$("[data-thispage="+ nextpage +"]").scrollTop(0);
				ckav.scrollsticky();
				if($("[data-thispage="+ nextpage +"]").hasClass("otherpage")) {
					mainwrapper.addClass("active-otherpage");
				}
				else {
					mainwrapper.removeClass("active-otherpage");
				}
				
				$("[data-thispage="+ currentpage +"]").removeClass(allanimation);
				$("[data-thispage="+ nextpage +"]").removeClass(allanimation);

				$("[data-thispage="+ currentpage +"]").removeClass("activepage");
				$("[data-thispage="+ currentpage +"]").addClass(outanimation);
				$("[data-thispage="+ nextpage +"]").addClass(inanimation);	
			}
			else {
				return false;
			}
		});
		
	};

	/* SCROLL STICKY
	------------------------------------*/
	ckav.scrollsticky = function() {
		if($("html").hasClass("ckav-mobile")) {
			return false;
		}
		else {
			if($o.scrollsticky) {
				var scrollelement = $(".ckav-pages");
				var scrollstickyelement = $("[data-scrollsticky='y']");
	
				scrollstickyelement.removeClass('scrollsticky-on');
				scrollelement.on("scroll", function() {
					var calheight = scrollstickyelement.height();
	
					if( $(this).scrollTop() >= calheight ) {
						scrollstickyelement.addClass('scrollsticky-on');
					} 
					else {
						scrollstickyelement.removeClass('scrollsticky-on');
					}
				});
			}
			else {
				return false;
			}
		}
	}