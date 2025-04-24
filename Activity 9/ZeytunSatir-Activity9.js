$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {

		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
				
		var caption = $(this).attr("title");
		$("#caption").text(caption);

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	

	$("#image_list a").click(function(evt) {
		// fade out the image and caption
		$('#image').fadeOut(0, function() {
			// fade in the new image and caption
			$("#caption").text($(evt.target).attr("title")).fadeIn(3000);
			$(this).attr("src", $(evt.target).attr("href")).fadeIn(2000);
			
		});
	});

	$("li:first-child a").focus();

}); // end ready