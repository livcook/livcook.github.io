

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function() {

$('.e-angry').mouseenter(function() {
    $('.p-angry').addClass('p-show');
  });

$('.e-angry').mouseleave(function() {
    $('.p-angry').removeClass('p-show');
  });

  $('.e-plane').mouseenter(function() {
      $('.p-plane').addClass('p-show');
    });

  $('.e-plane').mouseleave(function() {
      $('.p-plane').removeClass('p-show');
    });
    $('.e-gun').mouseenter(function() {
        $('.p-gun').addClass('p-show');
      });

    $('.e-gun').mouseleave(function() {
        $('.p-gun').removeClass('p-show');
      });

      $('.e-knife').mouseenter(function() {
          $('.p-knife').addClass('p-show');
        });

      $('.e-knife').mouseleave(function() {
          $('.p-knife').removeClass('p-show');
        });



  });
