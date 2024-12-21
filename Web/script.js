// Desplazamiento suave para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Ajuste de desplazamiento
        behavior: 'smooth',
      });
    }
  });
});

// Animación de aparición (fade-in) al hacer scroll
const handleScrollAnimations = () => {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add('animate__fadeIn');
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Configuración inicial de los elementos animados
document.querySelectorAll('.fade-in').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', handleScrollAnimations);


// Interacción con las tarjetas de servicio
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  });
});


// Animación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 500); // Tiempo de retraso antes de iniciar la animación
  }
});

// Efecto de parallax en la sección Hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  }
});

// Botón "Volver arriba" dinámico
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
backToTopButton.style.display = 'none';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '1.5rem';
backToTopButton.style.backgroundColor = '#004aad'; // Azul
backToTopButton.style.color = '#ffffff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.transition = 'opacity 0.3s ease';

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
    backToTopButton.style.opacity = '1';
  } else {
    backToTopButton.style.opacity = '0';
    setTimeout(() => (backToTopButton.style.display = 'none'), 300);
  }
});


// Animación de aparición de proyectos
document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  window.addEventListener("scroll", () => {
    portfolioItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      if (rect.top < screenHeight - 100) {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }
    });
  });
});

// Seleccionar el formulario y escuchar el evento de envío
document.querySelector('#contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevenir el envío normal del formulario

  // Recopilar datos del formulario
  const formData = new FormData(this);

  // Mostrar un mensaje de carga
  const statusMessage = document.querySelector('#statusMessage');
  statusMessage.textContent = 'Enviando...';
  statusMessage.style.color = 'blue';

  // Enviar los datos mediante fetch
  fetch('send_email.php', {
      method: 'POST',
      body: formData,
  })
      .then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              // Mostrar mensaje de éxito
              statusMessage.textContent = data.message;
              statusMessage.style.color = 'green';
              this.reset(); // Limpiar el formulario
          } else {
              // Mostrar mensaje de error
              statusMessage.textContent = data.message;
              statusMessage.style.color = 'red';
          }
      })
      .catch(error => {
          // Mostrar mensaje de error si falla la solicitud
          statusMessage.textContent = 'Hubo un problema al enviar el correo.';
          statusMessage.style.color = 'red';
          console.error('Error:', error);
      });
});



