"use strict";


function validateEmail() {
	let email = document.getElementById("email-address").value;

	let regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

	if (regx.test(email)) {
		return true;
	} else {
		document.getElementById("alert").style.visibility = "visible";
		return false;
	}
}

