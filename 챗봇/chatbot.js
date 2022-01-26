var h2=document.getElementsByTagName("h2");
var k=0,kk=0,l=0;
var str="",set;

function text_input(){
	var value = document.getElementById("console").value;
	if (k==0) {
		if (value=="하하호호"){
			k=1;			
			str="안녕하세요! 어떤 도움이 필요하신가요?";
			typing();
		}
	}

	else if (value=="따라해 봐"){
		k=2;
		str="알겠다 호!";
		typing();
	}

	else if (value=="그만해"){
		k=1;
		str="알겠다 호!";
		typing();
	}

	else if (k==2) {
		value+=" 호!";
		str=value;
		typing();
	}

	else if (value.includes("맛있")||value.includes("먹")){
		str="❌안 돼❌";
		typing();
		alert("❗❗❌❌위험❌❌❗❗");
	}

	else if (value=="불 꺼") {
		if (l==1) {
			str="꺼져 있잖아^^";
			typing();
		}
		else{
			str="ㅇㅋ";
			typing();
			document.body.style.backgroundColor="black";
			l=1;
		}
	}

	else if (value=="불 켜") {
		if (l==0) {
			str="켜져 있잖아^^";
			typing();
		}
		else {
			str="ㅇㅋ";
			typing();
			document.body.style.backgroundColor="white";
			l=0;
		}
	}

	else {
		str="호~";
		typing();
	}
}

function help(){
	kk++;
	if (kk%2==1) document.getElementById("help").style.display="block";
	else document.getElementById("help").style.display="none";
}

var i=0;
var strr="";
function typing(){
	if (i==0){
		strr="";
	}

	strr+=str[i];
	h2[0].innerHTML=strr;
	i++;

	if (strr.length>=str.length) {
		i=0;
		return 0;
	}
	
	setTimeout(typing,300);
}