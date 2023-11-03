let nameId = document.getElementById('nameId');
let emailId = document.getElementById('emailId'); 
let passId = document.getElementById('passId');
let pass2Id = document.getElementById('pass2Id');
let dateId = document.getElementById('dateId');
let msgId = document.getElementById('msgId');										

// let's save message ids into variables
let nameMsg = document.getElementById('nameMsg');
let emailMsg = document.getElementById('emailMsg');
let pswdMsg = document.getElementById('pswdMsg');
let pswd2Msg = document.getElementById('pswd2Msg');
let dateMsg = document.getElementById('dateMsg');
let errormsg = document.getElementById('errormsg');

// store id for images/icons into variables
let nameIcon = document.getElementById('nameIcon');
let emailIcon = document.getElementById('emailIcon');
let pswdIcon = document.getElementById('pswdIcon');
let pswd2Icon = document.getElementById('pswd2Icon');

// variable for button
let submitBtn = document.getElementById('submitBtn');

let yourName = document.getElementById('yourName');
function Name(){
 	if (nameId.value.length == 0) {
 		nameIcon.innerHTML = "<img src='img/cross.png'>";
		nameMsg.innerHTML = "<img src='img/icon-warning.png'> Name field should not be left empty";
		return false;
	}
	if (nameId.value.length <= 2) {
		nameIcon.innerHTML = "<img src='img/cross.png'>";
		nameMsg.innerHTML = "<img src='img/icon-warning.png'> Name too short— please check";
		return false;
	}
		nameMsg.innerHTML = "";
		nameIcon.innerHTML = "<img src='img/tick.png'>";
		return true;
}	

	function Email(){
		if (emailId.value.length == 0){
		emailMsg.innerHTML = '<img src="img/icon-warning.png"> Email field should not be left empty';
		emailIcon.innerHTML = '<img src="img/cross.png">';
		
			return false;
		}

		if(!emailId.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
			emailMsg.innerHTML = '<img src="img/icon-warning.png"> Invalid Email';
			emailIcon.innerHTML = '<img src="img/cross.png">'
			return false;
		}
			
			emailMsg.innerHTML = '';
			emailIcon.innerHTML = '<img src="img/tick.png">'
			return true;
	}

	function Pass(){
		if (passId.value.length == 0) {
			pswdMsg.innerHTML = '<img src="img/icon-warning.png"> Password field should not be left empty';
			pswdIcon.innerHTML = '<img src="img/cross.png">'
			return false;
		}

		if (passId.value.length <= 8) {
			pswdMsg.innerHTML = '<img src="img/icon-warning.png"> Should not be less than 8 characters';
			pswdIcon.innerHTML = '<img src="img/cross.png">'
			return false;
		}

		pswdMsg.innerHTML = '';
			pswdIcon.innerHTML = '<img src="img/tick.png">'
			return true;
	}

	function Pass2(){
		if(pass2Id.value.length === 0){
			pswd2Msg.innerHTML = '<img src="img/icon-warning.png"> Confirm Password should not be left empty';
			pswd2Icon.innerHTML = '<img src="img/cross.png">'
			return false;
		}

		if (pass2Id.value !== passId.value || passId.value !== pass2Id.value) {
			pswd2Msg.innerHTML = '<img src="img/icon-warning.png"> Passwords does not match';
			pswd2Icon.innerHTML = '<img src="img/cross.png">'
			return false;
		}

			pswd2Msg.innerHTML = '';
			pswd2Icon.innerHTML = '<img src="img/tick.png">'
			return true;
	}

	function Age(){

		if(dateId.value === '' || dateId.value === null){
			dateMsg.innerHTML = '<img src="img/icon-warning.png"> choose your birth date please';
			return false;
		} else{

		let dateOfBirth = new Date(dateId.value);

		let currentDate = new Date().getUTCFullYear();
		let yearOfBirth = dateOfBirth.getUTCFullYear();

		const age = currentDate - yearOfBirth;
		console.log(age)
			if(age < 18){
				dateMsg.innerHTML = '<img src="img/icon-warning.png"> All members should be 18years and above';
				return false;
			}


			dateMsg.innerHTML = '';
			return true;
		}
	}

	function Message(){
		let requiredNumber = 140;
		let numberLeft = requiredNumber - msgId.value.length;
		
		if(numberLeft > 0){
		errorMsg.innerHTML = numberLeft + ' characters left';
		return false;
	}
		if(msgId.value.length === requiredNumber){
				errorMsg.innerHTML = 'maximum number of characters reached';
			return true;
			}


		errorMsg.innerHTML = '';
		return true;
	}

submitBtn.addEventListener('click', function(e){
	
	e.preventDefault();



	if(Name() && Email() && Pass() && Pass2() && Age() && Message()){
			document.location.href = 'notify.html';
			

			return true;
	}
		
		return false;

})