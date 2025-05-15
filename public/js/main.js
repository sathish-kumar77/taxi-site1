/*------------------------------------------------------------------
* Project:        EVdriveX - Electric Vehicle & Charging Station HTML Templates
* Author:         HtmlDesignTemplates
* URL:            https://themeforest.net/user/htmldesigntemplates
* Created:        04/04/2025
-------------------------------------------------------------------*/

(function ($) {
  "use strict";

  /*//For Popup search start//*/
  $('a[href="#search1"]').on('click', function(event) {
    event.preventDefault();
    $('#search1').addClass('open');
    $('#search1 input').focus(); // Focus on the input field
  });

  $('#search1, #search1 button.close').on('click keyup', function(event) {
    if (event.target == this || $(event.target).hasClass('close') || event.keyCode == 27) {
      $('#search1').removeClass('open');
    }
  });

  /* SlickNav Responsive Menu */
  $('#responsive-menu').slicknav({
    duration: 500,
    easingOpen: 'easeInExpo',
    easingClose: 'easeOutExpo',
    closedSymbol: '<i class="arrow-indicator fa fa-angle-down"></i>',
    openedSymbol: '<i class="arrow-indicator fa fa-angle-up"></i>',
    prependTo: '#slicknav-mobile',
    allowParentLinks: true,
    label: ""
  });

  /* Dropdown Menu */
  var selected = $('#navbar li');
  selected.on("mouseenter", function () {
      $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
  }).on("mouseleave", function () {
      $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
  });

  /* Arrow Indicator for Submenus */
  if ($(window).width() > 992) {
      $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
  }

  /* Spin Animation For Banner */
  const listItems = document.querySelectorAll('.spin');
  const words = ['faster', 'bigger', 'better'];
  let currentWordIndex = 0;

  function updateWords() {
      listItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.1}s`;
          if (index === listItems.length - 1) {
              item.addEventListener('animationend', handleAnimationEnd);
          }
      });
  }

  function handleAnimationEnd() {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = words[currentWordIndex];
      
      listItems.forEach((letterSpan, i) => {
          letterSpan.textContent = nextWord[i] || '';
          letterSpan.classList.remove('spin');
          void letterSpan.offsetWidth; // Trigger reflow
          letterSpan.classList.add('spin');
      });
  }

  listItems.forEach((item, i) => {
      item.textContent = words[0][i] || ''; // Set initial word
  });
  updateWords();

  /* Counter JS */
  document.querySelectorAll(".num").forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"), 10);
    let duration = Math.max(Math.floor(2000 / endValue), 1);
    let counter = setInterval(() => {
        valueDisplay.textContent = ++startValue;
        if (startValue === endValue) clearInterval(counter);
    }, duration);
  });

  /* Slick Sliders */
  $('.partner-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
  });

  $('.review-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
  });      

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 0,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } }
    ]
  });

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
  });

  $('.price-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });

  $('.project-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
  });

  $('.news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
  }); 

  /* Counter for progress bar start */
  let valueDisplayss = document.querySelectorAll(".progress-num");
  let intervall = 3000;

  valueDisplayss.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(intervall / endValue);
      let counter = setInterval(function() {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
              clearInterval(counter);
          }
      }, duration);
  });

  /* Light Gallery For Gallery section Start */
  lightGallery(document.getElementById('lightgallery-video'), {
    plugins: [lgVideo],
    speed: 500,
    videoMaxWidth: '1000px',
  });  

  /* Back-to-top js Start */
  $(document).ready(() => {
    $('#back-to-top').hide(); // Hide button initially

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 500) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });

    $(document).on('click', '#back-to-top, .back-to-top', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
  }); 

  /* Sticky Header */
  let $headerMenu = $('.header-nav-menu');

    $(window).on('scroll', function () {
        let curScroll = $(window).scrollTop();

        if (curScroll > 130) {
            $headerMenu.addClass('navbar-sticky-in');
        } else {
            $headerMenu.removeClass('navbar-sticky-in');
        }
    });

})(jQuery);


 // Show loader
 function showLoader() {
  document.getElementById("loader").style.display = "block";
}

// Hide loader
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// Example usage: on page load
window.addEventListener("load", () => {
  // Simulate load delay
  setTimeout(hideLoader, 2000);
});

// Example: on form submit
function handleFormSubmit(event) {
  event.preventDefault();
  showLoader();
  // Simulate async task (e.g. sending email)
  setTimeout(() => {
    hideLoader();
    alert("Submitted!");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  const taxiContainer = document.querySelector(".taxi-container");
  let currentTaxi = document.querySelector(".taxi-drive-in");

  // Initialize first taxi
  initTaxi(currentTaxi);

  // Scroll animation trigger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !currentTaxi.classList.contains("animate-in")
        ) {
          animateTaxiIn(currentTaxi);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(document.getElementById("taxi-booking"));

  function initTaxi(taxiElement) {
    const form = taxiElement.querySelector("form");
    const serviceTypeSelect = taxiElement.querySelector("#serviceType");
    const roundTripFields = taxiElement.querySelectorAll(".round-trip-fields");
    const pickupDate = taxiElement.querySelector("#pickupDate");
    const returnDate = taxiElement.querySelector("#returnDate");

    // Set minimum date for date pickers to today
    const today = new Date().toISOString().split("T")[0];
    if (pickupDate) {
      pickupDate.setAttribute("min", today);
    }
    if (returnDate) {
      returnDate.setAttribute("min", today);
    }

    // Service type toggle for round-trip fields
    if (serviceTypeSelect) {
      serviceTypeSelect.addEventListener("change", function () {
        roundTripFields.forEach((field) => {
          const input = field.querySelector("input");
          if (this.value === "round-trip") {
            field.style.display = "block";
            if (input) {
              input.setAttribute("required", "true");
            }
          } else {
            field.style.display = "none";
            if (input) {
              input.removeAttribute("required");
            }
          }
        });
      });
    }

    // Form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Booking confirmed! Your taxi is on the way.");

      animateTaxiOut(taxiElement);
    });
  }

  function animateTaxiIn(taxiElement) {
    taxiElement.classList.add("animate-in");

    const taxiBody = taxiElement.querySelector(".taxi-body");
    const wheels = taxiElement.querySelectorAll(".wheel");
    const tyreImgs = taxiElement.querySelectorAll(".tyre-img");

    // Stop animations after taxi arrives
    setTimeout(() => {
      taxiBody.classList.add("stopped");
      wheels.forEach((wheel) => wheel.classList.add("stopped"));
      tyreImgs.forEach((img) => img.classList.add("stopped"));
    }, 1000);
  }

  function animateTaxiOut(taxiElement) {
    const taxiBody = taxiElement.querySelector(".taxi-body");
    const wheels = taxiElement.querySelectorAll(".wheel");
    const tyreImgs = taxiElement.querySelectorAll(".tyre-img");
  
    // Restart animations for exit
    taxiBody.classList.remove("stopped");
    wheels.forEach((wheel) => wheel.classList.remove("stopped"));
    tyreImgs.forEach((img) => img.classList.remove("stopped"));
  
    // Start exit animation
    taxiElement.classList.add("exit");
    taxiElement.classList.remove("animate-in");
  
    console.log("Exit animation started for taxi:", taxiElement);
  
    // Listen for transitionend on transform property
    const handleTransitionEnd = (event) => {
      if (event.propertyName === "transform") {
        taxiElement.remove();
        createNewTaxi();
      }
    };
  
    taxiElement.addEventListener("transitionend", handleTransitionEnd, { once: true });
  
    // Fallback timeout to ensure taxi is removed if transitionend fails
    setTimeout(() => {
      if (taxiElement.parentNode) {
        taxiElement.remove();
        createNewTaxi();
      }
    }, 1000); 
  }

  function createNewTaxi() {
    // Create new taxi element
    const newTaxi = document.createElement("div");
    newTaxi.className = "taxi-drive-in";
    newTaxi.innerHTML = `
      <div class="taxi-sign">TAXI BOOKING</div>
      <div class="taxi-front"></div>
      <div class="taxi-body">
        <div class="booking-form" id="bookingForm">
          <div class="form-header">
            <h2><i class="fa fa-car me-2"></i>BOOK YOUR RIDE</h2>
          </div>
          <form id="taxiBookingForm">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Mobile Number</label>
                <input type="tel" class="form-control" id="mobileNo" placeholder="Enter mobile number" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Service Type</label>
                <select class="form-select" id="serviceType" required>
                  <option value="" disabled selected>Select service</option>
                  <option value="one-way">One Way</option>
                  <option value="round-trip">Round Trip</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Pickup Location</label>
                <input type="text" class="form-control" id="pickupLocation" placeholder="Enter pickup" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Drop Location</label>
                <input type="text" class="form-control" id="dropLocation" placeholder="Enter drop" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Pickup Date</label>
                <input type="date" class="form-control" id="pickupDate" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Pickup Time</label>
                <input type="time" class="form-control" id="pickupTime" required>
              </div>
              <div class="col-md-6 round-trip-fields" style="display: none;">
                <label class="form-label">Return Date</label>
                <input type="date" class="form-control" id="returnDate">
              </div>
              <div class="col-12 text-center mt-4">
                <button type="submit" class="btn btn-book btn-lg">
                  <i class="fas fa-car-side me-2"></i>Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="taxi-back"></div>
      <div class="wheel front-wheel">
        <img src="images/wheel.png" alt="Tyre" class="tyre-img">
      </div>
      <div class="wheel back-wheel">
        <img src="images/wheel.png" alt="Tyre" class="tyre-img">
      </div>
    `;

    // Append new taxi to container
    taxiContainer.appendChild(newTaxi);
    currentTaxi = newTaxi;

    // Initialize new taxi
    initTaxi(newTaxi);

    // Animate new taxi in
    setTimeout(() => {
      animateTaxiIn(newTaxi);
    }, 50);
  }
});



window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const h4 = document.querySelector("h4");

  // Optional: Add a delay so the loader doesn't disappear too fast
  setTimeout(() => {
    if (loader) loader.style.display = "none";
    if (h4) h4.style.display = "none";
  }, 3000); // 1 second delay
});

