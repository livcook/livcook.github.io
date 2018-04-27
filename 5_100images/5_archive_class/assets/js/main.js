$(document).ready(function() {


// Add jQuery here

// EACH CLICK FUCNTION TARGETS THE correct .b-tag FROM THE NAVIGATION
// HIDES ALL .item BY ADDING A CLASS OF HIDE with .addClass 'hide' (A)
// AND REMOVES CLASS OF SHOW FROM ALL .item WITH .removeClass 'show'

// THEN TARGETS THE RIGHT TAGGED ITEM WITH .item.tag
// ADDS THE CLASS OF 'show'
// REMOVES THE CLASS OF 'hide' THAT WAS PREVIOUSLY APPLIED (A)

$(".b-beach").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.beach").addClass("show");
  $(".item.beach").removeClass("hide");
});

$(".b-pool").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.pool").addClass("show");
  $(".item.pool").removeClass("hide");
});

$(".b-wild").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.wild").addClass("show");
  $(".item.wild").removeClass("hide");
});

$(".b-urban").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.urban").addClass("show");
  $(".item.urban").removeClass("hide");
});

$(".b-want").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.want").addClass("show");
  $(".item.want").removeClass("hide");
});

$(".b-hand").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.hand").addClass("show");
  $(".item.hand").removeClass("hide");
});

$(".b-selfie").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.selfie").addClass("show");
  $(".item.selfie").removeClass("hide");
});

$(".b-angle").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.angle").addClass("show");
  $(".item.angle").removeClass("hide");
});

$(".b-iphone").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.iphone").addClass("show");
  $(".item.iphone").removeClass("hide");
});

$(".b-butt").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.butt").addClass("show");
  $(".item.butt").removeClass("hide");
});

$(".b-prop").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.prop").addClass("show");
  $(".item.prop").removeClass("hide");
});


$(".b-showall").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.showall").addClass("show");
  $(".item.showall").removeClass("hide");
});

$('.item').click(function() {
  $('.item').removeClass('border');
  $(this).toggleClass('border');
});



// dont remvoe this line
});
