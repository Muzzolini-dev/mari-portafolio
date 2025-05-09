// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two")
var ulAfter = $(".slider_section .carousel-indicators .ol_design")

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass("active")) {
        // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(0% + ' + 35 + 'px)'
        })

    } else if (litwo.hasClass("active")) {
        // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(100% - ' + 45 + 'px)'
        })
    }
});

// JavaScript para los carruseles de artículos
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el primer carrusel con intervalos más largos
    $('#articulosCarrusel1').carousel({
      interval: 6000,  // 6 segundos
      pause: 'hover',
      wrap: true
    });
    
    // Inicializar el segundo carrusel con un intervalo diferente para evitar sincronización
    $('#articulosCarrusel2').carousel({
      interval: 7000,  // 7 segundos
      pause: 'hover',
      wrap: true
    });
    
    // Detener la autorotación al pasar el mouse sobre el carrusel
    $('.blog_section .carousel').on('mouseenter', function() {
      $(this).carousel('pause');
    });
    
    // Reanudar la autorotación al quitar el mouse
    $('.blog_section .carousel').on('mouseleave', function() {
      $(this).carousel('cycle');
    });
    
    // Agregar botones de navegación personalizados con íconos
    $('.blog_section .carousel-control-prev').html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
    $('.blog_section .carousel-control-next').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
    
    // Hacer que las tarjetas de artículos tengan la misma altura en cada fila
    function equalizeCardHeights() {
      // Resetear alturas
      $('.carousel-item').each(function() {
        var maxHeight = 0;
        var cards = $(this).find('.box');
        
        // Resetear altura
        cards.css('height', 'auto');
        
        // Encontrar altura máxima
        cards.each(function() {
          if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
          }
        });
        
        // Aplicar altura máxima
        cards.height(maxHeight);
      });
    }
    
    // Ejecutar al cargar y redimensionar
    equalizeCardHeights();
    $(window).resize(function() {
      equalizeCardHeights();
    });
    
    // Recalcular alturas cuando cambia el carrusel
    $('.carousel').on('slid.bs.carousel', function() {
      equalizeCardHeights();
    });
  });