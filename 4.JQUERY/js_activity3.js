// JS activity 3.1 


$('#form1').on('submit', nameAndAge);
let nameList = [];
function nameAndAge(e){

//Declared an empty array

//To let the output retain
e.preventDefault();
//Declaring Properties for the object
let personList = {
	Name: document.getElementById('userName').value,
	Age: parseInt(document.getElementById('userAge').value)
}
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
/*for (let x = 0; x<nameList.length; x++){
	if(x == 0 || x == (nameList.length-1)){
		readable.innerHTML += Object.keys(nameList[x])[0]+ " : " + nameList[x].Name + ", " 
		+ Object.keys(nameList[x])[1] + " : " + nameList[x].Age + "<br>";
	} */






//JS activity 3.1

$('#form2').on('submit', itemInventory);
let inventoryList = [];
function itemInventory(e){

//Declared an empty array

//To let the output retain
e.preventDefault();
//Declaring Properties for the object
let itemList = {
	Item_Name: document.getElementById('itemName').value,
	Stock: parseInt(document.getElementById('itemStock').value),
	Price: parseFloat(document.getElementById('itemPrice').value)
}
//To pass the object into the Array
inventoryList.push(itemList);
document.querySelector('form').reset();

console.log('added' , {inventoryList} );
var text ="";
let pre = document.querySelector('#list pre')
for (let x = 0; x<inventoryList.length; x++){
	text+=`Item Name: ${inventoryList[x].Item_Name} , Stock: ${inventoryList[x].Stock}, Price: ${inventoryList[x].Price} `+ '\n';
}
pre.innerText = (text);
console.log(inventoryList[0].Stock* inventoryList[0].Price);
var sum=0;
var totalPrice=[];
var text2="";
let tally = document.querySelector('#tally pre')
document.getElementById('calculate').onclick = function(){
	for( var x in inventoryList){

		product = (inventoryList[x].Stock)*(inventoryList[x].Price);
		text2 += `${inventoryList[x].Item_Name} will have a total value of ${calculate}. <br>`;

	}
	sum+=calculate;
	tally.innerText = (text2);
}

}
