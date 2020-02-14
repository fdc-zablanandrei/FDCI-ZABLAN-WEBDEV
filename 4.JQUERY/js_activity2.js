
//JS Activity 2.1

function stringLength(){
	var longest;
	var lgth =0;
	var string = document.getElementById("strings").value;
	var stringArray = string.split(" ");
	console.log(stringArray);

	for(var i=0; i < stringArray.length; i++){
		if(stringArray[i].length > lgth){
			var lgth = stringArray[i].length;
			longest = stringArray[i];
		}      
	
	} 
	alert("Longest word is "+longest);
}



//JS Activity 2.2

function isPrime(){
	var nonprime=0;
	var num = parseInt(document.getElementById("number").value);
	for(var i = 2; i < num; i++){
		
		if(num % i === 0){
			nonprime = 1;
			break;
		}

	}
	if (num==1){
		alert(num + ' is not prime')
	}	
	else if (nonprime ==0){
		alert(num + ' is prime')
	} else {
		alert(num+ ' is not prime')
	}
}

//JS Activity 2.3

function hourToMin(){
	var min;
	var hour = parseInt(document.getElementById("hour").value);
	min = hour * 60;
	console.log(min);
	alert("It'll take "+min +" minutes");
}