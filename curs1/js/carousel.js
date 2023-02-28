var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: 'hover', //false
  keyboard:true,
  touch: true,
  ride: false, 
  //ride:false opreste animatia si utilizatorul da singur click
})