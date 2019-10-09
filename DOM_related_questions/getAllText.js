/* 1. Declare a function called getAllText and inside declare an empty array called allText.
2. Declare an inner function called getAllNodes. 
3. Make an if statement inside the inner function, check if node exists, child nodes of the node exists and child nodes are of length 1 or more
If so, make a recursion call for the child nodes.
4. Else, (if child nodes don't exist where we've reached the last child node), push the node value of the node into the allText array.
5. Outside the inner getAllNodes function, call the function with the node parameter from the outer function passed as an argument into this
inner function.
6. return the allText array with the join method to turn the text elements into a string
 */
const getAllText = node => {
  let allText = [];

  function getAllNodes(node) {
    if (node && node.childNodes && node.childNodes.length) {
      for (let i = 0; i < node.childNodes.length; i++) {
        getAllNodes(node.childNodes[i]);
      }
    } else {
      allText.push(node.nodeValue);
    }
  }
  getAllNodes(node);
  return allText.join(" ");
};
