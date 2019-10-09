// Add event listener to body object
document.querySelector("body").addEventListener("click", e => {
  console.log("body clicked", e.target);
});

// add event listener to window object
window.onclick = e => {
  console.log("you clicked: ", e.target);
};
