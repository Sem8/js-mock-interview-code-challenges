// BAD practice
let list = ["foo", "bar", "bax"];
let listElement;
for (let i = 0; i < list.length; i++) {
  listElement = document.createElement("li");
  let text = document.createElement(list[i]);
  listElement.appendChild(text);
  document.body.appendChild(listElement);
}

// GOOD practice
let list = ["foo", "bar", "bax"];
let listElement;
let text;
let fragment;
for (let i = 0; i < list.length; i++) {
  fragment = document.createDocumentFragment();
  listElement = document.createElement("li");
  text = document.createElement(list[i]);
  listElement.appendChild(text);
  fragment.appendChild(listElement);
}
document.body.appendChild(fragment);



