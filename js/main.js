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
	var selectvalidator= document.getElementsByClassName('selectValidator');
	var inputerror= document.getElementsByClassName('error');
	$("[data-toggle='tooltip']").tooltip('dispose');
	if(pass.value.match(confirmpass.value)){	
	valid=true;
	}
	else { 
		valid=false;
	$("[data-toggle='tooltip']").tooltip('show');
	}

	if(pass.value!="" && confirmpass.value!="")
		{valid=true;}
	else{
		document.getElementById('errorP').removeAttribute('hidden');
		document.getElementById('errorCO').removeAttribute('hidden');
		valid=false;
	}

	for (i=0; i<inputvalidator.length;i++){
		if(inputvalidator[i].value==""){
			inputvalidator[i].classList.add("invalid");
			inputerror[i].removeAttribute('hidden');
			valid=false;}
		else{
			inputvalidator[i].classList.add('success');
			valid=true;}
	};

	for(j=0; j<selectvalidator.length;j++){
		if(selectvalidator[j].value==""){
			selectvalidator[j].classList.add('invalid');
			inputerror[j].removeAttribute('hidden');
			valid=false;
		}
		else {
			selectvalidator[j].classList.add('success');
			valid=true;}
	}
	if(valid==false) {
		$('#submitModal').modal('hide');
		$('#errorModal').modal('show');
	}
	else {
		$('#submitModal').modal('show');
		$('#errorModal').modal('hide');
	}

}



// end of signup form
