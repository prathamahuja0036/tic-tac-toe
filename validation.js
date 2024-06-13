function validationform() {
    document.getElementById("errormessages").innerHTML = "";
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var mobile = document.getElementById("mobile").value;
    if (name.trim() == "") {
        displayerrormessage("name is required");
    }
    else if (name.trim() == "$" || name.trim() == "@") {
        displayerrormessage("special characters not allowed");
    }
    if (age.trim() == "") {
        displayerrormessage("age is required");
    }
    else if (age.trim() < 18) {
        displayerrormessage("age is less then 18");
    }
    if (mobile.trim() == "") {

        displayerrormessage("mobile number is required");
    }
    else if(mobile.length<10)
    {
        displayerrormessage("Phone number must be 10 digits.");
    }
}

function displayerrormessage(message) {
    var errormessagediv = document.getElementById("errormessages");
    var errormessage = document.createElement("p");
    errormessage.className = "error-message";
    errormessage.appendChild(document.createTextNode(message));
    errormessagediv.appendChild(errormessage);
}


