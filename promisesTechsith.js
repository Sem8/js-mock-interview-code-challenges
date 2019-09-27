let cleanRoom = function () {
    return new Promise(function(resolve, reject) {
        resolve('Cleaned the room');
    });    
};

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' remove garbage');
    });
};

let winIceCream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' won Ice cream');
    });
};

// regular promise:
cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return winIceCream(result);
}).then(function(result) {
    console.log('finished ' + result);
});


// // Promise.all
// Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function(messages){
//     // console.log( messages + ' all finished');
//     return messages;
// });