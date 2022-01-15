var count=0;

function change0(){
	var h1=document.getElementsByTagName('h1');
	h1[0].innerHTML="모여서";
	console.log(count++);
}

function change1(){
	var h1=document.getElementsByTagName('h1');
	h1[1].innerHTML="각자";
	console.log(count++);
}

function change2(){
	var h1=document.getElementsByTagName('h1');
	h1[2].innerHTML="코딩";
	console.log(count++);
}

/** console 연습 **/
var n=21;
var str="abbiddo";
var ft=true;
var obj={0:"zore", 1:"one", 2:"two"};

console.log(typeof n);
console.log(typeof str);
console.log(typeof ft);
console.log(typeof obj);
console.log(typeof a);
console.log(typeof 13);
console.log(typeof "Hello");
console.log(typeof false);
console.log(typeof {3:"three", 4:"four"});