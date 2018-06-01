

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
        $('.e-bomb').mouseenter(function() {
            $('.p-bomb').addClass('p-show');
          });

        $('.e-bomb').mouseleave(function() {
            $('.p-bomb').removeClass('p-show');
          });

          $('.e-punch').mouseenter(function() {
              $('.p-punch').addClass('p-show');
            });

          $('.e-punch').mouseleave(function() {
              $('.p-punch').removeClass('p-show');
            });
            $('.e-ambo').mouseenter(function() {
                $('.p-ambo').addClass('p-show');
              });

            $('.e-ambo').mouseleave(function() {
                $('.p-ambo').removeClass('p-show');
              });

              $('.e-hundred').mouseenter(function() {
                  $('.p-hundred').addClass('p-show');
                });

              $('.e-hundred').mouseleave(function() {
                  $('.p-hundred').removeClass('p-show');
                });
                $('.e-point').mouseenter(function() {
                    $('.p-point').addClass('p-show');
                  });

                $('.e-point').mouseleave(function() {
                    $('.p-point').removeClass('p-show');
                  });
                  $('.e-clap').mouseenter(function() {
                      $('.p-clap').addClass('p-show');
                    });

                  $('.e-clap').mouseleave(function() {
                      $('.p-clap').removeClass('p-show');
                    });

                    $('.e-smile').mouseenter(function() {
                        $('.p-smile').addClass('p-show');
                      });

                    $('.e-smile').mouseleave(function() {
                        $('.p-smile').removeClass('p-show');
                      });

                      $('.e-love').mouseenter(function() {
                          $('.p-love').addClass('p-show');
                        });

                      $('.e-love').mouseleave(function() {
                          $('.p-love').removeClass('p-show');
                        });

                        $('.e-eyes').mouseenter(function() {
                            $('.p-eyes').addClass('p-show');
                          });

                        $('.e-eyes').mouseleave(function() {
                            $('.p-eyes').removeClass('p-show');
                          });

                          $('.e-upside').mouseenter(function() {
                              $('.p-upside').addClass('p-show');
                            });

                          $('.e-upside').mouseleave(function() {
                              $('.p-upside').removeClass('p-show');
                        });
                        $('.e-tears').mouseenter(function() {
                            $('.p-tears').addClass('p-show');
                          });

                        $('.e-tears').mouseleave(function() {
                            $('.p-tears').removeClass('p-show');
                      });
                      $('.e-peach').mouseenter(function() {
                          $('.p-peach').addClass('p-show');
                        });

                      $('.e-peach').mouseleave(function() {
                          $('.p-peach').removeClass('p-show');
                    });
                    $('.e-eggplant').mouseenter(function() {
                        $('.p-eggplant').addClass('p-show');
                      });

                    $('.e-eggplant').mouseleave(function() {
                        $('.p-eggplant').removeClass('p-show');
                  });
                  $('.e-wink').mouseenter(function() {
                      $('.p-wink').addClass('p-show');
                    });

                  $('.e-wink').mouseleave(function() {
                      $('.p-wink').removeClass('p-show');
                });


              $('.e-horn').mouseenter(function() {
                  $('.p-horn').addClass('p-show');
                });

              $('.e-horn').mouseleave(function() {
                  $('.p-horn').removeClass('p-show');
            });

                    

  });
