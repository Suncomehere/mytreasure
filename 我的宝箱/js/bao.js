// content的轮播图
var cul1=document.getElementById("cul1");
var cul2=document.getElementById("cul2");
var cli1=cul1.querySelectorAll("li");
var imgs=cul1.querySelectorAll("img");
var cli2=cul2.querySelectorAll("li");
var many=document.querySelector(".content .p1 span");
var you=document.getElementById("you");

cul1.style.width=cli1.length*cli1[0].offsetWidth+"px";

//点击打开宝箱
var a="静态.png";
var timer=null;
var index=0;
var x=true;
for(var i = 0;i < imgs.length; i++){
	if(x){
    imgs[i].index=i;
	imgs[i].onclick=function(){
		// var m=many.innerHTML;
		var sr=this.getAttribute("src")
		var s=sr.replace(a,"动态.gif");
       	this.src=s;
        index=this.index;
       	timer=setTimeout(function(){
       	 imgs[index].src=sr;
       	},500)
     // if(m==0){display
     // 	cul1.style.display="none";
     // 	cul2.style.="none";
     // 	return
     // }
       	many.innerHTML-=1; 	
       	if(many.innerHTML==0){
       		return;
       	}
       }
}
}

var j=0;
//点击原点图片滚动
for(var i =0; i<cli2.length; i++){
    cli2[i].index=i;
	cli2[i].onclick=function(){
		if(j>cli1.length-1){
			j=0;
		}
		for(var i=0;i<cli2.length;i++){
			cli2[i].style.backgroundColor="#ccc";
		}
		j=this.index;
		this.style.backgroundColor="#534c4c";
		cul1.style.left=-this.index*cli1[0].offsetWidth+"px";
	
	}
}
//点击向右按钮图片滚动
you.onclick=function(){
	j++;
	if(j>cli1.length-1){
		j=0;
	}
	for(var i=0;i<cli2.length;i++){
			cli2[i].style.backgroundColor="#ccc";
		}
	cli2[j].style.backgroundColor="#534c4c";
	cul1.style.left=-j*cli1[0].offsetWidth+"px";
}