const fs = require('fs');

function readFile1() {
    return new Promise(function(resolve, reject) {
        fs.readFile("notes.rtf", (err, data)=> {
            if(err) reject(err);
            resolve(data);
        })
    });
}
function readFile2() {
    return new Promise(function(resolve, reject) {
        fs.readFile("notes.rtf", (err, data)=> {
            if(err) reject(err);
            resolve(data);
        })
    });
}
function readFile3() {
    return new Promise(function(resolve, reject) {
        fs.readFile("notes.rtf", (err, data)=> {
            if(err) reject(err);
            resolve(data);
        })
    });
}

async function main() {
    let file1 = await readFile1();
    let file2 = await readFile2();
    let file3 = await readFile3();

    console.log(file1.toString());
    console.log(file2.toString());
    console.log(file3.toString());
}

main();