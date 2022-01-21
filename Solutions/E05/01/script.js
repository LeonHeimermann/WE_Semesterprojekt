const innerHTML = document.getElementById('innerHTML');
const innerText = document.getElementById('innerText');
const textContent = document.getElementById('textContent');
const outerHTML = document.getElementById('outerHTML');

var list = [];

var time = performance.now();
innerHTML.innerHTML = '<p>Test1</p>';
list.push(performance.now() - time);

var time = performance.now();
innerText.innerText = 'Test2';
list.push(performance.now() - time);

var time = performance.now();
textContent.textContent = 'Test3';
list.push(performance.now() - time);

var time = performance.now();
outerHTML.outerHTML = '<div id=outerHTML><p>Test4</p></div>';
list.push(performance.now() - time);

const tabelle = document.getElementById('tabelle');
tabelle.innerHTML = "<ul>" + "<li>innerHTML: " + list[0] + " s</li>" + "<li>innerText: " + list[1] + " s</li>" + "<li>textContent: " + list[2] + " s</li>" + "<li>outerHTML: " + list[3] + " s</li>" + "</ul>";