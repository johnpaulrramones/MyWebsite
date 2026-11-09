 
	var vAct=0;
	var vChoice=0;
	var vMusic=0;
	var vCine=0;
 
 
 function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}




function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Thank you for leaving : " + fname + " : as a comment!");
	alert("The system is currently experiencing high request traffic, sorry for the inconvenience developers are making things better..");
}





function LikeChoice(){
	if(vChoice==0){
		alert("You have voted for Viewer's Choice!");
		vChoice++;
	}
	else
	{
		alert("You have already voted!");
	}
}
function DislikeChoice(){
	if(vChoice==0){
		alert("You have disliked Viewer's Choice!");
		vChoice++;
	}
	else
	{
		alert("You have already voted!");
	}
}

function LikeAct(){
	if(vAct==0){
		alert("You have voted for Acting category!");
		vAct++;
	}
	else
	{
		alert("You have already voted!");
	}
}
function DislikeAct(){
	if(vAct==0){
		alert("You have disliked Acting category!");
		vAct++;
	}
	else
	{
		alert("You have already voted!");
	}
}

function LikeCine(){
	if(vCine==0){
		alert("You have voted for Cinematography category!");
		vCine++;
	}
	else
	{
		alert("You have already voted!");
	}
}
function DislikeCine(){
	if(vCine==0){
		alert("You have disliked Cinematography category!");
		vCine++;
	}
	else
	{
		alert("You have already voted!");
	}
}

function LikeMusic(){
	if(vChoice==0){
		alert("You have voted for Music category!");
		vChoice++;
	}
	else
	{
		alert("You have already voted!");
	}
}
function DislikeMusic(){
	if(vChoice==0){
		alert("You have disliked Music category!");
		vChoice++;
	}
	else
	{
		alert("You have already voted!");
	}
}





function Contact(){
	name=document.forms[0].name.value;
	email =document.forms[1].email.value;
	message =document.forms[2].message.value;
	
	if(name=="")
	{
		
    alert("Hello " + name + "! You will now be redirected to our facebook page");
	}
	else
	{
    alert("Hello " + name + "! You will now be redirected to our facebook page");
	}
}


function openWin() {
window.open("https://www.lazada.com");
}
function openWin1() {
window.open("https://www.openload.com/movie/name");
}
 

function welcomeMsg() {
    alert("Welcome Visitor!");
}