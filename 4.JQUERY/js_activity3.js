// JS activity 3.1 


/*$('#form').on('submit', nameAndAge);

var nameList = [];
function nameAndAge(e){

		e.preventDefault();


	let personList = {
		Name: document.getElementById('userName').value,
		Age: document.getElementById('userAge').value
	}
	nameList.push(personList);
       
             document.querySelector('form').reset();

         
            console.log('added' , {nameList} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = JSON.stringify(nameList, '\t');


        }*/


	$('#form').on('submit', nameAndAge(e)){
		e.preventDefault();
	}

function nameAndAge (e) {
	//prevent actual submission
	

	//get the input values for age && name
	var name = $('#userName').val();
	var age = $('#userAge').val();

	//declare variables
	var final = $('#msg');
	var readable = $('#read');

	//declare empty array
	var nameList = [];
	//declare empty object
	var personList = {};

	//assign the inputs to the object keys
	person.name = name;
	person.age = age;
	//push the values to the array
	nameList.push(personList);

	//append in JSONized format
	final.append(JSON.stringify(nameList, null , 4));

	//append as in readable format
	for (let x  in nameList){
		readable.append(`Name: ${nameList[x].name} , Age: ${nameList[x].age} <br>`)
	}
}