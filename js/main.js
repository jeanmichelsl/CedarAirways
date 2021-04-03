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
	var valid;
var formSubmit= document.getElementById('form');
var password= document.getElementById('password');
var confirmPassword= document.getElementById('confirmPassword');
var invalidFeedback = document.getElementById('invalidConfirmPassword');

confirmPassword.onchange= function(){
	
	if ((password.value == confirmPassword.value) &&(password.value!="") && (confirmPassword.value!=""))
	{
		confirmPassword.classList.add('is-valid');
		confirmPassword.classList.remove('is-invalid');
		valid=true;
	}
	else {
		confirmPassword.classList.add('is-invalid');
		confirmPassword.classList.remove('is-valid');	
	$("[id='password']").tooltip('show');
		valid=false;
}
		return valid;
	}

	document.getElementsByClassName('inputValidator').onchange= function(){
		for(i=0;i<inputValidator.length;i++)
		{
			if (inputValidator[i].classList.contains('is-valid'))
				valid=true;
			if(inputValidator[i].classList.contains('is-invalid'))
				valid=false;
		}
		return valid;
	}
	document.getElementsByClassName('selectValidator').onchange= function(){
		for(i=0;i<selectValidator.length;i++)
		{
			if (selectValidator[i].classList.contains('is-valid'))
				valid=true;
			if(selectValidator[i].classList.contains('is-invalid'))
				valid=false;
		}
		return valid;
	}

document.getElementById('signup').onclick=function(){
	if(valid==true){
		$("#submitModal").modal('show');
	}
	if(valid==false){
		$("#errorModal").modal('show');

	}
}


// end of signup form
