/**
* Template Name: Append
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init

  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox

  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter

  new PureCounter();

  /**
   * Init isotope layout and filters

  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


    // Aggiungiamo una funzione per la redirezione in base alla combinazione delle città
  function handleRedirect(event) {
    event.preventDefault(); // Evitiamo il comportamento di submit del form

    const departureCity = document.getElementById("departure").value;
    const destinationCity = document.getElementById("destination").value;

    // Costruiamo l'URL dinamicamente
    let redirectUrl = '';

    // Combinazioni delle città per redirigere
    if (departureCity === 'Milano' && destinationCity === 'Milano') {
      //redirectUrl = 'milano-roma-itinerary.html';
      redirectUrl = 'itinerary.html';
    } else if (departureCity === 'Milano' && destinationCity === 'Berlin') {
      redirectUrl = 'itinerary.html';
    } else if (departureCity === 'Milano' && destinationCity === 'Roma') {
      redirectUrl = 'itinerary.html';
    } else if (departureCity === 'Roma' && destinationCity === 'Milano') {
      redirectUrl = 'itinerary.html';      
    } else if (departureCity === 'Roma' && destinationCity === 'Berlin') {
      redirectUrl = 'itinerary.html';
    } else if (departureCity === 'Roma' && destinationCity === 'Roma') {
      redirectUrl = 'itinerary.html';
    } else if (departureCity === 'Berlin' && destinationCity === 'Milano') {
      redirectUrl = 'itinerary.html';      
    } else if (departureCity === 'Berlin' && destinationCity === 'Roma') {
      redirectUrl = 'itinerary.html';
    } else if (departureCity === 'Berlin' && destinationCity === 'Berlin') {
      redirectUrl = 'itinerary.html';      
    } else {
      //redirectUrl = 'default-itinerary.html'; // URL di default se la combinazione non è prevista
    }

    // Redirigiamo l'utente alla pagina selezionata
    window.location.href = redirectUrl;
  }


  // Aggiungiamo l'evento di click sul pulsante "Generate My Itinerary"
  const generateButton = document.querySelector('.btn.btn-primary');
  if (generateButton) {
    generateButton.addEventListener('click', handleRedirect);
  }

    /**
   * Funzione per gestire i clic sui pulsanti "Like" e "Comment"
   */
  document.querySelectorAll('.btn-light').forEach(button => {
    button.addEventListener('click', function() {
      // Se il testo del pulsante è "Like", mostra un messaggio di like
      if (this.innerText === "Like") {
        alert("You liked the post!");
        this.innerText = "Liked";  // Cambia il testo del pulsante a "Liked"
      } 
      // Se il testo del pulsante è "Comment", mostra un messaggio di commento
      else if (this.innerText === "Comment") {
        alert("Add your comment here!");
      }
    });
  });

})();
