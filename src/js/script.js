
//Hamburguer menu
  // Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation");
  // On click
  hamburger.addEventListener("click", ()=> {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
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
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });

  AOS.init();
//Buttom top
  const scrollBtn = document.querySelector('.scrollTop');
  const navHeader = document.querySelector('.header');
  window.addEventListener('scroll', (e)=>{
    scrollBtn.classList.toggle('active', window.scrollY > 500)
    // console.log(e)
    if(window.scrollY > 50){
      navHeader.classList.add('shadow');
    }else{
      navHeader.classList.remove('shadow');
    }
  })

  scrollBtn.addEventListener('click', ()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  })

//Event menu item
const items = document.querySelectorAll('.menu-list .menu-list__item')
items.forEach((item)=>{
item.addEventListener('click', ()=>{
  if(hamburger.classList.contains('is-active')){
    hamburger.classList.remove('is-active');
    nav.classList.remove('show');
  }
})
})

//Lightbox
const body = document.querySelector('body');
const lightbox = document.createElement('div');
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

let intViewportWidth = window.innerWidth;
const images = document.querySelectorAll('.grid__img');
images.forEach((image)=>{
    image.addEventListener('click', (e)=>{
        lightbox.classList.add('active');
        const img = document.createElement('img');
        body.style.overflow='hidden';
        img.src = image.src;
        if(intViewportWidth > 976){
          img.src = image.previousElementSibling.srcset;
        }else{
          img.src = image.src;
        }
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
          }
        lightbox.appendChild(img)
    })

    lightbox.addEventListener('click', (e)=>{
        //console.log(e.currentTarget.nodeName)
        if(e.target !== e.currentTarget){
            // console.log(e.currentTarget.className)
            // console.log(e.target)
            return;
            console.log('verdadero')
        }else{

            lightbox.classList.remove('active');
            body.style.overflow='initial';
        } 
    })
})


//Menu active
const menuActive = document.querySelectorAll('.menu-list .menu-list__item a');
const menuList = document.querySelector('.menu-list')
menuActive.forEach((item)=>{
item.addEventListener('click', ()=>{
  menuList.querySelector('.active-nav').classList.remove('active-nav')
  item.classList.add('active-nav')
})
})