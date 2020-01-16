var names = null;

var heading = document.querySelector("h1");
console.log("Name Generator heading", heading);

var button = document.querySelector("#generate-name-btn");
console.log("Button that generates a name", button);

button.onclick = function () {
	//this code runs when the button is clicked
	var h2 = document.querySelector("h2");

	// get a random number
	// use the random number as the index to pick a random name
	var n = Math.floor(Math.random() * names.length);
	h2.innerHTML = names[n];

	//INSERT A NEW ELEMENT
	//1. create the new element
	var newListItem = document.createElement("li");
	newListItem.innerHTML = names[n];

	//2. put the new child element into parent element(query it)
  var historyList = document.querySelector("#history-list");
  console.log("the history list of previous names", historyList);
  historyList.appendChild(newListItem);

};


fetch("https://api.myjson.com/bins/lr20e").then(function (response) {
	response.json().then(function (namesJSON) {
		//data now ready: save into our global variable to be used
		names = namesJSON;
	});


});
