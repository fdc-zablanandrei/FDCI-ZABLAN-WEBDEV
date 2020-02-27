//Javascript Activity 4

function newHobby(){

	var newTxtHobby = document.getElementById("textToHobby");
	var addHobby = document.getElementById("add_list");

	if (newTxtHobby.style.display == "none") {
		newTxtHobby.style.display = "block";
		addHobby.innerHTML = "Save";
	}
	else {

		var htmlTag = "";
		hobbytext = document.getElementById('texto').value;

		htmlTag += '<div class="checkbox">';
		htmlTag += '<label>';
		htmlTag +=  '<input type="checkbox" class="hobby" name="hobbies" value="'+hobbytext+'">'+hobbytext;
		htmlTag += '</label>';
		htmlTag += '</div>';

		document.getElementById("hobby_table").innerHTML += htmlTag;

		newTxtHobby.style.display = "none";
		addHobby.innerHTML = "Add Hobby";

	}

}
			function countChecker() {
				
				count = document.getElementById('current');
				count.innerHTML = document.getElementById('comment').value.length;

			}







			function goOver() {
				profiles = document.getElementById("displayProfile");
				profileInput = document.getElementById("form1");
				profiles.style.display = "none";
				profileInput.style.display = "block";
			}

			var profileForm = document.getElementById("form1");

			profileForm.addEventListener('submit', function(event) {

				event.preventDefault();

				errorMessage = document.getElementById('validationspace');

				name = document.getElementById('name').value;
				gender = document.getElementById('gender').value;
				hobbyitems = document.querySelectorAll('.checkbox:checked');
				aboutMe = document.getElementById('comment').value;

				myHobbies = new Array(); 

				for (i = 0; i < hobbyitems.length; i++) {
					myHobbies.push(hobbyitems[i].value);
				}

				var profile = {
					Name: name,
					Gender: gender,
					Hobbies: hobbyitems,
					About: aboutMe 
				};

				checkObject = getText(form1);

				if (checkObject) {
					displayErrorMessage(checkObject);
					message="";
				}

				else {
					profiles = document.getElementById("displayProfile");
					profileInput = document.getElementById("form1");
					profiles.style.display = "block";
					profileInput.style.display = "none";
					
					for (key in form1) {

						document.getElementById('displayProfileInfo').innerHTML = "Hi " + "<strong>" +form1.name + "</strong>" + "<br>" + "Your gender is " + "<strong>" + profile.Gender + "</strong>" + "<br>" + "Your hobbies are " + profile.Hobbies + "<br>" + "Here's a little fact about yourself: " + profile.About;
					}
				}
			});

			function displayErrorMessage(errorMessage) {

				var titleDiv = document.getElementById("lblProfile");

				var checkSpan = document.getElementById("displayMessage");


				if (checkSpan != "undefined" && checkSpan !=null) {
					titleDiv.removeChild(checkSpan);

				}

				if (errorMessage != ""){

					var attributeType = document.createAttribute("class");
					attributeType.value = "alert alert-danger";
					titleDiv.attributes.setNamedItem(attributeType);				

					var message = document.createElement("span");
					message.innerHTML = errorMessage;
					document.getElementById("lblProfile").appendChild(message);

					var span = document.querySelector("span");
					span.setAttribute("id", "displayMessage");
				}

				else {
					var messageDisplay = document.getElementById("displayMessage");
					

					if (messageDisplay != "undefined" && messageDisplay !=null) {
						titleDiv.removeChild(messageDisplay);
						titleDiv.removeAttribute("class");
					}
				}

			}

