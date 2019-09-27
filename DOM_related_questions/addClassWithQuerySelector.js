// How would you add a class to an element by query selector?
/*
1. Function will take in selector and class name as input parameters.
2. Select the selector with document.querySelector(selector).
3. Add class to the selected input using classList.add method. 
 */
const addQuerySelectorClass = (selector, className) => {
    let element = document.querySelector(selector);
    if (element) {        
    element.classList.add(className);
    }
}

// Remove class:
element.classList.remove('my-class');
// Toggle class: 
element.classList.toggle('my-class');

// Check if element contains a certain class:
element.classList.contains('my-class');