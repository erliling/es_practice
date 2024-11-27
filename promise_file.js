// console.log("hello world");

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

const fs = require('fs');

//method1
// fs.readFile('notes.rtf', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
//     console.log(data.toString());
// })

//method2 - promise
const p = new Promise(function(resolve, reject) {
    fs.readFile("notes.rtf", (err, data)=> {
        if(err) reject(err);
        resolve(data);
    })
});

p.then(function(value){
    // console.log(value);
    console.log(value.toString());
}, function(reason){
    console.log("failed");
})
