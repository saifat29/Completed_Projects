$(document).ready(function() {

  $resultsList = $('#resultsList');

  $('#submitBtn').click(function() {

    var result = ["", "", "", "", "", "", "", "", "", ""];
    $($resultsList).empty();
    var query = $("#query").val();

    var url = "https://cors.now.sh/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + query + "&namespace=0&limit=20";
    $.getJSON(url, function(data) {
      console.log(data);

      for (var i = 0; i < data[1].length; i++) {
        result.push('<a href="' + data[3][i] + '" target="_blank"><li><div class="card animated slideInUp"><div class="card-title"><span>' + data[1][i] + '</span></div><div class="card-content"><p>' + data[2][i] + '</p></div><div class="card-action"></div></div></li></a>');
      }

      for (var j = 0; j < result.length; j++) {
        $resultsList.append(result[j]);
      }

    });
  });

  $('#query').keypress(function(e) {
    if (e.which == 13) {
      $('#submitBtn').click();
    }
  });

  function openRandomArticle() {
    window.open('https://en.wikipedia.org/wiki/Special:Random','_blank');
  }

  $('#randomBtn').click(function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random','_blank');
  }) ;

});
