$(document).ready(function() {
  CallQuote();

  $('#quotebtn').click(function() {
    CallQuote();
  });

  function CallQuote() {
    var url = "https://cors.now.sh/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    $.getJSON(url, function(data) {
      var quote = "";
      
      if (data["quoteText"] !== "" && data["quoteText"] !== "undefined") {
        quote += data["quoteText"];
      } else {
        quote += data["quoteText"];
      }

      var author = "";
      if (data["quoteAuthor"] !== "" && data["quoteAuthor"] !== "undefined") {
        author += '<p id="authorpara"><em>-- ' + data["quoteAuthor"] + '</em></p>';
      } else {
        author += '<p id="authorpara"><em>-- Anonymous</em></p>';
      }

      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#quotepara').text(quote);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#authorpara').html(author);
        });

      $('#tweetbtn').click(function() {
        $('#tweetbtn').attr('href', 'https://twitter.com/intent/tweet?text=' + data["quoteText"] + ' -- ' + data["quoteAuthor"] + '');
      });
    });
  }

});