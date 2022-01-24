function checkName()
	{
	var name = $("#name").val();
	if(name=="")
		{
  			$("#name").css({"border":"1px solid red"});
  			/*$("#name_error").text("First Name Must Be Filled!");*/
			$("#name").css({"margin-top":"15px"});
			alert("Please fill the name field!!");
 		}
	else
 		{
  			$("#name").css({"border":"1px solid grey"});
			$("#name").css({"margin-top":"0px"});
		}
	}
function checkPass()
	{
		var password = $("#password").val();
		if(password=="" || password.length<8||!(password.includes("@") || password.includes("#") || password.includes("&") || password.includes("&")))
		{
  			$("#password").css({"border":"1px solid red"});
			$("#password").css({"margin-top":"15px"});
			alert("Enter password of atleast 8 character length and a special character");
 		}
	else
 		{
  			$("#password").css({"border":"1px solid grey"});
			$("#password").css({"margin-top":"0px"});
		}
	}
function checkRepass()
	{
 		var cpassword=$("#cpassword").val();
 		if(cpassword=="")
 			{
  				$("#cpassword").css({"border":"1px solid red"});
 				$("#cpassword").css({"margin-top":"15px"});
				alert("Re-enter password");
 			}
		else if(cpassword!=$("#password").val())
			{
				$("#cpassword").css({"border":"1px solid red"});
 				$("#cpassword").css({"margin-top":"15px"});
				alert("Passwords dont match");
			}
		 else
 			{
 				$("#cpassword").css({"border":"1px solid grey"});
  				$("#cpassword").css({"margin-top":"0px"});
 			}
	}
function checkAddress()
	{
		var address=$("#address").val();
 		if(address=="")
 			{
  				$("#address").css({"border":"1px solid red"});
 				$("#address").css({"margin-top":"15px"});
				alert("Enter Address Please");
 			}
		 else
 			{
 				$("#address").css({"border":"1px solid grey"});
  				$("#address").css({"margin-top":"0px"});
 			}
	}
function checkemail()
	{
		var email=$("#email").val();
 		if(email=="")
 			{
  				$("#email").css({"border":"1px solid red"});
 				$("#address").css({"margin-top":"15px"});
				alert("Enter email Please");
 			}
		 else
 			{
 				$("#email").css({"border":"1px solid grey"});
  				$("#email").css({"margin-top":"0px"});
 			}	
	}
function checkphone()
	{
		var phone=$("#phone").val();
 		if(phone=="" || (phone.length)<10 ||(phone.length)>10) 
 			{
  				$("#phone").css({"border":"1px solid red"});
 				$("#phone").css({"margin-top":"15px"});
				alert("Enter a 10 digit phone number");
 			}
		 else
 			{
 				$("#phone").css({"border":"1px solid grey"});
  				$("#phone").css({"margin-top":"0px"});
 			}	
	}
$(document).ready(function()
	{
 	 	$("#hide").click(function()
			{
    				$("form").hide();
  	});
  		$("#show").click(function()
			{
   				 $("form").show();
	});
$("#register").click(function()
	{
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var cpassword = $("#cpassword").val();
		var address = $("#address").val();
		var phone = $("#phone").val();
		var myfile = $("#myfile").val();
		if(name=="" || email=="" || password=="" ||cpassword=="" ||address=="" ||phone=="" )
			{
				alert("No field can be left empty");
			}
		else if(myfile=="")
			{
				alert("Please upload photo");
				return false;
			}
		else 
			{
				alert("Form submitted");
				$("#myform")[0].reset();
			}
		});
	});