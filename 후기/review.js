var title=[
	"모각코에 참여하게 된 계기"
];

var story=[
	[	
	"1년 동안 모각코에 꾸준히 참여해 오면서",
	"정말 다양한 커리큘럼들을 참여했습니다.",
	"저번달에 방학겸 휴식 기간으로 모각코를 참여하지 않았고",
	"그동안 참여하지 않았던 커리큘럼들을 살펴봤습니다.",
	"챗봇을 너무 좋아하는 저는 js 웹 챗봇에 끌리게 되었고",
	"웹 자바스크립트 과정을 선택하여 참여하게 되었습니다."
	]
];

var h2=document.getElementsByTagName("h2");
var h4=document.getElementsByTagName("h4");
var n=0;
var i=0;
var strr="";

function next(){
	if (n==6) return;
	
	for (var j=0;j<story[n].length;j++)	h4[j].innerHTML=story[n][j];
	str=title[n];
	typing();

	n++;
}

function typing(){
	if (i==0) strr="";

	strr+=str[i];
	h2[0].innerHTML=strr;
	i++;

	if (strr.length>=str.length) {
		i=0;
		return 0;
	}
	
	setTimeout(typing,100);
}

next();