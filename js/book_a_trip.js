var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display='none';
    } else {
        document.getElementById("prevBtn").style.display='inline';
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";

    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        $('#bookingModal').modal('show');
        
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}


function validateForm() {
    // This function deals with validation of the form fields
    var t = document.getElementById("phoneBook").value;
    var z = document.getElementById("pax_number").value;
    var e = document.getElementById("InputEmail").value;
    const re = /\S+@\S+\.\S+/;
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByClassName("inputValidator");
    y2 = x[currentTab].getElementsByClassName("selectValidator");

    // and set the current valid status to false
    if (t.match(/^\(?([0-9]{3})\)?[-]?([0-9]{2})[-]?([0-9]{6})$/g)) { valid = true; } else {
        
        valid = false;
    }
    if (re.test(e) != true) {
        
        valid = false;
    }

    if (z != 0 && z != 1 && z != 2 && z != 3 && z != 4 && z != 5) {
        
        valid = false;
    }
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if ((y[i].value == "") && (y[i].id != "yesbaggage") && (y[i].id != "return_trip")) {
            
            valid = false;
        }
    }
    for (i = 0; i < y2.length; i++) {
        // If a field is empty...
        if (y2[i].value == "") {
            
            valid = false;
        }
    }

    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status

}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

function disableroundtrip() {
    var trips = document.getElementById('roundtrip').checked;
    var returntrip = document.getElementById('return_trip');

    if (trips) {
        returntrip.disabled = false;
        returntrip.classList.add("was-validated");
        x.setAttribute('required','true');
        valid = false;
    } else {
        returntrip.disabled = true;

    }
    return valid;
}

function baggageHandler() {
    var x = document.getElementById("yesbaggage");
    var y = document.getElementById("excessbaggage");

    if (y.checked==true) {
        x.style.display = 'inline';
        x.setAttribute('required','true');
        x.classList.add('was-validated');
    } else x.style.display = 'none';

}
$('#dob').datepicker({
    minDate: "-100y",
    maxDate: "-18y",
    maxViewMode: 3,
    autoclose: true,
    todayHighlight: true
});

$('#departure').datepicker({
    startDate: new Date(),
    autoclose: true,
});


$('#return_trip').datepicker({
    startDate: new Date(),
    autoclose: true,
});
