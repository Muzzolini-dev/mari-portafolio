// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
        document.querySelector(".user_option").classList.remove("mobile_open");

}

document.querySelectorAll('#myNav .overlay-content a').forEach(function (link) {
    link.addEventListener('click', function () {
        var nav = document.getElementById('myNav');
        nav.style.transition = 'none';          // suspend the 0.5s width transition
        nav.classList.remove('menu_width');
        nav.offsetHeight;                        // force reflow so the change applies with no transition
        nav.style.transition = '';                // restore it for the next normal open/close
        document.querySelector('.custom_menu-btn').classList.remove('menu_btn-style');
    });
});

function toggleMobileLinks(event) {
    if (event) event.stopPropagation();
    document.getElementById("myNav").classList.remove("menu_width");
    document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");
    document.querySelector(".user_option").classList.toggle("mobile_open");
}

document.addEventListener("click", function (e) {
    var panel = document.querySelector(".user_option");
    var btn = document.querySelector(".mobile_links_btn");
    if (
        panel.classList.contains("mobile_open") &&
        !panel.contains(e.target) &&
        e.target !== btn &&
        !btn.contains(e.target)
    ) {
        panel.classList.remove("mobile_open");
    }
});

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

// SOLUCIÓN: Reemplazar el código del carrusel en custom.js

// Código mejorado para el indicador del carrusel
document.addEventListener('DOMContentLoaded', function() {
    
    // Variables para los elementos del carrusel
    var liOne = $(".slider_section .carousel-indicators li.li_one");
    var liTwo = $(".slider_section .carousel-indicators li.li_two");
    var ulAfter = $(".slider_section .carousel-indicators .ol_design");
    
    console.log("Elementos encontrados:", {
        liOne: liOne.length,
        liTwo: liTwo.length,
        ulAfter: ulAfter.length
    });
    
    // Función para mover el indicador
    function moveIndicator() {
        if (liOne.hasClass("active")) {
            console.log("Moviendo a posición 1");
            ulAfter.css({
                'left': 'calc(0% + 35px)',
                'transition': 'left 0.3s ease'
            });
        } else if (liTwo.hasClass("active")) {
            console.log("Moviendo a posición 2");
            ulAfter.css({
                'left': 'calc(100% - 45px)',
                'transition': 'left 0.3s ease'
            });
        }
    }
    
    // Event listener mejorado para el carrusel
    $('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
        console.log("Carrusel cambió de slide");
        moveIndicator();
    });
    
    // También escuchar el evento slide (antes de completar la transición)
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
        console.log("Carrusel iniciando cambio");
        // Pequeño delay para que los elementos active se actualicen
        setTimeout(moveIndicator, 100);
    });
    
    // Event listeners para los indicadores clickeables
    liOne.on('click', function() {
        console.log("Click en indicador 1");
        setTimeout(moveIndicator, 150);
    });
    
    liTwo.on('click', function() {
        console.log("Click en indicador 2");
        setTimeout(moveIndicator, 150);
    });
    
    // Inicializar posición correcta al cargar
    setTimeout(function() {
        moveIndicator();
    }, 500);
    
    // Fallback: verificar cada segundo si la posición es correcta
    setInterval(function() {
        if (liOne.hasClass("active") && !ulAfter.hasClass("position-1")) {
            ulAfter.addClass("position-1").removeClass("position-2");
            moveIndicator();
        } else if (liTwo.hasClass("active") && !ulAfter.hasClass("position-2")) {
            ulAfter.addClass("position-2").removeClass("position-1");
            moveIndicator();
        }
    }, 1000);
});

