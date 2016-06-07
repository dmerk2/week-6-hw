var animal = $(this).data('musicians');
var queryURL = "http://api.giphy.com/v1/gifs/search?q=musicians" + musicians + "&api_key=dc6zaTOxFJmzC&limit=10";

//When buttons is pushed ... happens
$<"#buttons">.on("click", function()){

	$.ajax({
    	url: queryURL;
        method: 'GET'
    })
    .done(function(response) {
    console.log(response)

    //sets variable imageUrl and gets the address for the image
    var imageURL=response.data.image_original_url;

    // <img> calls for the images and sets a variable
    var callImage=$("<img>");


};