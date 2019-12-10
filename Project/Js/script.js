
$(document).ready(function() {
  $(".About").hide();
  $(".service").hide();
  $(".Contact2").hide();
  $(".customers").hide();
 
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


$('#first').click(function(){
    $.scrollTo('#start-of-page', 600);
    $(".left-side").show();
    $(".About").hide();
    $(".service").hide();
    $(".Contact2").hide();
    $(".customers").hide();
    
    console.log("connceted1");

  });

  $('#second').click(function(){
    $.scrollTo('.About', 600);
    
    $(".left-side").hide();
    $(".About").show();
    $(".Contact2").hide();
    $(".service").hide();
    $(".customers").hide();
    
    console.log("connceted2");
  });

  $('#third').click(function(){
    $(".left-side").hide();
    $(".About").hide();
    $(".service").show();
    $(".Contact2").hide();
    $(".customers").hide();
    console.log("connceted3");
  });

  $('#fourth').click(function(){
    $(".left-side").hide();
    $(".About").hide();
    $(".service").hide();
    $(".Contact2").show();
    $(".customers").hide();
    console.log("connceted4");
  });


  $('#fifith').click(function(){
    $(".left-side").hide();
    $(".About").hide();
    $(".service").hide();
    $(".Contact2").hide();
    $(".customers").show();
    console.log("connceted5");
  });














});