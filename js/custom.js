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