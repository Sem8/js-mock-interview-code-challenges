// What is the best way to create a DOM element? Set innerHTML or use createElement?

// innerHTML
let ul = document.getElementById('my-list');
ul.innerHTML = `<li>this is a list</li>`;

// createElement:
let li = document.createElement('li');
let textNode = document.createTextNode('this is the only list');
li.appendChild(textNode);
ul.appendChild(li); 
