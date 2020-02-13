
// Part 1 of Javascript Activity

function oddSum(){
	var i = 0;
	var sum = 0;
	for(i=0; i<=50; i++){
		if(i%2 != 0){
			console.log(i);
			sum = sum + i;
		}
	}
	document.getElementById("oddp").innerHTML = "Sum for all odd numbers ranging is equals to "+sum;
}
// Part 2 of Javascript Activity
var total;
var ave;
function gradeaverage(){
	var a = parseInt(document.getElementById("peGrade").value);
	var b = parseInt(document.getElementById("mathGrade").value);
	var c = parseInt(document.getElementById("scienceGrade").value);
	var d = parseInt(document.getElementById("engGrade").value);
	var e = parseInt(document.getElementById("filGrade").value);
	total = a + b + c + d + e;
	ave = total / 5;
	document.getElementById("avep").textContent = "Mao ni imung average grado hil, "+ave;
}

function finalgrade() {
	if(ave >= 90 && ave <= 100)
		document.getElementById("final").textContent = 'A';
	else if(ave >= 80 && ave < 90)
		document.getElementById("final").textContent = 'B';
	else if(ave >= 70 && ave < 80)
		document.getElementById("final").textContent = 'C';
	else if(ave >= 60 && ave < 70)
		document.getElementById("final").textContent = 'D';
	else if(ave < 60)
		document.getElementById("final").textContent = 'F';
	else
		document.getElementById("final").textContent = 'You must have input an invalid grade.';
}


// Part 3 of Javascript Activity
function beepboop(){
	var x;
	for (x=1 ; x<=100; x++){
		if (x%3!=0 && x%5!=0){
			console.log(x)
		} else if (x%3==0 && x%5==0){
			console.log(x+ ' beepboop')
		} else if (x%5==0){
			console.log(x+ ' boop')
		} else  if (x%3==0){
			console.log(x+ ' beep')
		}
	}
}

//Bonus JS Activty

function loopchar(){
	var p;
	var o;
	var s = parseInt(document.getElementById("rown").value);
	for (p=1; p<=s; p++){
		for (o=1; o<=p; o++){
			document.write('*');
		}
		document.write('<br>');
	}
}
