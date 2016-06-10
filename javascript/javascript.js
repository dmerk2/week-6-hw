	//when window loads ... function will happen
	window.onload = function(){  

	var musiciansList = [];
	var inputBox = $('#submitBox')

	//whatever musician the user submits will appear
	$('#submitButton').on('click', function(){
		var input=$('#submitButton');
		var userInput=inputBox.val();
		musiciansList.push(userInput);
		renderButtons();
		console.log(input)
	});

	function renderButtons() {
			var button = $('<button>');
			button.text(musiciansList[musiciansList.length-1]);
			button.addClass('band')
			$('.container').append(button);
			
	};

	//When I click this button a function will happen
	$(document).on('click', '.band', function() {

	//variable queryUrl for giphy
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=music&api_key=dc6zaTOxFJmzC&limit=10";
	console.log(queryUrl)
		//requesting information giphy
		$.ajax({
			url: queryUrl,
			method: 'GET'
		})
		//recieving information from giphy
		.done(function(response) {
		
			//returns the response from the website
			var results = response.data;
			console.log(response.data);
			
			//img calls for the set variable
			var musicians = $("<img>");
			var imageUrl = response.data.image_original_url; 
			console.log(img)

			//takes var musicians and adds attr src and imageUrl
			musicians.attr('src', imageUrl);
			musicians.attr('alt', 'musicians');

			//prepend puts the images in the beginning
			$("#images").append(musiciansList);
			
			//empty gifs button
			$('#clearButton').click(function(event){
				$("img").remove()
				
			});
		});
	});
};
