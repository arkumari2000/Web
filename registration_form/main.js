function clickfunction(){
	var x=document.getElementById("collapse-button");
	if (x.style.display === "none") {
	    x.style.display = "block";
	}else {
	    x.style.display = "none";
	}
}
function validation(){
	var name= document.uform.uname.value;
	var email= document.uform.uemail.value;
	var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phone= document.uform.uphone.value;
	var password1= document.uform.upassword1.value;
	var password2= document.uform.upassword2.value;

	if(name==""){
		alert("Name is mendatory");
		document.uform.uname.focus();
		return false;
	}else if(!phone.match(/^\d{10}$/)){
		alert("Enter a valid Phone number");
		document.uform.uphone.focus();
		return false;
	}else if(!email.match(mailformat)){
		alert("Enter a valid email");
		document.uform.uemail.focus();
		return false;
	}else if(password1==""){
		alert("Please set password");
		document.uform.upassword1.focus();
		return false;
	}else if(password1!=password2){
		alert("Password don't match");
		document.uform.upassword2.focus();
		return false;
	}else{
		alert("Validation Successfull");
		return true;
	}
}
