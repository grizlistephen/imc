/*
    form.js
*/

window.onload=function(){
	var elm = document.getElementById("cancel");
	elm.addEventListener('click', function(){ history.back(); }, false);
	
	elm = document.getElementById("course_application");
	elm.addEventListener('submit', validate, false);

	var tags = document.getElementsByTagName("textarea");
	for(var i = 0; i < tags.length; i++){
		tags[i].value="";
		tags[i]['onfocus']=function(){ 
			this.focus();
			this.select();
			};
	}
	tags = document.getElementsByTagName("input");
	for(var i = 0; i < tags.length; i++){
		if (tags[i].type == "radio"){
			tags[i]['onchange']=checkOption;
		} else if (tags[i].type == "email"){
			tags[i]['onchange']=matchEmails;
		}
	}

	
/*	$(document).ready(function () {
    	$('course_application').h5Validate();
	});
*/	
	
};

function checkOption(){
	if (this.name == "UnderStandEnglish"){
		toggleRequired(document.getElementById("OtherLanguage"), this.value, "No");
	} else if (this.name == "PreviousCoursesQ1"){
		toggleRequired(document.getElementById("PreviousCoursesText"), this.value, "Yes");
	} else if (this.name == "OtherTechniquesQ2"){
		toggleRequired(document.getElementById("OtherTechniquesText"), this.value, "Yes");
	} else if (this.name == "GoodHealthQ3"){
		toggleRequired(document.getElementById("GoodHealthText"), this.value, "No");
	} else if (this.name == "MedicalTreatmentQ4"){
		toggleRequired(document.getElementById("MedicalTreatmentText"), this.value, "Yes");
	} else if (this.name == "FoodAllergiesQ5"){
		toggleRequired(document.getElementById("FoodAllergiesText"), this.value, "Yes");
	} 
}

function toggleRequired(elm, value, option /* "Yes" or "No" */){
	elm.removeAttribute("required");
	if (value == option){
		elm.setAttribute("required", true);
	} 
}

function matchEmails(e){
	//document.getElementById("emailErrorDisplay").className="hide";
	if (document.getElementById("Email").value == document.getElementById("ConfirmEmail").value){
		document.getElementById("emailErrorDisplay").className="hide";
	} else {
		document.getElementById("emailErrorDisplay").className="show";
	}	
}

function validate(e){
	var hasErrors = false;
	/*e = e || window.event;
	var elm = e.target || e.srcElement;
	var type = e.type;*/
	hasErrors = (document.getElementById("Email").value != document.getElementById("ConfirmEmail").value);
		
	if (hasErrors) e.preventdefault();
}