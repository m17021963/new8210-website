function send_email() {
var name=$("#app_name").val();
var email=$("#app_email").val();
var phone=$("#app_phone").val();
if(name=="")
{
	$("#app_name").addClass("errors");
}
else
{
	$("#app_name").removeClass("errors");
}
if(!validEmail(email))
{
	$("#app_email").addClass("errors");
}
else
{
	$("#app_email").removeClass("errors");
}
if(phone=="")
{
	$("#app_phone").addClass("errors");
}
else
{
	$("#app_phone").removeClass("errors");
}

if(name!="" && phone!="" && validEmail(email) )
{
	
	$.post( "https://getsimpleform.com/messages?form_api_token=256b851ea613a4c739a6496e65859349", $( "#send_order" ).serialize() );

	
	$("#mail_msg").load("email.php?name="+name+"&email="+email+"&phone="+phone);
	
	
	$("#app_name").val('');
	$("#app_email").val('');
	$("#app_phone").val('');
}	
return false;
}
function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}