// Función alternativa usando JavaScript puro (si jQuery falla)
function initCarouselIndicatorPure() {
    const carouselElement = document.getElementById('carouselExampleIndicators');
    const liOne = document.querySelector('.slider_section .carousel-indicators li.li_one');
    const liTwo = document.querySelector('.slider_section .carousel-indicators li.li_two');
    const ulAfter = document.querySelector('.slider_section .carousel-indicators .ol_design');
    
    if (!carouselElement || !liOne || !liTwo || !ulAfter) {
        console.error('Elementos del carrusel no encontrados');
        return;
    }
    
    function updateIndicatorPosition() {
        if (liOne.classList.contains('active')) {
            ulAfter.style.left = 'calc(0% + 35px)';
            ulAfter.style.transition = 'left 0.5s ease';
        } else if (liTwo.classList.contains('active')) {
            ulAfter.style.left = 'calc(100% - 45px)';
            ulAfter.style.transition = 'left 0.5s ease';
        }
    }
    
    // Usar MutationObserver para detectar cambios en las clases
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                updateIndicatorPosition();
            }
        });
    });
    
    // Observar cambios en los indicadores
    observer.observe(liOne, { attributes: true });
    observer.observe(liTwo, { attributes: true });
    
    // Event listeners para clicks
    liOne.addEventListener('click', () => setTimeout(updateIndicatorPosition, 100));
    liTwo.addEventListener('click', () => setTimeout(updateIndicatorPosition, 100));
    
    // Inicializar
    updateIndicatorPosition();
}

// Ejecutar la función alternativa como backup
setTimeout(initCarouselIndicatorPure, 1000);
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
      interval: 5000,  
      pause: 'hover',
      wrap: true
    });

   /*  // ↓↓↓ ADD THESE TWO BLOCKS HERE ↓↓↓
    $('#Papers-Theses-Carousel').carousel({
      interval: 6000,
      pause: 'hover',
      wrap: true
    }); */

    $('#Papers-Articles-Carousel').carousel({
      interval: 5000,
      pause: 'hover',
      wrap: true
    });

    document.querySelectorAll('.gallery-swiper').forEach(function(el) {
    new Swiper(el, {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 35,
    keyboard:{
        enabled: true,
        onlyInViewport: true
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 20,
      depth: 350,
      modifier: 1.5,
      slideShadows: false
    },
    navigation: {
      nextEl: el.querySelector('.gallery-nav-next'),
      prevEl: el.querySelector('.gallery-nav-prev')
    },
    breakpoints: {
      0:   { slidesPerView: 1.2 },
      768: { slidesPerView: 'auto' }
    }
    
  });
  
});
    // ↑↑↑ ADD THESE TWO BLOCKS HERE ↑↑↑
    
    
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
 // Modal de Contacto - JavaScript Refactorizado
function openContactModal(event) {
    if (event) event.preventDefault();
    const contactModal = document.getElementById('contactModal');
    contactModal.classList.add('contact-show');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
}

// JavaScript mejorado para cerrar modal sin conflictos
function closeContactModal(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.classList.remove('contact-show');
    }
    
    // Solución simple: remover todos los estilos inline
    document.body.removeAttribute('style');
    
    return false;
}


// Función para manejar el envío del formulario
function handleContactFormSubmit(event) {
    event.preventDefault(); // Evita el envío normal del formulario
    
    const form = event.target;
    const submitButton = form.querySelector('.contact-submit-button');
    const originalText = submitButton.textContent;
    
    // Cambiar el botón a estado de "enviando"
    submitButton.textContent = 'ENVIANDO...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.7';
    
    // Crear FormData para enviar
    const formData = new FormData(form);
    
    // Enviar con fetch
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Éxito - mostrar mensaje y limpiar formulario
            showContactSuccess();
            form.reset();
        } else {
            throw new Error('Error en el envío');
        }
    })
    .catch(error => {
        // Error - mostrar mensaje de error
        showContactError();
        console.error('Error:', error);
    })
    .finally(() => {
        // Restaurar el botón
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
    });
}

// Función para mostrar mensaje de éxito
function showContactSuccess() {
    const modalBody = document.querySelector('.contact-modal-body');
    const successMessage = `
        <div class="contact-success-message">
            <div class="success-icon">✓</div>
            <h3>¡Mensaje enviado!</h3>
            <p>Gracias por contactarme. Te responderé pronto.</p>
            <button onclick="closeContactModal()" class="contact-submit-button" style="margin-top: 20px;">
                Cerrar
            </button>
        </div>
    `;
    modalBody.innerHTML = successMessage;
}

