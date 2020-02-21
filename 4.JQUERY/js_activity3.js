// JS activity 3.1 


$('#form1').on('submit', nameAndAge);

//Declared an empty array
let nameList = [];
function nameAndAge(e){

//To let the output retain
	e.preventDefault();

//Execute Form Validation Before executing
		if (checkForm1()==true){

//Declaring Properties for the object
		let personList = {
			Name: document.getElementById('userName').value,
			Age: document.getElementById('userAge').value
		}

//Duplicate Checking
		if(checkDuplicate(personList.Name, nameList)==true){
//To pass the object into the Array
		nameList.push(personList);
		document.querySelector('form').reset();

		console.log('added' , {nameList} );			
		let pre = document.querySelector('#msg pre');
		pre.innerHTML=JSON.stringify(nameList);


		var text = "";
		let readable = document.querySelector('#read pre');
			for (let x = 0; x<nameList.length; x++){
				text+=`Name:${nameList[x].Name} , Age: ${nameList[x].Age} ` + '\n';
			}
		readable.innerText=(text);
		}
	}
}

//JS activity 3.2

$('#form2').on('submit', itemInventory);
//Declared an empty array
let inventoryList = [];
function itemInventory(e){

//To let the output retain
	e.preventDefault();

//Execute Form Validation Before executing
	if (checkForm2()==true){

//Declaring Properties for the object
		let itemList = {
			Name: document.getElementById('itemName').value,
			Stock: parseInt(document.getElementById('itemStock').value),
			Price: document.getElementById('itemPrice').value
		}

		if(checkDuplicate(itemList.Name, inventoryList)==true){
//To pass the objects into the Array
		inventoryList.push(itemList);
		document.querySelector('form').reset();

		console.log('added' , {inventoryList} );
		var text ="";
		let pre = document.querySelector('#list pre')

//Loop in order to display the Added entries of the list
			for (let x = 0; x<inventoryList.length; x++){
				text+=`Item Name: ${inventoryList[x].Name} , Stock: ${inventoryList[x].Stock}, Price: ${inventoryList[x].Price} `+ '\n';
			}

		pre.innerText = (text);
		var totalPrice=0;
		var text2="";
		let tally = document.querySelector('#tally pre')

//Function for the Calculate button 
		document.getElementById('calculate').onclick = function(){

			for( var x in inventoryList){

				product = (inventoryList[x].Stock)*(inventoryList[x].Price);
				totalPrice += product;
				text2 += `${inventoryList[x].Name} will have a total value of ${product}.` + '\n';

			}
			tally.innerText = (text2 + '\n' + 'Total Price for the items is Php' + totalPrice + `.`);
		}	
	}
}
}
//FORM VALIDATION


function checkForm1(){
	var name = document.getElementById("userName").value;
	var age = document.getElementById("userAge").value;
	if (name == null || name == ""){
		alert("Error in Input ");
		return false;
	} else if ((name != null || name != "") && (isNaN(age) || age == null || age=="" )) {
		alert("Error: No Input in Age");
		return false;
	} else if (age % 1 !=0 ) {
		alert("Error: Age should be positive whole number");
		return false;
	} else if (age < 1) {
		alert("Error: Age should be positive integer");
		return false;
	} else if ((name != null || name != "") && (!isNaN(age) || age != null)) {
		return true;
	}
}

		//validation function for form 2
		function checkForm2() {
			var name = document.getElementById("itemName").value;
			var stocks = document.getElementById("itemStock").value;
			var price = document.getElementById("itemPrice").value;

			if (name === null || name === ""){
				alert("Please Input name in product inventory");
				return false;
			}else if ( isNaN(stocks) || stocks == "") {
				alert("Stocks must have a value");
				return false;
			} else if (stocks < 1) {
				alert("Stocks must be greater than 0");
				return false;
			} else if (stocks % 1 != 0) {
				alert("Stocks must whole number");
				return false;
			} else if ( isNaN(price)) {
				alert("Price must have a value");
				return false;
			} else if (price < 1) {
				alert("Stocks must be greater than 0");
				return false;
			} 
			return true;
		}

//Checking of Duplicate Names
		function checkDuplicate(listName, arrayList){

			for(var i=0; i<arrayList.length; i++){
				console.log(listName);
					console.log(arrayList);
				if (arrayList[i].Name === listName){
					alert(listName + " already Exists. This is a Duplicate");
					return false;
				}
			}
			return true;
		}

