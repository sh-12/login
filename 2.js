function submission()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="shubham"&& password=="12345")
{
    alert("login succesfully");
    return false;

}
else
{
    alert("login failed");
}


}