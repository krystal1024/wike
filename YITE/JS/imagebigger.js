window.onload=function(){
var img=document.querySelector("product-img");
img.onmouseover = function(){
	img.style.cssText = "animation : bigger 2s ;width:100%;height:110%;";
}
img.onmouseout = function(){
	img.style.cssText="animation: smaller 2s";
}
}