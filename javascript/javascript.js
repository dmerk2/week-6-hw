	//when window loads ... function will happen
	window.onload = function(){  

	//When I click this button a function will happen
	$('.band').on('click', function(){

	//variable queryUrl for giphy
	var queryUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag&limit=10";

		//requesting information giphy
		$.ajax({
			url: queryUrl,
			method: 'GET'
		})
		//recieving information from giphy
		.done(function(response) {

			//returns the response from the website
			var results = response.data;
			
			//img calls for the set variable
			var musicians = $("<img>");
			var imageUrl = response.data.image_original_url; 

			//takes var musicians and adds attr src and imageUrl
			musicians.attr('src', imageUrl);
			musicians.attr('alt', 'musicians');

			//prepend puts the images in the beginning
			$("#images").append(musicians);
			
			//empty gifs button
			$('#clearButton').click(function(event){
				$('img').remove()

			// //loops for user to submit musicians 
			// for(i=0; i< results.length; i++){
			// 	var musicians=$('<button>');
			// 	musicians.text(movies[i]);
			// 	musicians.appendTo('#musicians')
			// };

			

			// //whatever musician the user submits will appear
			// $('#submitButton').on('click', function(){
			// 	var input=$('#submitButton').val();
			// 	musicians.push(input);
			// 	renderButtons();
			});

		});

			return false

			});
		};
	


