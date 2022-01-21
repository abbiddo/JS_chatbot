var h2=document.getElementsByTagName("h2");
var k=1,kk=0;

function text_input(){
	var value = document.getElementById("console").value;
	if (k!=0) {
		if (value=="하하호호"){
			h2[0].innerHTML="안녕하세요! 어떤 도움이 필요하신가요?"
			k=0;
		}
	}

	else if (value.includes("맛있")||value.includes("먹")){
		h2[0].innerHTML="❌안 돼❌";
		alert("❗❗❌❌위험❌❌❗❗");
	}

	else if (value=="불 꺼") {
		h2[0].innerHTML="ㅇㅋ";
		document.body.style.backgroundColor="black";
	}

	else if (value=="불 켜") {
		h2[0].innerHTML="ㅇㅋ";
		document.body.style.backgroundColor="white";
	}

	else h2[0].innerHTML=value;
}

function help(){
	kk++;
	if (kk%2==1) document.getElementById("help").style.display="block";
	else document.getElementById("help").style.display="none";
}