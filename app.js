window.onload=function(){

    /* var randumb={
    hi:"yo",
    sup:"hi",
    yo:"sup"
}
 
for (var prop in randumb){
    console.log(prop + randumb[prop])
}; 
kewl
*/

var submit=document.getElementById("submit");
var PETNAME=document.getElementById("PETNAME");
var myForm=document.getElementById("myForm");
var PETTYPE=document.getElementById("PETTYPE");
var email=document.getElementById("email");
var password=document.getElementById("password");
var descr=document.getElementById("descr");
var rad=document.getElementsByClassName("rad");

var data={}

myForm.addEventListener("submit", function(){
event.preventDefault();
    data.name = PETNAME.value;
    data.type = PETTYPE.value;
    data.password = password.value;
data.email = email.value;
data.descr = descr;

for(let i=0; i < rad.length; i++){
if (rad[i].checked === true){
    data.legs = rad[i].value;
}

};

console.log(data);
});









}