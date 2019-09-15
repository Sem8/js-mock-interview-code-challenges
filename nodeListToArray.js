// Turn a nodes list to an array to call array methods like forEach on a node list

let nodeList = document.querySelectorAll('.my-class');
let nodesArray = Array.prototype.slice.call(nodeList);

nodesArray.forEach((element, index) => {
    console.log(element, index);
});