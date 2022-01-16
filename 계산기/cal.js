var n1=0,n2=0,cnt=0;
var s=0,d=0,i=1;
var str="";
var h2=document.getElementsByTagName('h2');

function num(n){
	if (cnt>0) {
		n1=0;
		str="";
		cnt=0;
	}

	h2[0].innerHTML=str;
	str+=n;

	if (s==0){
		if (d==0) n1*=10;
		else{
			i*=0.1;
			n*=i;
		}	
		n1+=n;	
	}

	else {
		if (d==0) n2*=10;
		else{
			i*=0.1;
			n*=i;
		}
		n2+=n;
	}
	
	h2[0].innerHTML=str;
}

function symbol(n){
	if (s==1) n1+=n2;
	else if (s==2) n1-=n2;
	else if (s==3) n1*=n2;
	else if (s==4) n1/=n2;
	n2=0;

	s=n;
	cnt=0;

	if (s==1) str+="+";
	else if (s==2) str+="-";
	else if (s==3) str+="×";
	else str+="÷";

	h2[0].innerHTML=str;

	d=0;
	i=1;
}

function dot(){
	d=1;
	str+=".";
	h2[0].innerHTML=str;
}

function result(){
	cnt+=1;
	str+="=";

	if (s==1) n1+=n2;
	else if (s==2) n1-=n2;
	else if (s==3) n1*=n2;
	else n1/=n2;

	n1=Math.round(n1*1000)/1000   //0.2*0.4=0.0800000002 를 방지하기 위함
	console.log(n1);
	str+=n1;
	h2[0].innerHTML=str;

	n2=0;
	s=0;
	str=n1;
	d=0;
	i=1;
}