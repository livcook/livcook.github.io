$(document).ready(function() {


// Add jQuery here

// EACH CLICK FUCNTION TARGETS THE correct .b-tag FROM THE NAVIGATION
// HIDES ALL .item BY ADDING A CLASS OF HIDE with .addClass 'hide' (A)
// AND REMOVES CLASS OF SHOW FROM ALL .item WITH .removeClass 'show'

// THEN TARGETS THE RIGHT TAGGED ITEM WITH .item.tag
// ADDS THE CLASS OF 'show'
// REMOVES THE CLASS OF 'hide' THAT WAS PREVIOUSLY APPLIED (A)

$(".b-livingroom").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.livingroom").addClass("show");
  $(".item.livingroom").removeClass("hide");
});

$(".b-bedroom").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.bedroom").addClass("show");
  $(".item.bedroom").removeClass("hide");
});

$(".b-bathroom").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.bathroom").addClass("show");
  $(".item.bathroom").removeClass("hide");
});

$(".b-desk").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.desk").addClass("show");
  $(".item.desk").removeClass("hide");
});

$(".b-closeup").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.closeup").addClass("show");
  $(".item.closeup").removeClass("hide");
});

$(".b-homeware").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.homeware").addClass("show");
  $(".item.homeware").removeClass("hide");
});

$(".b-art").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.art").addClass("show");
  $(".item.art").removeClass("hide");
});

$(".b-wallpaper").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.wallpaper").addClass("show");
  $(".item.wallpaper").removeClass("hide");
});

$(".b-plantwall").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.plantwall").addClass("show");
  $(".item.plantwall").removeClass("hide");
});

$(".b-smallarea").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.smallarea").addClass("show");
  $(".item.smallarea").removeClass("hide");
});

$(".b-cactus").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.cactus").addClass("show");
  $(".item.cactus").removeClass("hide");
});

$(".b-monstera").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.monstera").addClass("show");
  $(".item.monstera").removeClass("hide");
});

$(".b-succulant").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.succulant").addClass("show");
  $(".item.succulant").removeClass("hide");
});

$(".b-showall").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.showall").addClass("show");
  $(".item.showall").removeClass("hide");
});

$(".b-light").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.light").addClass("show");
  $(".item.light").removeClass("hide");
});

$(".b-kitchen").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.kitchen").addClass("show");
  $(".item.kitchen").removeClass("hide");
});
// dont remvoe this line
});
