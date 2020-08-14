window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        $('.navbar').removeClass("navbar-top");
    }
    else {
        $('.navbar').addClass("navbar-top");
    }
},false);
