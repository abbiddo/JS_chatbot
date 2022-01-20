var i,time="";
var h1=document.getElementsByTagName('h1');
var h2=document.getElementsByTagName('h2');
var h5=document.getElementsByTagName('h5');
var b=document.getElementsByTagName('button');
var names={
	0:"좌변수",
	1:"이씨샾",
	2:"다자바",
	3:"썬파이"};
var number={
	0:"010-9386-6577",
	1:"02-7727-7338",
	2:"010-4338-3438",
	3:"010-7658-8302"};

function display(){
	document.getElementById("display").style.backgroundColor = "white";
	for (i=0;i<4;i++) b[i].style.backgroundColor = "white";
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

function call(n){
	document.getElementById("calling").style.display="block";
	h1[0].innerHTML=names[n];
	//변수 이름을 name으로 저장했더니 [obj] 가 하나씩 나옴 name은 변수명으로 X
	h2[0].innerHTML=number[n];
}

function end(){
	document.getElementById("calling").style.display="none";
}

timer();