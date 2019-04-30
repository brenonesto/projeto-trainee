$(document).ready(function () {
  $('.carousel').carousel();
});

$(document).ready(function () {
  $('.sidenav').sidenav();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

var $root = $('html, body');

$('#quem').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

$('#ejs1').click(function () {
  $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);

  return false;
});

$('#parceiros1').click(function () {
  $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);

  return false;
});

$('#fale1').click(function () {
  $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);

  return false;
});

$('#home1').click(function () {
  $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);

  return false;
});

$('#home2').click(function () {
  $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);

  return false;
});

$("form").submit(function(e){
  e.preventDefault();
  alert("Mensagem Enviada!");
});