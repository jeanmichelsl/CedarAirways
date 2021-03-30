//Get the button:
mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//JS for signup form
function validate(){
	var valid=true;
	var inputvalidator= document.getElementsByClassName('inputValidator');
	var pass= document.getElementById('password');
	var confirmpass= document.getElementById('confirmPassword');

	if(pass.value.match(confirmpass.value) || pass.value!="" || confirmpass.value!=""){
	
	valid=true;

	}
	else { valid=false;}

	for (i=0; i<inputvalidator.length;i++){
		if(inputvalidator[i].value==""){
			inputvalidator[i].className+="invalid";
			valid=false;}
		else{valid=true;}
	};

	if(valid==false) {
		$('#submitModal').modal('hide');
		$('#confirmpass').tooltip('show');
	}
	else {
		$('#submitModal').modal('show');
	}

}


// end of signup form
