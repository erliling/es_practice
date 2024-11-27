const fs = require('fs');

// method1
// fs.readFile('notes.rtf', (err, data1) => {
//     fs.readFile('1.rtf', (err, data2) => {
//         fs.readFile('2.rtf', (err, data3) => {
//             if(err) throw err;
//             // console.log(data);
//             let result = data1.toString() + '\r\n' 
//             + data2 + '\r\n' 
//             + data3;
//             console.log(result);
//         });
//     });
// });

// method2 promise
const p = new Promise((resolve, reject) => {
    fs.readFile('notes.rtf', (err, data) => {
        resolve(data);
    });
});
p.then(value => {
    // console.log(value.toString());
    return new Promise ((resolve, reject) => {
        fs.readFile('1.rtf', (err, data) => {
            //value.push(data)
            resolve([value, data]);
        });
    });
}).then(value => {
    // console.log(value.toString());
    return new Promise ((resolve, reject) => {
        fs.readFile('2.rtf', (err, data) => {
            value.push(data)
            // make sure this is value not data
            resolve(value);
            // resolve([value, data]);
        });
    });
}).then(value => {
    console.log(value.toString());
})
