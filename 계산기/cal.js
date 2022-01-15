var n1=0,n2=0;
var s=0,d=0,i=1;
var str="";
var h2=document.getElementsByTagName('h2');

function num(n){
	h2[0].innerHTML=str;

	str+=n;

	if (s==0){
		if (d==0){
			n1*=10;
			n1+=n;
		}
		else{
			i*=0.1;
			n*=i;
			n1+=n;
		}		
	}

	else {
		if (d==0){
			n2*=10;
			n2+=n;
		}
		else{
			i*=0.1;
			n*=i;
			n2+=n;
		}
	}

	h2[0].innerHTML=str;
}

function symbol(n){
	s=n;
	if (s==1) str+="+";
	else if (s==2) str+="-";
	else if (s==3) str+="*";
	else str+="/";

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
	str+="=";
	if (s==1){
		str+=n1+n2;
		console.log(n1+n2);
	}

	else if (s==2){
		str+=n1-n2;
		console.log(n1-n2);
	}

	else if (s==3){
		str+=n1*n2;
		console.log(n1*n2);
	}

	else {
		str+=n1/n2;
		console.log(n1/n2);
	}

	h2[0].innerHTML=str;

	n1=0;
	n2=0;
	s=0;
	str="";
	d=0;
	i=1;
}