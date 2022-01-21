var no={
	0:"먹을거야",
	1:"맛있겠다",
	2:"먹어야지",
	3:"먹고싶다",
	4:"먹고싶어"
}

var h2=document.getElementsByTagName("h2");

function text_input(){
	var value = document.getElementById("console").value;
	var i,n=0;

	for (i=0;i<5;i++)
		if (value==no[i]){
			h2[0].innerHTML="❌안 돼❌";
			alert("❗❗❌❌위험❌❌❗❗");
			n=1;
			break;
	}
	if (n==0) h2[0].innerHTML=value;
}