// 斗鱼直播

setInterval(() => {
  document.getElementsByClassName("ChatSend-txt")[0].value="hello";
  document.getElementsByClassName("ChatSend-button")[0].click();
}, 1000);


var script=document.createElement("script"); 
script.type="text/javascript"; 
script.src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"; 
document.getElementsByTagName('head')[0].appendChild(script); 
function fun123(){
$('.ChatSend-txt').val("hello");
$('.ChatSend-button ').click();
}
setInterval("fun123()","2000");