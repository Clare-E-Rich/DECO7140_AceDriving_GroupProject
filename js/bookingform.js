// This code and the comments are adapted from code/comments written 
// by Michael Scotson (2014), for his Project 1 Part B submission

// This function runs upon page load.
window.onload = bookingchecksubmit;


function bookingchecksubmit () {
	// This is for validation of the booking form, so it's going to run upon the submit button
	// being pressed.
	
	$( "form" ).submit(function(event) {
		//Disables the default refresh action of the submit button
		event.preventDefault();
		
		// Gets the values of the required fields and assigns then to variables.
		var booking_firstname = $("#booking_firstname").val();	
		var booking_postcode = $("#booking_postcode").val();	
		var booking_email = $("#booking_email").val();	
		var booking_transmission = $("#booking_transmission").val();
		
		// This variable is set to false if a test (below) fails
		var all_passed = "True";
		
		// The following methods reset any of the error messages to blank
		// as they may have been modified on previous submit button presses. 
		// They start blank in the HTML too.
		$("#booking_firstname_error").html("");
		$("#booking_postcode_error").html("");
		$("#booking_email_error").html("");		
		$("#booking_transmission_error").html("");
		$("#booking_error").html("");
		$("#booking_submit_success").html("");

		// The following if statements check if a value has been entered (and if it's valid) and if not,
		// it sets text to the error message fields.
		if ( booking_firstname === ''){
				$("#booking_firstname_error").html("Enter a name");;
				$("#booking_error").html("Please correct errors marked above in red");
				all_passed = "False";
				}
				
		if ( !($.isNumeric(booking_postcode))){
				$("#booking_postcode_error").html("Enter a valid postcode (numbers only)");;
				$("#booking_error").html("Please correct errors marked above in red");
				all_passed = "False";
				}
				
		if (booking_transmission === "select_transmission"){
				$("#booking_transmission_error").html("Select a transmission type");;
				$("#booking_error").html("Please correct errors marked above in red");
				all_passed = "False";
				}
				
		// This is to check emails, it uses a function from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
		// the regexemailcheck function is called and booking_email (assigned above) is passed in.
		//	This function returns True if the email is valid. False otherwise
		var passed = regexemailcheck(booking_email);
		// If the email is NOT (!) True (i.e. fails/False) error messages are created.
		// If the email passes (True) nothing extra happens here
		if (!(passed)){
			$("#booking_email_error").html("Enter a valid email address e.g. xxx@yyy.zz");
			$("#booking_error").html("Please correct errors marked above in red");
			all_passed = "False";
			}
		
			
		// If there is a Message, then the email is checked as a final check 
		if (all_passed === "True"){
		$("#booking_submit_success").html("Thank you, we will contact you soon!");
		}
		});
		
	//This function takes an email address and then tests is again a regular expression. It's checking for email validity and returns a bool (True if valid, false otherwise).
	// Regular Expression from: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript

	function regexemailcheck(email){
	var retest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return retest.test(email);
	};

}	



		