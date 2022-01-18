var name="abbiddo";
var str=""
var i=0,j=0,k=0,set;
var num;
var colorlist="0123456789abcdef";
var color="#";
var h1=document.getElementsByTagName('h1');

function colorchoice(){
	var i,n;
	color="#"
	for (i=0;i<6;i++){
		n=Math.floor(Math.random()*20)
		if (n>15) i--;
		else{
			color+=colorlist[n];
		}
	}
}

function manual() {
	colorchoice();
	h1[0].style.color=color;
	str+=name[i++];
	h1[0].innerHTML=str;
	if (i==7){
		i=0;
		str="";
	}
}

function auto(){
	if (j==0){
		j=1;
		document.getElementById("stopbtn").style.display = "block";
		document.getElementById("autobtn").style.display = "none";
		i=0;
		str="";
	}
	realstop()
	manual();
	set=setTimeout(auto,1000);
}

function stop(){
	k=1;
	realstop();
}

function realstop(){
	if (k==1) {
		clearTimeout(set);
		document.getElementById("stopbtn").style.display = "none";
		document.getElementById("autobtn").style.display = "inline-block";
		j=0;
		k=0;
	}
}