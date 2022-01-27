var ok=0;
function checkName(){
	var name = $("#name").val();
	var str= /^[a-zA-Z]+$/;
	if(!name.match(str) || name==""){
  		$("#name").css({"border":"1px solid red"});
  		$("#name_error").text("Not a valid name !");
		$("#name").css({"margin-top":"10px"});
		/*alert("Not a valid name !!");*/
 	}
	else{
  		$("#name").css({"border":"1px solid grey"});
		$("#name_error").text(" ");
		$("#name").css({"margin-top":"0px"});
		ok++;
	}
}
function checkPass(){
	var password = $("#password").val();
	if(password=="" || password.length<8||!(password.includes("@") || password.includes("#") || password.includes("&") || password.includes("&"))){
  		$("#password").css({"border":"1px solid red"});
		$("#pass_error").text("Enter password of atleast 8 character length and a special character");
		$("#password").css({"margin-top":"10px"});
	}
	else{
  		$("#password").css({"border":"1px solid grey"});
		$("#pass_error").text(" ");
		$("#password").css({"margin-top":"0px"});
		ok++;
	}
}
function checkRepass(){
	var cpassword=$("#cpassword").val();
 	if(cpassword==""){
		$("#cpassword").css({"border":"1px solid red"});
		$("#repass_error").text("Cannot be Empty ");
 		$("#cpassword").css({"margin-top":"15px"});
 	}
	else if(cpassword!=$("#password").val()){
		$("#cpassword").css({"border":"1px solid red"});
		$("#repass_error").text("Passwords dont match");
 		$("#cpassword").css({"margin-top":"5px"});
	}
	else{
		$("#cpassword").css({"border":"1px solid grey"});
  		$("#cpassword").css({"margin-top":"0px"});
		$("#repass_error").text(" ");
		ok++;
 	}
}
function checkAddress(){
	var address=$("#address").val();
 	if(address==""){
  		$("#address").css({"border":"1px solid red"});
 		$("#address").css({"margin-top":"15px"});
		$("#address_error").text("Address Field cannot be empty");
 	}
	else{
 		$("#address").css({"border":"1px solid grey"});
  		$("#address").css({"margin-top":"0px"});
		$("#address_error").text(" ");
		ok++;
 	}
}
function checkemail(){
	var email=$("#email").val();
	var mail = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/
	if(!mail.test(email)){
		$("#email").css({"border":"1px solid red"});
 		$("#email").css({"margin-top":"5px"});
		$("#email_error").text("Enter valid email");
	}
	else{
		$("#email").css({"border":"1px solid grey"});
		$("#email_error").text(" ");
		ok++;
	}
}
function checkphone(){
	var phone=$("#phone").val();
	var nom=/^\d{10}$/
 	if(!nom.test(phone) || phone=="" || (phone.length)<10 ||(phone.length)>10){
  		$("#phone").css({"border":"1px solid red"});
 		$("#phone").css({"margin-top":"5px"});
		$("#phone_error").text(" Enter 10 digit number ");
 	}
	else{
 		$("#phone").css({"border":"1px solid grey"});
  		$("#phone").css({"margin-top":"0px"});
		$("#phone_error").text(" ");
		ok++;
 	}	
}
$(document).ready(function(){
	$("#display").click(function(){
    		$("form").toggle();
 });
$("#register").click(function(){
	var name = $("#name").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var cpassword = $("#cpassword").val();
	var address = $("#address").val();
	var phone = $("#phone").val();
	var myfile = $("#myfile").val();
	if(ok!=6){
		alert("Make sure all fields have valid inputs");
	}
	else if (!(document.getElementById("male").checked || document.getElementById("female").checked||document.getElementById("other").checked)){
		alert("Choose your gender please!");
		return false;
	}
	else if(myfile==""){
		alert("Please upload photo");
		return false;
	}
	else{
		alert("Form submitted");
		$("#myform")[0].reset();
	}
});
});