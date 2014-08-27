/* BACKGROUND COLOR EFFECT */
function check(x)
{
document.bgColor=x;
}

/* PROGRESS_BAR VARIABLES FOR EACH FIELD VALIDATION */
progress_bar13=0;
progress_bar0=0;
progress_bar1=0;
progress_bar2=0;
progress_bar3=0;
progress_bar4=0;
progress_bar5=0;
progress_bar6=0;
progress_bar7=0;
progress_bar8=0;
progress_bar9=0;
progress_bar10=0;
progress_bar11=0;
progress_bar12=0;


/* GLOBAL VARIABLES TO STORE VALUE OF FORM INPUTS */
COUNTRIES_LIST="NULL";

/* CHECKING FOR USERNAME VALID OR NOT */
function userid_validation()
{
	var uid = document.registration.userid;
	var passid = document.registration.passid;
	var letters = /^[a-zA-Z\d]{5,8}$/;
if(!uid.value.match(letters))
{
	if(progress_bar0 === 1)
	{
		progress_bar0=0;
		var val=document.getElementById('state').value;
		val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
alert("UserName should be "+5+" to "+8+" alphanumeric" );
document.getElementById('u_name').style.color = "red";
document.getElementById('right1').style.visibility='hidden';
document.getElementById('wrong1').style.visibility='visible';
document.forms['registration']['userid'].focus();
return;
}
else
{
	if(progress_bar0 === 0)
	{
	progress_bar0=1;
	var val=document.getElementById('state').value;
		val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}
document.getElementById('u_name').style.color = "blue";
		document.getElementById('wrong1').style.visibility='hidden';
document.getElementById('right1').style.visibility='visible';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
document.forms['registration']['passid'].focus();
return ;
}
}



/* CHECKING FOR PASSWORD VALID OR NOT */
function passid_validation()
{
	var passid = document.registration.passid;
var con_passid = document.registration.confirm_passid;
var letters = /^(?=.*\d.*)(?=.*[a-z].*)(?=.*[@#].*)(?=.*[A-Z].*)[a-zA-Z0-9@#]{4,6}$/;
if(!passid.value.match(letters))
{
	if(progress_bar1 === 1)
	{
		progress_bar1=0;
		var val=document.getElementById('state').value;
		val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
alert("Password should be "+4+" to "+6+" atleast one lowercase, uppercase, number, special character(@,#)");
document.getElementById('pwd').style.color = "red";
document.getElementById('right2').style.visibility='hidden';
document.getElementById('wrong2').style.visibility='visible';
document.getElementById('disab').disabled = true;
	document.getElementById('right3').style.visibility='hidden';
document.getElementById('wrong3').style.visibility='visible';
document.getElementById('con_pwd').style.color = "red";
document.forms['registration']['passid'].focus();
return;
}
else
{
	if(progress_bar1 === 0)
	{
	progress_bar1=1;
	var val=document.getElementById('state').value;
		val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}
	if(!con_passid.value.localeCompare(passid.value) )
	{
		if(progress_bar2 === 0)
		{
		progress_bar2=1;
		var val=document.getElementById('state').value;
		val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
		}	
		document.getElementById('con_pwd').style.color = "blue";
				document.getElementById('wrong3').style.visibility='hidden';
document.getElementById('right3').style.visibility='visible';
document.getElementById('pwd').style.color = "blue";
	document.getElementById('right2').style.visibility='visible';
			document.getElementById('wrong2').style.visibility='hidden';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
	document.getElementById('disab').disabled = false;
		document.forms['registration']['fisrt_name'].focus();
		return
	}
	else
	{
		
	document.getElementById('disab').disabled = false;
document.getElementById('pwd').style.color = "blue";

		document.getElementById('right2').style.visibility='visible';
			document.getElementById('wrong2').style.visibility='hidden';

if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
document.forms['registration']['confirm_passid'].focus();
return ;
}
}
}


/* CHECKING FOR CONFIRM PASSWORD VALID OR NOT */
function con_passid_validation()
{
	var passid = document.registration.passid;
	var con_passid = document.registration.confirm_passid;
var fname = document.registration.first_name;
if(con_passid.value.localeCompare(passid.value) || con_passid.value===0 )
{
	if(progress_bar2 === 1)
	{
		progress_bar2=0;
		var val=document.getElementById('state').value;
		val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
alert("Confirm Password should not be different from above password");
document.getElementById('con_pwd').style.color = "red";
document.getElementById('right3').style.visibility='hidden';
document.getElementById('wrong3').style.visibility='visible';
document.forms['registration']['confirm_passid'].focus();
return;
}
else
{
	if(progress_bar2 === 0)
	{
		progress_bar2=1;
		var val=document.getElementById('state').value;
		val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
document.getElementById('con_pwd').style.color = "blue";
		document.getElementById('wrong3').style.visibility='hidden';
document.getElementById('right3').style.visibility='visible';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
document.forms['registration']['fisrt_name'].focus();
return ;
}

}

/* CHECKING FOR FIRST NAME VALID OR NOT */
function fname_validation()
{
	var first_name= document.registration.first_name;
	var last_name= document.registration.last_name;
	var letters = /^[a-zA-Z]{2,6}$/;
if(!first_name.value.match(letters))
{
	if(progress_bar3 === 1)
	{
		progress_bar3=0;
		var val=document.getElementById('state').value;
		val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
alert("First name should be "+2+" to "+6+" characters");
document.getElementById('first_n').style.color = "red";
document.getElementById('right4').style.visibility='hidden';
document.getElementById('wrong4').style.visibility='visible';
document.forms['registration']['fisrt_name'].focus();
return ;
}
else
{
	if(progress_bar3 === 0)
	{
		progress_bar3=1;
		var val=document.getElementById('state').value;
		val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
document.getElementById('first_n').style.color = "blue";
		document.getElementById('wrong4').style.visibility='hidden';
document.getElementById('right4').style.visibility='visible';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
document.forms['registration']['last_name'].focus();
return ;
}
}

/* CHECKING FOR LAST NAME VALID OR NOT */
function lname_validation()
{
	var file_name= document.registration.file_name;
	var last_name= document.registration.last_name;
	var letters = /^\S[a-zA-Z\. ]{0,15}\S$/;
if(!last_name.value.match(letters))
{
	if(progress_bar4 === 1)
	{
		progress_bar4=0;
		var val=document.getElementById('state').value;
		val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
alert("Last name should be "+2+" to "+15+" characters and no spaces should be there at start or end");
document.getElementById('last_n').style.color = "red";
document.getElementById('right5').style.visibility='hidden';
document.getElementById('wrong5').style.visibility='visible';
document.forms['registration']['last_name'].focus();
return ;
}
else
{
	if(progress_bar4 === 0)
	{
		progress_bar4=1;
		var val=document.getElementById('state').value;
		val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
document.getElementById('last_n').style.color = "blue";
		document.getElementById('wrong5').style.visibility='hidden';
document.getElementById('right5').style.visibility='visible';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
document.forms['registration']['file_name'].focus();
return;
}
}

/* CHECK THE FILE UPLOADED IS VALID FORMAT */
function file_validation()
{	
var umsex = document.registration.sex[0];
var f_name = document.registration.file_name.value;
var fileName = f_name.split(".");
       fileName = fileName[fileName.length-1 ];
if(fileName ==='jpg' || fileName ==='gif' || fileName === 'png' )
{
	if(progress_bar5 === 0)
	{
		progress_bar5=1;
		var val=document.getElementById('state').value;
		val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	

	 document.getElementById('file_n').style.color = "blue";
	 		document.getElementById('wrong6').style.visibility='hidden';
document.getElementById('right6').style.visibility='visible';
	 if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
umsex.focus();
return;
}
else
{
	if(progress_bar5 === 1)
	{
		progress_bar5=0;
		var val=document.getElementById('state').value;
		val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
alert("File should be of .jpg/.png/.gif");
document.getElementById('file_n').style.color = "red";
document.getElementById('right6').style.visibility='hidden';
document.getElementById('wrong6').style.visibility='visible';
document.forms['registration']['file_name'].focus();
return;
}

}


/* CHECKING FOR GENDER VERIFICATION */
function gender_validation()
{
if(progress_bar13 === 0)
	{
		progress_bar13=1;
		var val=document.getElementById('state').value;
		val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
	progress_bar13=1;
	document.getElementById('gender').style.color = "blue";
document.getElementById('right7').style.visibility='visible';
document.getElementById('wrong7').style.visibility='hidden';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
return;

}


/* CHECKING FOR DAY SELECTED OR NOT */
function dob1select()
{
	var dob1= document.registration.dob1;
	var dob2= document.registration.dob2;
	var dob3= document.registration.dob3;
if(dob1.value == "default")
{
	if(progress_bar6 === 1)
	{
		progress_bar6=0;
		var val=document.getElementById('state').value;
		val=val-3; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
alert('Select your "day" from the list');
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return;
}
else
{
	if(progress_bar6 === 0)
	{
		progress_bar6=1;
		var val=document.getElementById('state').value;
		val=val+3; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
	
	
if(dob2.value == "default")
{
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return  ;
}
else
{
	
if(dob3.value == "default")
{
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return ;
}
else
{
document.getElementById('db').style.color = "blue";
		document.getElementById('wrong8').style.visibility='hidden';
document.getElementById('right8').style.visibility='visible';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
return;
}
}
}
}

/* CHECKING FOR MONTH SELECTED OR NOT */
function dob2select()
{
	var dob1= document.registration.dob1;
	var dob2= document.registration.dob2;
	var dob3= document.registration.dob3;

if(dob2.value == "default")
{
	if(progress_bar7 === 1)
	{
		progress_bar7=0;
		var val=document.getElementById('state').value;
		val=val-3; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	

alert('Select your "month" from the list');
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return  ;
}
else
{
	if(progress_bar7 === 0)
	{
		progress_bar7=1;
		var val=document.getElementById('state').value;
		val=val+3; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	

if(dob1.value == "default")
{
alert('Select your "day" from the list');
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return ;
}
else
{

if(dob3.value == "default")
{
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return ;
}
else
{

document.getElementById('db').style.color = "blue";
		document.getElementById('wrong8').style.visibility='hidden';
document.getElementById('right8').style.visibility='visible';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
return  ;
}
}
}

}


/* CHECKING FOR YEAR SELECTED OR NOT */
function dob3select()
{
	var dob1= document.registration.dob1;
	var dob2= document.registration.dob2;
	var dob3 = document.registration.dob3;

if(dob3.value == "default")
{
	if(progress_bar8 === 1)
	{
		progress_bar8=0;
		var val=document.getElementById('state').value;
		val=val-4; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	

	

alert('Select your "year" from the list');
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return ;
}
else
{
	if(progress_bar8 === 0)
	{
		progress_bar8=1;
		var val=document.getElementById('state').value;
		val=val+4; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
	if(dob1.value == "default")
{
alert('Select your "day" from the list');
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return ;
}
else
{
if(dob2.value == "default")
{
alert('Select your "month" from the list');
document.getElementById('db').style.color = "red";
document.getElementById('right8').style.visibility='hidden';
document.getElementById('wrong8').style.visibility='visible';
return ;
}
else
{
document.getElementById('db').style.color = "blue";
		document.getElementById('wrong8').style.visibility='hidden';
document.getElementById('right8').style.visibility='visible';
if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
return ;
}
}
}


}

/* CHECK PHONE NUMBER ENTERED OR NOT AND VALIDATE ENTERED PHONE NUMBER */
function phone_validations()
{
	var phno = document.registration.phno;
	var letters = /^\+\d\d \(\d\d\d\)-\d\d\d-\d\d\d\d$/;
if(!phno.value.match(letters))
{
	if(progress_bar9 === 1)
	{
		progress_bar9=0;
		var val=document.getElementById('state').value;
		val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
	}	
alert("Phone number should be in this format '+99 (999)-999-9999'" );
document.getElementById('phone').style.color = "red";
document.getElementById('right11').style.visibility='hidden';
document.getElementById('wrong11').style.visibility='visible';
document.forms['registration']['phno'].focus();
return;
}
else
{
if(progress_bar9 === 0)
	{
		progress_bar9=1;
		var val=document.getElementById('state').value;
			val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
		}
	document.getElementById('phone').style.color = "blue";
			document.getElementById('wrong11').style.visibility='hidden';
document.getElementById('right11').style.visibility='visible';
	if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
return;
}
}



/* CHECK HOBBIES SELECTED OR NOT */

function hobbies_validation()
{
var i=0;
var list=0;
for(i=0;i<6;i++)
{
	if(document.registration.hob[i].checked)
	{
		list++;	
	}
}
if(list === 0)
{
	if(progress_bar10 === 1)
	{
		progress_bar10=0;
		var val=document.getElementById('state').value;
			val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
		}
	alert("Select your hobbies or atleast 'others'");
	document.getElementById('hobby').style.color = "red";
	document.getElementById('right9').style.visibility='hidden';
document.getElementById('wrong9').style.visibility='visible';
	return;
}
	else
	{
		if(progress_bar10 === 0)
	{
		progress_bar10=1;
		var val=document.getElementById('state').value;
			val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
		}
		document.getElementById('hobby').style.color = "blue";
				document.getElementById('wrong9').style.visibility='hidden';
document.getElementById('right9').style.visibility='visible';
		if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
	return;		
		}

}

/* CHECK COUNTRY SELECTED OR NOT */

function country_validation()
{
	 var selObj = document.getElementById('sel');
  var i;
  var count = 0;
	var k=0;
  for (i=1; i<selObj.options.length; i++) {
    if (selObj.options[i].selected) 
    {
    		 if(k===0)
    		 {
    		 COUNTRIES_LIST=selObj.options[i].value;k=1;
				}
				 else
				 {
				 	 COUNTRIES_LIST= COUNTRIES_LIST.concat(", "+selObj.options[i].value);
				 }         
          count++;
    }
 }
    if(count === 0)
{
	if(progress_bar11 === 1)
	{
		progress_bar11=0;
		var val=document.getElementById('state').value;
			val=val-9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
		}
		
	alert("Select atleast your current stay-in country");
	document.getElementById('cnty').style.color = "red";
	document.getElementById('right10').style.visibility='hidden';
document.getElementById('wrong10').style.visibility='visible';
	return;
}
	else
	{
		if(progress_bar11 === 0)
	{
		progress_bar11=1;
		var val=document.getElementById('state').value;
			val=val+9; document.getElementById('percentage').innerHTML=val+"%";
		document.getElementById('state').value=val;
		}
		document.getElementById('cnty').style.color = "blue";
		document.getElementById('wrong10').style.visibility='hidden';
document.getElementById('right10').style.visibility='visible';
	if(document.getElementById('state').value === 100)
	{document.getElementById('status').style.display='block';}
	return;		
		}
}

/* ON SUBMIT CHECK ALL FIELDS ARE FILLED OR NOT*/
function pageRedirect()
{
gender_validation();
	if(document.getElementById('state').value === 100)
	{
   var USER_NAME=document.forms['registration']['userid'].value;		
	var PASSWORD=document.forms['registration']['passid'].value;
	var FIRST_NAME=document.forms['registration']['first_name'].value;
	var LAST_NAME=document.forms['registration']['last_name'].value;
	var FILE_NAME=document.registration.file_name.value;
   var GENDER="null";
   if (document.registration.sex[0].checked)
   {
  GENDER=document.registration.sex[0].value;
	}
   else
   {
   GENDER=document.registration.sex[1].value;
   }
 	var D_O_B=document.forms['registration']['dob1'].value+"-"+document.forms['registration']['dob2'].value+"-"+document.forms['registration']['dob3'].value;
   var HOBBIES_LIST="null";	
	var i=0;
	var list=0;
	for(i=0;i<6;i++)
	{	
	if(document.registration.hob[i].checked)
	{
		if(list===0)
		{
		HOBBIES_LIST=	document.registration.hob[i].value;
		list=1;
		}	
		else
		{
			HOBBIES_LIST=HOBBIES_LIST.concat(", "+document.registration.hob[i].value);
		}
	}
	}
	var PHONE_NUMBER=document.forms['registration']['phno'].value;
			
document.getElementById('status2').style.display='block';
alert("Form Successfully Submitted with following information click 'ok'");
alert("Account Information \n\n USERNAME\t:"+USER_NAME+"\n PASSWORD\t:"+ PASSWORD);
alert("Profile Information \n\n FIRST NAME\t:"+FIRST_NAME+"\n LAST NAME\t:"+LAST_NAME+"\n FILE NAME\t:"+FILE_NAME+"\n GENDER\t\t:"+GENDER+"\n DATE OF BIRTH\t:"+D_O_B+"\n HOBBIES\t\t:"+HOBBIES_LIST+"\n HAVE BEEN TO\t:"+COUNTRIES_LIST);
alert("Contact Information \n\n PHONE NUMBER\t:"+PHONE_NUMBER);
 return true;
}
else if(document.getElementById('state').value === 0)
{
alert('Please fill all fields');
document.forms['registration']['userid'].focus();
return false;	
}
else
{
if(progress_bar0 === 0)
{
	alert('Please enter username');
document.forms['registration']['userid'].focus();
}
else
{
if(progress_bar1 ===0)
{
	alert('Please enter password');
document.forms['registration']['passid'].focus();
}
else
{
if(progress_bar2 ===0)
{
	alert('Please enter confirm password');
document.forms['registration']['confirm_passid'].focus();
}
else
{
if(progress_bar3 ===0)
{
	alert('Please enter first name');
document.forms['registration']['first_name'].focus();
}
else
{
if(progress_bar4 ===0)
{
	alert('Please enter last name');
document.forms['registration']['last_name'].focus();
}
else
{
if(progress_bar5 ===0)
{
	alert('Please upload file');
document.forms['registration']['file_name'].focus();
}
else
{

if(progress_bar6 ===0)
{
	alert('Please select day in date of birth');
document.forms['registration']['dob1'].focus();
}
else
{
if(progress_bar7 ===0)
{
	alert('Please select month in date of birth');
document.forms['registration']['dob2'].focus();
}
else
{
if(progress_bar8 ===0)
{
	alert('Please select year in date of birth');
document.forms['registration']['dob3'].focus();
}
else
{
if(progress_bar10 ===0)
{
	alert('Please select hobbies');
alert('select hobbies');
}
else
{
if(progress_bar11 ===0)
{
	alert('Please select country');
document.forms['registration']['country'].focus();
}
else
{
if(progress_bar9 ===0)
{
	alert('Please enter phone number');
document.forms['registration']['phno'].focus();
}
}	
}	
}	
}	
}	
}	
}	
}	
}	
}	
}	

return false;
}

}



