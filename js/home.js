$(document).ready(function(){
    $('.carousel').carousel();
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $('.carro1').slick({
    
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  });