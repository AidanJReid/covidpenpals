//leCalculate calculates the price using if else if statements
function leCalculate() {
	var type = document.getElementById("type").value;
	var code = document.forms["leForm"]["code"].value;
	var price;//variable to store the price which will be used below to print the price to the element of id "total"

	//calculate price when valid discount code has been entered
	if (code == "GIFT" && type == "Gift Account") {
		price = ("€" + 10 * 0.6);
	} else if (code == "GIFT" && type == "Standard") {
		price = ("Free Account");
	} else if (code == "GIFT" && type == "Premium") {
		price = ("€5.99");
		//calculate price without valid discount code
	} else if (code != "GIFT" && type == "Gift Account") {
		price = ("€10");
	} else if (code != "GIFT" && type == "Standard") {
		price = ("Free Account");
	} else if (code != "GIFT" && type == "Premium") {
		price = ("€5.99");
		//prompt the user to enter info
	} else {
		alert("Please select account type");
	}
	//print the result, stored in the "price" variable to the element of name "total"
	document.getElementById("total").value = price;
}



