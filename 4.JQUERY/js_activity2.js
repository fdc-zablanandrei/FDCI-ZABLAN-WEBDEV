
//JS Activity 2.1

function stringLength(){
	var string = document.getElementById("strings").value;
	var stringArray = str.split(" ");
}


function isPrime(){
	
	var num = parseInt(document.getElementById("number").value);


	for(var i = 1; i <= num; i++){
		
		if(num % i === 0){
			console.log(num +' is not prime');
	}

	}
}



function hourToMin(){
	var min;
	var hour = parseInt(document.getElementById("hour").value);
	min = hour * 60;
	document.getElementById("mins").textContent = "It'll take "+min +" minutes";
}