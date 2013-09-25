// Globaly declares all variables
var link1 = document.getElementById("agreeLink1"),
	link1_clicked_alert = document.getElementById("link1clicked");
	link2 = document.getElementById("agreeLink2"),
	link2_clicked_alert = document.getElementById("link2clicked");
	link1_clicked = false,
	link2_clicked = false,
	btnContinue = document.getElementById("submitAgreement"),
	agreeBox = document.getElementById("agreeScroll");
	rad_agree = document.getElementById("agree");
	rad_notagree = document.getElementById("notagree");
	var continue_err = document.getElementById("continue_err");

// Checks if link 1 is clicked	
$(link1).click(function() {
	link1_clicked = true;
	link1_clicked_alert.innerHTML = "*Viewed*";
});

// Checks if link 2 is clicked
$(link2).click(function() {
	link2_clicked = true;
	link2_clicked_alert.innerHTML = "*Viewed*";
});

// Continue is only clickable if all conditions are met
$(btnContinue).click(function() {
	if (link1_clicked == true && link2_clicked == true && (rad_agree.checked == true || rad_notagree.checked == true))
	{
		if (rad_agree.checked == true)
		{
			alert("Thank you for agreeing to our terms and conditions!");
		}
		
		if (rad_notagree.checked == true)
		{
			alert("You must agree before you continue.");
		}
		
		continue_err.innerHTML = "";
	}
	else
	{
		continue_err.innerHTML = "*You must view both documents, and choose to accept or decline the terms and conditions.*";
	}
});

// Checks if terms and conditions have been fully scrolled
$(agreeBox).scroll(function() {
/*console.log("scrollTop = " + this.scrollTop);
console.log("scrollHeight = " + this.scrollHeight);
console.log("offsetHeight = " + this.offsetHeight);

scrollHeight is the entire height of the context within the scroll box. 
scrollTop is the location of top of the viewable area in relation to the scrollHeight.
offsetHeight is the height of the viewable area.
*/
    if (this.scrollTop == (this.scrollHeight - this.offsetHeight)) {
		rad_agree.disabled = false;
		rad_notagree.disabled = false;
    }
});
