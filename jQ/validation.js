$(document).ready(function()
	{
		$("#register").click(function()
			{
				var name = $("#name").val();
				var email = $("#email").val();
				var password = $("#password").val();
				var cpassword = $("#cpassword").val();
				var address = $("#address").val();
				var phone = $("#phone").val();
				var myfile = $("#myfile").val();
				if (name =="")
					{
						alert("Make sure to fill name..!");
						return false;
					} 
				else if (!(document.getElementById("male").checked || document.getElementById("female").checked||document.getElementById("other").checked)) 
					{
                        			alert("Choose your gender please!");
						return false;
					}
				else if(password==""||password.length<8||!(password.includes("@") || password.includes("#") || password.includes("&") || password.includes("&")))
				 	{
						alert("Password should be atleast 8 character in length with one special character!!");
						return false;
					}
				else if (!(password).match(cpassword)) 
					{
						alert("Your passwords don't match. Try again?");
						return false;
					}
				else if (address=="")
					{
						alert("Address field cannot be empty");
						return false;
					}
				else if (email=="")
					{
						alert("Email Please!");
						return false;
					}
				else if ((phone.length)<10 ||(phone.length)>10) 
					{
						alert("Make sure to enter a 10 digit mobile number!");
						return false;
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
		