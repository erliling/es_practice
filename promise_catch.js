
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error!");
    }, 1000);
})

// method1, then method without first func
// p.then (function(value) {}, function(reason) {
//     console.error(reason);
// })

// method2, catch method
p.catch ((reason) => {
    console.error(reason);
})