var movie1={
	title : "제목 : 조작된 도시",
	date : "* 개봉일 : 2017.02.09",
	genre : "* 장르 : 범죄, 액션",
	actor : "* 출연 : 지창욱, 심은경, 안재홍 등",
	time : "* 러닝타임 : 126분"
}

var movie2={
	title : "제목 : 아나스타샤",
	date : "* 개봉일 : 1997.12.20",
	genre : "* 장르 : 애니메이션",
	actor : "* 출연 : 아나스타샤, 디미트리 등",
	time : "* 러닝타임 : 94분"
}

var movie3={
	title : "제목 : 미 비포 유",
	date : "* 개봉일 : 2016.06.01",
	genre : "* 장르 : 멜로, 로맨스",
	actor : "* 출연 : 에밀리아 클라크, 샘 클라플린 등",
	time : "* 러닝타임 : 110분"
}

var h1=document.getElementsByTagName('h1');
var h3=document.getElementsByTagName('h3');

function btn1(){
	document.getElementById("movie").style.backgroundColor = "#e0ffff";
	document.getElementById("btn1").style.borderColor = "black black black #e0ffff";
	document.getElementById("btn2").style.borderColor = "black"
	document.getElementById("btn3").style.borderColor = "black"
	h1[0].innerHTML=movie1.title;
	document.getElementById("line").style.borderColor = "#a9a9a9";
	h3[0].innerHTML=movie1.date;
	h3[1].innerHTML=movie1.genre;
	h3[2].innerHTML=movie1.actor;
	h3[3].innerHTML=movie1.time;
}

function btn2(){
	document.getElementById("movie").style.backgroundColor = "#fafad2";
	document.getElementById("btn2").style.borderColor = "black black black #fafad2";
	document.getElementById("btn1").style.borderColor = "black"
	document.getElementById("btn3").style.borderColor = "black"
	h1[0].innerHTML=movie2.title;
	document.getElementById("line").style.borderColor = "#a9a9a9";
	h3[0].innerHTML=movie2.date;
	h3[1].innerHTML=movie2.genre;
	h3[2].innerHTML=movie2.actor;
	h3[3].innerHTML=movie2.time;
}

function btn3(){
	document.getElementById("movie").style.backgroundColor = "#fff0f5";
	document.getElementById("btn3").style.borderColor = "black black black #fff0f5";
	document.getElementById("btn1").style.borderColor = "black"
	document.getElementById("btn2").style.borderColor = "black"
	h1[0].innerHTML=movie3.title;
	document.getElementById("line").style.borderColor = "#a9a9a9";
	h3[0].innerHTML=movie3.date;
	h3[1].innerHTML=movie3.genre;
	h3[2].innerHTML=movie3.actor;
	h3[3].innerHTML=movie3.time;
}