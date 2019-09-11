//  If you have a function that generates random number between 1 to 5 how 
// could u generate random number 1 to 7 by using that function?
const rand5 = () => {

    return 1 + Math.random() * 4;
}
// console.log(rand5());

const rand7 = () => {
    return 5 + rand5() / 5 * 2;
}

console.log(rand7());