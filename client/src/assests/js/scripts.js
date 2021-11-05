var slideMenu = document.querySelector("#dropdown-menu");
var menuBtton = document.querySelector("#navbarDropdownMenuLink");

// $(document).ready(function () {
//     $("#").click(function() {
//         $(this).toggleClass('open');
//     });
// });
$(menuBtton).on('click', slider);
("#dropdown-menu").on("click", slider);

function slider() {
    if
    (slideMenu.style.right = "-100%") {
        slideMenu.style.right = "0px";
    }
    else if 
    (slideMenu.style.right = "0px") {
        slideMenu.style.right = "-100%";
    }
};

$('.collapse').collapse()
