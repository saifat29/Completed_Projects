$(document).ready(function() {
  getLocation();
  function getLocation() {
      if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(getCoordinates);
      } else { 
          alert("Geolocation is not supported by this browser.");
      }
  }

  function getCoordinates(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      weatherapi(lat, long);
  }
  function weatherapi(lat, long) {
    var apikey = "49c6bf258c1d7c2a11692c6719a385c2";
    var url = "https://cors.now.sh/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID="+apikey+"";
    
    $.getJSON(url, function(data) {
      var place = data.name;
      
      var celtemp = (Math.round((data.main.temp) - 273) * 100) / 100;
      var fahrtemp = (Math.round((9 / 5) * (data.main.temp - 273) + 32) * 100) / 100;
      
      $('#location').html(data.name);
      $('#country').html("<span>,&nbsp;</span>" + data.sys.country);
      $('#temp').html(celtemp + "<sup>&deg;C</sup>");
      
      $('#celbtn').click(function() {
        $('#temp').html(celtemp + "<sup>&deg;C</sup>");
      });
      
      $('#fahrbtn').click(function() {
        $('#temp').html(fahrtemp + "<sup>&deg;F</sup>");
      });
      
      $('#description').text(data.weather[0].description);
      
      var weathericon = data.weather[0].icon;

      if(weathericon == "01d") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-day-800'></i></div>");
      } else if(weathericon == "01n") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-night-800'></i></div>");
      } else if(weathericon == "02d") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-day-801'></i></div>");
      } else if(weathericon == "02n") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-night-804'></i></div>");
      } else if(weathericon == "03d") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-804'></i></div>");
      } else if(weathericon == "03n") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-night-804'></i></div>");
      } else if(weathericon == "04d") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-day-802'></i></div>");
      } else if(weathericon == "04n") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-night-802'></i></div>");
      } else if(weathericon == "09d") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-day-520'></i></div>");
      } else if(weathericon == "09n") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-night-520'></i></div>");
      } else if(weathericon == "10d") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-day-520'></i></div>");
      } else if(weathericon == "10n") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-night-520'></i></div>");
      } else if(weathericon == "11d") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-day-200'></i></div>");
      } else if(weathericon == "11n") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-night-200'></i></div>");
      } else if(weathericon == "13d") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-day-600'></i></div>");
      } else if(weathericon == "13n") {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-night-600'></i></div>");
      } else {
        $('#icon').html("<div id='icon'><i class='wi wi-owm-711'></i></div>");
      }
      
    }); //end getJSON function
  } //end weatherapi function

}); //end document ready function