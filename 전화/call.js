var i,time="";
var h5=document.getElementsByTagName('h5');

function display(){
	document.getElementById("display").style.backgroundColor = "white";
	document.getElementById("call").style.backgroundColor = "white";
}

function timer(){
	var today = new Date();
	time="";
	time+= ('0'+today.getHours()).slice(-2);
	time+= ':';
	time+= ('0'+today.getMinutes()).slice(-2);
	setTimeout(m,998.5);
	
}

function m(){  //h5 텍스트 바꾸는게 timer 안에서 안돼서 함수 하나 더만들어서 이중으로 돌림
	h5[0].innerHTML=time;
	timer();
}

timer();