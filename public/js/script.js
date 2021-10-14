"use strict";

//Hamburguer menu
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".navigation"); // On click

hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active"); // Do something else, like open/close menu

  nav.classList.toggle('show');
});
new Glider(document.querySelector('.testimonial__slider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  // dots: '.dots',
  arrows: {
    prev: '.prev',
    next: '.next'
  },
  responsive: [{
    // screens greater than >= 775px
    breakpoint: 775,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 2,
      slidesToScroll: 1,
      itemWidth: 150,
      duration: 0.25
    }
  }, {
    // screens greater than >= 1024px
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      itemWidth: 150,
      duration: 0.25
    }
  }]
});
AOS.init(); //Buttom top

var scrollBtn = document.querySelector('.scrollTop');
var navHeader = document.querySelector('.header');
window.addEventListener('scroll', function (e) {
  scrollBtn.classList.toggle('active', window.scrollY > 500); // console.log(e)

  if (window.scrollY > 50) {
    navHeader.classList.add('shadow');
  } else {
    navHeader.classList.remove('shadow');
  }
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); //Event menu item

var items = document.querySelectorAll('.menu-list .menu-list__item');
items.forEach(function (item) {
  item.addEventListener('click', function () {
    if (hamburger.classList.contains('is-active')) {
      hamburger.classList.remove('is-active');
      nav.classList.remove('show');
    }
  });
}); //Lightbox

var body = document.querySelector('body');
var lightbox = document.createElement('div');
lightbox.id = "lightbox";
document.body.appendChild(lightbox);
var intViewportWidth = window.innerWidth;
var images = document.querySelectorAll('.grid__img');
images.forEach(function (image) {
  image.addEventListener('click', function (e) {
    lightbox.classList.add('active');
    var img = document.createElement('img');
    body.style.overflow = 'hidden';
    img.src = image.src;

    if (intViewportWidth > 976) {
      img.src = image.previousElementSibling.srcset;
    } else {
      img.src = image.src;
    }

    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(img);
  });
  lightbox.addEventListener('click', function (e) {
    //console.log(e.currentTarget.nodeName)
    if (e.target !== e.currentTarget) {
      // console.log(e.currentTarget.className)
      // console.log(e.target)
      return;
      console.log('verdadero');
    } else {
      lightbox.classList.remove('active');
      body.style.overflow = 'initial';
    }
  });
}); //Menu active

var menuActive = document.querySelectorAll('.menu-list .menu-list__item a');
var menuList = document.querySelector('.menu-list');
menuActive.forEach(function (item) {
  item.addEventListener('click', function () {
    menuList.querySelector('.active-nav').classList.remove('active-nav');
    item.classList.add('active-nav');
  });
});
