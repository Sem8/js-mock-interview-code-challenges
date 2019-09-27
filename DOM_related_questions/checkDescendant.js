// How could I verify whether one element is child of another?
/*Pseudocode:
1. Function takes in child and parent as input parameters
2. Have a while loop of while child has a parent node with parentNode method
3. Make if statement in while loop, check if child.parentNode is the parent then return true.
4. otherwise traverse up the tree into the root of the tree by setting the next child to the parentNode of the current child.
 */

const isDescendant = (child, parent) => {
    while(child.parentNode) {
        if (child.parentNode == parent) {            
        return true;
        } else {
            child = child.parentNode;
        }
    } 
    return false;
}