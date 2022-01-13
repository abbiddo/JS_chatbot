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