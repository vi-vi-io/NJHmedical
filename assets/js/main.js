$( document ).ready(function() {

// nav transform on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            $('.navbar').removeClass("navbar-top");
        }
        else {
            $('.navbar').addClass("navbar-top");
        }
    },false);

// modal trigger
    // $("a.modal-trig").on("click", function () {
    //     var trig_target = $(this).data('trigtarget');
    //     $("#" + trig_target).modal("show");
    //     // $("#" + trig_target).appendTo("body");
    // });
    // $(".modal").on( "hidden.bs.modal", function () {
	// 	var mod_curr = $(this).data('modcurr');
	// 	$("body># + mod_curr").remove();
	// });//END - modal trigger

//smooth scroll  -->
	 $(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 80
					}, {
						duration: 1400,
						easing: "swing"
					});
					return false;
				}
			}
		});
	 });

    $(function () {
         $('[data-toggle="popover"]').popover()
    })

});/* close document.ready */
