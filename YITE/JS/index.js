window.onload=init;
var i = 1;
var interval;
function init(){
	interval=window.setInterval("lunbo()",2000);
}

 function lunbo() {
      i++;
     if (i > 3) {
            i = 1;
      }
    document.getElementById("pic").src = "../YITE/images/2018_03_14_99999_" + i + ".JPG";
  }
function showpic(){
	window.clearInterval(interval);
}
function movepic(){
	interval=window.setInterval("lunbo()", 2000);
}



var win=$(window);
var sc=$(document);

$(function(){

var nav=$(".header"); //得到导航对象
win.scroll(function(){

if(sc.scrollTop()>=550){
nav.css({"background-image":"url(images/navbg.jpg)","background-size":"100% 100%"}) ;
}else{
   nav.css('background-image','none');
}

var pro=$('.trunRight');
if(sc.scrollTop()>=500){

pro.animate({
        width: "300px"
    }, 800);
}

if(sc.scrollTop()>=800){

$('.company_view').animate({
        width:"600px"
    }, 800);
}
if(sc.scrollTop()>=1300){

$('.newShow').animate({
        width: "300px"
    }, 800);
}
})  

})

  $(document).ready(function(){
             $("#index").click(function(){
              $("html").animate({
                left:"1300px"},800,function(){
                  window.location.href="index.html";
                });
             });

  $("#about").click(function(){
              $("html").animate({
                left:"1300px"},800,function(){
                  window.location.href="about.html";
                });
             });
    $("#news").click(function(){
              $("html").animate({
                left:"1300px"},800,function(){
                  window.location.href="news.html";
                });
             });
      $("#pro").click(function(){
              $("html").animate({
               left:"1300px"},800,function(){
                  window.location.href="product.html";
                });
             });
        $("#contact").click(function(){
              $("html").animate({
                left:"1300px"},800,function(){
                  window.location.href="contact.html";
                });
             });
    });

