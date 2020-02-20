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

//Form validations
var input = document.getElementById('form1');


if(checkForm(input)){
    alert("Error: Input is empty!");
}else {

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

//JS activity 3.2

$('#form2').on('submit', itemInventory);
//Declared an empty array
let inventoryList = [];
function itemInventory(e){

//To let the output retain
e.preventDefault();
//Declaring Properties for the object
let itemList = {
    Item_Name: document.getElementById('itemName').value,
    Stock: parseInt(document.getElementById('itemStock').value),
    Price: parseFloat(document.getElementById('itemPrice').value)
}

//Form validations
var input = document.getElementById('form2');
console.log(input);
if(checkForm(input)){
    alert("Error: Input is empty!");
}else {

//To pass the objects into the Array
inventoryList.push(itemList);
document.querySelector('form').reset();

console.log('added' , {inventoryList} );
var text ="";
let pre = document.querySelector('#list pre')

//Loop in order to display the Added entries of the list
for (let x = 0; x<inventoryList.length; x++){
    text+=`Item Name: ${inventoryList[x].Item_Name} , Stock: ${inventoryList[x].Stock}, Price: ${inventoryList[x].Price} `+ '\n';
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
        text2 += `${inventoryList[x].Item_Name} will have a total value of ${product}.` + '\n';

    }
    tally.innerText = (text2 + '\n' + 'Total Price for the items is Php' + totalPrice + `.`);
}
}
}

//FORM VALIDATION
/*function checkForm(param){
    // validation fails if the input is blank
    for(var i = 0; i < param.length - 1; i++){   
        //console.log(param);
        if(param.elements[i].value == ""){
            console.log("empty here");
            break;
            
            // return true;
            // break;
        }else{
            // validation was successful
            // return false;
            console.log(param.elements[i].value);
        }
    }
}*/
function checkForm(param){
    var emp = "";

    for(var i = 0; i < param.length-1; i++){ //loops the entire form fields and checks if there are empty values
        if(param.elements[i].value === ""){
            emp = true; //at least 1 empty field is found
            break;
        }else{
            emp = false; // field is not empty
        }
    }
    return emp;
}