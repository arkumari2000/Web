function openForm() {
    document.getElementById("popupForm").style.display="block";
    document.getElementById("overlay").style.display = "block";
}
      
function closeForm() {
    document.getElementById("popupForm").style.display="none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("regForm").style.display="none";
}
function openregistrationForm(){
	 document.getElementById("regForm").style.display="block";
	 document.getElementById("overlay").style.display = "block";
}
function validation(){
	var name= document.uform.fullname.value;
	var email= document.uform.email.value;
	var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phone= document.uform.phone.value;
	var password1= document.uform.psw1.value;
	var password2= document.uform.psw2.value;

	if(name==""){
		alert("Name is mendatory");
		document.uform.fullname.focus();
		return false;
	}else if(!phone.match(/^\d{10}$/)){
		alert("Enter a valid Phone number");
		document.uform.phone.focus();
		return false;
	}else if(!email.match(mailformat)){
		alert("Enter a valid email");
		document.uform.email.focus();
		return false;
	}else if(password1==""){
		alert("Please set password");
		document.uform.psw1.focus();
		return false;
	}else if(password1!=password2){
		alert("Password don't match");
		document.uform.psw2.focus();
		return false;
	}else{
		alert("Registration Successfull");
		return true;
	}
}
$('.carousel').carousel({
  interval: 2000
})