// Función para mostrar mensaje de error
function showContactError() {
    const submitButton = document.querySelector('.contact-submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'ERROR - INTÉNTALO DE NUEVO';
    submitButton.style.backgroundColor = '#d32f2f';
    
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '#6e1313';
    }, 3000);
}

// Event listeners para el modal de contacto (solo si existe)
document.addEventListener('DOMContentLoaded', function() {
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        // Cerrar con clic fuera
        contactModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });
        
        // Cerrar con Escape - Solo si no hay otros modales abiertos
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                // Verificar si el modal de contacto está abierto
                if (contactModal.classList.contains('contact-show')) {
                    closeContactModal();
                }
            }
        });
        
        // Prevenir cierre al clic dentro del contenido
        const contactModalContent = contactModal.querySelector('.contact-modal-content');
        if (contactModalContent) {
            contactModalContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
        
        // Manejar el envío del formulario
        const contactForm = contactModal.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactFormSubmit);
        }
    }
});   

document.addEventListener('DOMContentLoaded', function () {
    var socialsCarousel = document.querySelector('#carouselExampleControls');
    if (!socialsCarousel) return;
     $(socialsCarousel).off('mouseenter.bs.carousel mouseleave.bs.carousel');
    var SWIPE_THRESHOLD = 50; // px needed to actually flip the slide

   var RESUME_DELAY = 210000; // ms — how long to wait after the last interaction before auto-resuming; adjust to taste
    var resumeTimer = null;

    function stopAutoplay() {
        $(socialsCarousel).carousel('pause');
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(function () {
            $(socialsCarousel).carousel('cycle');
        }, RESUME_DELAY);
    }

     function stopIframePlayback(iframe) {
        if (!iframe) return;
        var src = iframe.src;
        iframe.src = '';   // clearing it first guarantees the next line is a real change, not a no-op
        iframe.src = src;
    }

        socialsCarousel.querySelectorAll('.client_content-box').forEach(function (card) {
        card.style.position = 'relative';

        var overlay = document.createElement('div');
        overlay.style.cssText =
            'position:absolute; top:100px; left:0; width:100%; height:100%;' +
            'z-index:5; touch-action:pan-y; cursor:grab;' +
            'display:flex; align-items:center; justify-content:center; padding-bottom:18%;';
        card.appendChild(overlay);

      
        var hint = document.createElement('div');
        hint.className = 'reel-hint';
        hint.textContent = 'Toca dos veces para reproducir';
        overlay.appendChild(hint);

        var startX = 0;
        var pointerId = null;

        overlay.addEventListener('pointerdown', function (e) {
            startX = e.clientX;
            pointerId = e.pointerId;
            overlay.setPointerCapture(pointerId);
        });

        overlay.addEventListener('pointerup', function (e) {
            if (e.pointerId !== pointerId) return;
            overlay.releasePointerCapture(pointerId);

            var delta = e.clientX - startX;

            if (Math.abs(delta) >= SWIPE_THRESHOLD) {
                stopAutoplay();
                $(socialsCarousel).carousel(delta < 0 ? 'next' : 'prev');
                return;
            }

            // a tap, not a swipe — this is the user reaching for play,
            // so pause autoplay right here instead of guessing at it later
            stopAutoplay();
            hint.style.opacity = '0';

            // step aside so the browser's own click lands on Instagram's iframe,
            // then come back for next time
            overlay.style.pointerEvents = 'none';
            setTimeout(function () {
                overlay.style.pointerEvents = 'auto';
            }, 400);
        });
    });

    // whenever the carousel is about to change slide — auto or manual —
    // stop whatever reel was playing on the outgoing slide before it's hidden
    $(socialsCarousel).on('slide.bs.carousel', function () {
        var outgoingIframe = socialsCarousel.querySelector('.carousel-item.active iframe.instagram-media');
        stopIframePlayback(outgoingIframe);
        socialsCarousel.querySelectorAll('.reel-hint').forEach(function (h) {
            h.style.opacity = '1';
        });
    });
});