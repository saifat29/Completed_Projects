$(document).ready(function() {
		
	/************RANDOM BG*************/
	var index = 0;
	var images = ['./css/images/blurbg1.jpg','./css/images/blurbg2.jpg','./css/images/blurbg3.jpg','./css/images/blurbg4.jpg','./css/images/blurbg5.jpg','./css/images/blurbg6.jpg','./css/images/blurbg7.jpg','./css/images/blurbg8.jpg',];

	index = Math.floor((Math.random() * 7) + 0);
	var current = images[index];
	$('#blurbg').css({'background':'url("'+current+'") no-repeat', 'background-size':'cover'});

	/**********************************/
});