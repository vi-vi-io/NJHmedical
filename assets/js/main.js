$( document ).ready(function() {
// site preloader
    // wait until DOM is ready
    document.addEventListener("DOMContentLoaded", function(event) {
     // wait until window, stylesheets, images, links, and other media assets are loaded
     window.onload = function() {

      $('#preloader').fadeOut('slow',function(){$(this).remove();});

     };
    });
// nav transform on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 1) {
            $('.navbar').removeClass("navbar-top");
        }
        else {
            $('.navbar').addClass("navbar-top");
        }
    },false);
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
//turn on bootstrap popovers....mmm....popovers...
    $(function () {
         $('[data-toggle="popover"]').popover()
    })
//START - pricing form handler ==>
    var basket = ["Item", "Quantity"];
    $("button.btn-add").click(function() {
        var quan_input = ("quan_" + this.dataset.targetid);
        var size_input = ("size_" + this.dataset.targetid);
        var item_quan = Number(document.getElementById(quan_input).value);
        const rb_selected = document.querySelectorAll('input[name="' + size_input +'"]');
            let selected_size;
            for (const rb of rb_selected) {
                if (rb.checked) {
                    selected_size = rb.value;
                    break;
                }
            }
        var item_size = selected_size;
        var item_name = this.name + " " + selected_size;
        var item_exists = Number(basket.indexOf(item_name));
        var item_exists_quan = Number(item_exists + 1);
        if (item_exists == -1) {
            basket.push(item_name);
            basket.push(item_quan);
        } else {
            basket[item_exists_quan] += (item_quan);
        }
        // push basket array to hidden form field for form sub
        document.getElementById("order_request").value = basket.toString();
        // Draw HTML table
        var perrow = 2, // 2 cells per row
        html_build = "<table><tr>";
        // Loop through array and add table cells
        for (var i=0; i<basket.length; i++) {
            html_build += "<td>" + basket[i] + "</td>";
        /* If you need to click on the cell and do something
            html_build += "<td onclick='FUNCTION()'>" + basket[i] + "</td>"; */
            // Break into next row
            var next = i+1;
            if (next%perrow==0 && next!=basket.length) {
                html_build += "</tr><tr>";
            }
        }
        html_build += '</tr></table>';
        // Attach HTML to container and add to pricing form
        document.getElementById("order_basket_table").innerHTML = html_build;
    });//CLOSE ==> add button
    $("#btn_clear").click(function() {
        basket.length = 0;
        basket = ["Item", "Quantity"];
        document.getElementById("order_basket_table").innerHTML = "";
    });//CLOSE ==> clear button
// Swiper image carosel
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'flip',
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
// START - GSAP animations
    var corona_tl = gsap.timeline({repeat:-1, yoyo:true, defaults:{ ease: "power3.out"}});
    corona_tl.to(".corona_1", {duration: .25, scale: 1.05});
    corona_tl.to(".corona_2", {duration: .25, scale: 1.1}, "<0.2");

    var virus_tl = gsap.timeline({repeat:-1, yoyo:true, defaults:{ ease: "power3.out"}});
    // virus_tl.to(".virus", {duration: 1, scale: 1.25, y:-10, x:-50});
    virus_tl.to("#fucia_fade", {duration: 1, scale: 1.25, y:-10, x:-50}, "<");

    var tear_tl = gsap.timeline({repeat:-1, repeatDelay:.75, defaults:{ ease: "power4.in"}});
    tear_tl.from("#tear", {duration:.5, scale:0, opacity:0});
    tear_tl.to("#tear", {duration:.75, y:350, opacity:0});

    var hero_bkgd_tl = gsap.timeline({repeat:-1, yoyo:true});
    hero_bkgd_tl.to("#bkgd_space", {duration:10, y:-15, x:-15});
    hero_bkgd_tl.to("#sm_bubble_btm", {duration:10, y:25, x:15}, "<");
    hero_bkgd_tl.to("#sm_bubble_lft", {duration:10, y:-15, x:-15}, "<");

    let superhero_tl = gsap.timeline ({delay:0,});
    superhero_tl.from("#superhero",{duration: 1.5, opacity:0, y:150, x:-250, scale:.25});
    // superhero_tl.from("#pane-1", {duration: 1, opacity:0, });

});//CLOSE ==> document.ready
