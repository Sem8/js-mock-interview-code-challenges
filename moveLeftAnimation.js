// How could you implement moveLeft animation?
const moveLeft = (element, distance) => {
    let left = 0;

    let frame = () => {
        left++;
        element.style.left = `${left}px`;

        if (left == distance) {
            clearInterval(timeId);
        }
    }

    let timeId = setInterval(frame, 10); // draw every 10ms    
}