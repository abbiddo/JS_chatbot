var h2=document.getElementsByTagName("h2");
var k=0,kk=0,l=0;


function text_input(){
	var value = document.getElementById("console").value;
	if (k==0) {
		if (value=="하하호호"){
			h2[0].innerHTML="안녕하세요! 어떤 도움이 필요하신가요?"
			k=1;
		}
	}


	else if (value=="따라해 봐"){
		k=2;
		h2[0].innerHTML="알겠다 호!";
	}


	else if (value=="그만해"){
		k=1;
		h2[0].innerHTML="알겠다 호!"
	}


	else if (k==2) {
		value+=" 호!";
		h2[0].innerHTML=value;
	}


	else if (value.includes("맛있")||value.includes("먹")){
		h2[0].innerHTML="❌안 돼❌";
		alert("❗❗❌❌위험❌❌❗❗");
	}


	else if (value=="불 꺼") {
		if (l==1) h2[0].innerHTML="꺼져 있잖아^^";
		else{
			h2[0].innerHTML="ㅇㅋ";
			document.body.style.backgroundColor="black";
			l=1;
		}
	}


	else if (value=="불 켜") {
		if (l==0) h2[0].innerHTML="켜져 있잖아^^";
		else {
			h2[0].innerHTML="ㅇㅋ";
			document.body.style.backgroundColor="white";
			l=0;
		}
	}


	else h2[0].innerHTML="호~";
}


function help(){
	kk++;
	if (kk%2==1) document.getElementById("help").style.display="block";
	else document.getElementById("help").style.display="none";
}