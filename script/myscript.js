$(document).ready(function() {
  
  /**********Random Quote Script**********/

  function myFunction() {
    setInterval(quoteFunc, 5000);
  }

  myFunction();

  function quoteFunc() {
  var url = "https://cors.now.sh/http://api.forismatic.com/api/1.0/?method=getQuote&key=&format=jsonp&lang=en&jsonp=?";

  $.getJSON(url, function(data) {
    //alert(data["quoteText"].length);
    var quote = "";
    quote += '<p id="quote">' + data["quoteText"] + '</p>';

    var author = "";
    if (data["quoteAuthor"] !== "") {
      author += '<p id="author"><em>-- ' + data["quoteAuthor"] + '</em></p>';
    } else {
      author += '<p id="author"><em>-- Anonymous</em></p>';
    }
    
    $("#quote").replaceWith(quote);
    $("#author").replaceWith(author); 
  });
  }

  setInterval(quoteready, 5000);
  function quoteready() {
    $('#quotebox').css('display', 'block');
  }







  /**********Back to Top Button Script***********/
var pixelsScrolled = 100;

$(window).scroll(function() {
  if ( $(window).scrollTop() > pixelsScrolled ) {
    $('#back-to-top').fadeIn('slow');
  } else {
    $('#back-to-top').fadeOut('slow');
  }
});

$('#back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

  /*********Navigation Buttons Animation**********/


  /***********************************************/
  var images = ['./css/images/bg1.jpg','./css/images/bg2.png','./css/images/bg5.jpg','./css/images/bg6.jpg'];
  var index = 1;
  setInterval(function() {
  if (index >= images.length) index = 0;
  var current = images[index];
  $('#quotebox').css('background','url("' + current + '") no-repeat').fadeOut().fadeIn();
  index++;
}, 5000);


  /****************MODAL WINDOW FORK********************/
  /*
  $('#notaMember').click(function() {
    $('#loginModal').modal('hide');
    $('#signupModal').modal('show');
  });

  $('#alreadyaMember').click(function() {
    $('#signupModal').modal('hide');
    $('#loginModal').modal('show');
  });
  */

  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  $(".button-collapse").sideNav();
  
  /*****************************************************/


  /*************Navbar dynamic color change*************/
  $(window).scroll(function() {
  if($(window).scrollTop() > pixelsScrolled) {
    $('nav').css('background-color', '#31343d');
  }
  else {
    $('nav').css('background', 'transparent');
  }
});


  /*****************************************************/

 });
