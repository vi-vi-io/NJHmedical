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
//START ==> pricing form handler
    var basket = ["Item", "Quantity"];
    $("button.btn-add").click(function() {
        var item_name = this.name;
        var quan_input = this.dataset.targetid;
        var item_quan = Number(document.getElementById(quan_input).value);
        var item_exists = Number(basket.indexOf(item_name));
        var item_exists_quan = Number(item_exists + 1);
        if (item_exists == -1) {
            basket.push(item_name);
            basket.push(item_quan);
        } else {
            basket[item_exists_quan] += (item_quan);
        }
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
        html_build += "</tr></table>";
        // Attach HTML to container and add to pricing form
        document.getElementById("order_basket_table").innerHTML = html_build;
        document.getElementById("order_request").value = html_build;
    });//CLOSE ==> pricing form handler
});//CLOSE ==> document.ready
