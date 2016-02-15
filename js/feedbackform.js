// This code and the comments are adapted from code/comments written 
// by Michael Scotson (2014), for his Project 1 Part B submission

// This function runs upon page load.
window.onload = feedbacksubmit;


function feedbacksubmit () {
	// This javascript is quite simple and is just used to display a message 
	// when the submit button is pressed.
	
	$( "form" ).submit(function(event) {
		//Disables the default refresh action of the submit button
		event.preventDefault();
		$("#feedback_submit_success").html("Your feedback has been sent! Thank you very much!");
	});
}