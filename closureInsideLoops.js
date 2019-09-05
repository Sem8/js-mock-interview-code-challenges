// logs 0-9
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);        
    }, 10);
};

// logs 0-9
// for(var i = 0; i < 10; i++) {
//     setTimeout(console.log.bind(console, i), 10);
//   }


// Logs 10, ten times
// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i);  
//     }, 10);
// }

// Logs 10, ten times
// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);        
//     }, 10);
// };

