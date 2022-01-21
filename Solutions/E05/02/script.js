setInterval(incList, 1000);

const tabelle = document.getElementById('tabelle');
const add = document.getElementById('add');
add.addEventListener('click', addRedner);
const input_add =  document.getElementById('input_add');

var list_names = [];
var list_count = [];
var current = -1;

incList();

function addRedner(event) {
	var name = input_add.value;	
	list_names.push(name);
	list_count.push(0); 
	current = list_names.length - 1;
	const newItem = document.createElement('li');
	const newName = document.createElement('p');
	newName.innerHTML = name;
	newItem.append(newName);
	const newTime = document.createElement('p');
	newTime.setAttribute("id", "t" + current);
	newTime.innerHTML = 0;
	newItem.append(newTime);
	const newButton = document.createElement('button');
	const c = current;
	newButton.addEventListener('click', function() {current = c});
	newButton.innerHTML = "Reden";
	newItem.append(newButton);
	tabelle.append(newItem);
}

function incList() {
	if (current != -1) {
		list_count[current]++;
		displayList();
	}
}

function displayList() {
	const item = document.getElementById('t' + current);
	item.innerHTML = list_count[current];
}