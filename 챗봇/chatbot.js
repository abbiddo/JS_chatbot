var json=[
	{
		"question":"안녕",
		"answer":"안호!"
	},
	{
		"question":"나이",
		"answer":"그런거 없다 호!"
	},
	{
		"question":"이름",
		"answer":"호호!"
	},
]
var question="";
var answer="";
var key=0;
var h2=document.getElementsByTagName("h2");
var k=0,kk=0,l=0;
var str="",set;

function text_input(){
	var value = document.getElementById("console").value;
	if (k==0) {
		if (value=="하하호호"){
			k=1;			
			str="안녕하세요! 어떤 도움이 필요하신가호?";
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
			str="꺼져 있잖호^^";
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
			str="켜져 있잖호^^";
			typing();
		}
		else {
			str="ㅇㅋ";
			typing();
			document.body.style.backgroundColor="white";
			l=0;
		}
	}

	else text_check(value)
}

function text_check(value){
	if (key==1){
		if(value=="네"){
			str="대답을 입력해주세호";
			typing();
			key=2;
		}
		else{
			str="호 :(";
			typing();
			key=0;
		}
		return 0;
	}

	if (key==2){
		answer=value;
		push_json()
		return 0;
	}

	for (let i=0;i<json.length;i++){
		if (value==json[i].question){
			str=json[i].answer;
			typing();
			return;
		}
	}

	str="말을 가르쳐 주실래호?  (네 or 아니요)"
	typing();
	question=value
	key=1;
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
	
	setTimeout(typing,100);
}

function push_json(){
	json.push({question: `${question}`, answer: `${answer}`});
	h2[0].innerHTML = "말을 배웠호!";
	key = 0;
}