$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        navText:[
            '<img  src="assets/images/event/polygone_1.png"',
            '<img  src="assets/images/event/polygone_2.png"'
        ],
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            520:{
                items:2
            },
            980:{
                items:3
            }
        }
    });
  });



initSlider();

function initSlider(){
    var html = '';
    for (var i = 0; i<6; i++) {
         html += '<div class="item"><img src="assets/images/event/florian-olivo-4hbJ-eymZ1o-unsplash.png" alt=""><div class="goldBorder"><h1>Titre de l\'évènement</h1><h1>PRIX</h1></div></div>'
         
    }
    document.querySelector('.owl-carousel').innerHTML = html;
}