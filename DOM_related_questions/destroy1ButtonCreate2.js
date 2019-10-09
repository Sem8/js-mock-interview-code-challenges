/* 1. Have a div with class 'doubleHolder' with button element as child inside with class 'double'.
2. Grab div with class 'doubleHolder' from DOM and add a click event listener to it. 
3. The callback function in the click event listener will take e as a parameter have the following logic.
4. Make an if statement to check if e.target (what we clicked on) has classList called 'double' with e.target.classList.contains
method. If so, create a new button element with createElement method and set it to a variable called btn1.
5. For the new btn1 button created, give it the same class name as the origin button, 'double' with setAttribute method which
takes attribute name which is 'class' as first parameter and attribute value which is 'double' as second parameter. 
6. Give the button btn1 a name with innerHTML method.
7. Repeat the above steps to create another button with the same attributes as above and set this button to a variable called
btn2.
8. use the 'this' keyword to refer to the parent DOM object which is the div element with 'doubleHolder' class and append the 
two newly created buttons using appendChild method.
9. Again, use 'this' keyword to remove the original button from the parent div using removeChild method.  
*/

<div id="doubleHolder">
  <button class="double">button</button>
</div>;

document.getElementById("doubleHolder").addEventListener("click", e => {
  if (e.target.classList.contains("double")) {
    let btn1 = document.createElement("button");
    btn1.setAttribute("class", "double");
    btn1.innerHTML = "buttonA";

    let btn2 = document.createElement("button");
    btn2.setAttribute("class", "double");
    btn2.innerHTML = "buttonB";

    this.appendChild(btn1);
    this.appendChild(btn2);
    this.removeChild(e.target);
  }
});
