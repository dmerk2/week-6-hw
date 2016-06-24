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
		console.log(userInput)
	});

	function renderButtons() {
			var button = $('<button>');
			button.text(musiciansList[musiciansList.length-1]);
			button.addClass('band')
			$('.container').append(button);
			
			return false;
	};

	//When I click this button a function will happen
	$(document).on('click', '.band', function() {


  var p = $(this).text();
	//variable queryUrl for giphy
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + p + "singers+bands&api_key=dc6zaTOxFJmzC&limit=10";

		//requesting information giphy
		$.ajax({
			url: queryUrl,
			method: 'GET'
		})//recieving information from giphy
		.done(function(response) {		
			//returns the response from the website
			var results = response.data;

    for(var i = 0; i < response.data.length; i++){
        var imageUrl = response.data[i].images.fixed_height.url; 
        var musicians = $('<img>');         

        //takes var musicians and adds attr src and imageUrl
        musicians.attr('src', imageUrl);
        musicians.attr('alt', 'musicians');

        //prepend puts the images in the beginning
        $("#images").prepend(musicians);
        console.log(results)

			var state = $(this).attr('data-state');
      if ( state == 'still'){
          $(this).attr('src', $(this).data('animate'));
          $(this).attr('data-state', 'animate');
      }else{
          $(this).attr('src', $(this).data('still'));
          $(this).attr('data-state', 'still');
      }        
		}	
				console.log(this)
						
			// empty gifs button
			$('#clearButton').click(function(event){
				$('#images').empty()
				
			});
		});
	});
};