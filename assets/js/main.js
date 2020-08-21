$( document ).ready(function() {
// nav transform on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 150) {
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
});//CLOSE ==> document.ready
