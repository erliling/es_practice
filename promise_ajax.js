
var XMLHttpRequest = require('xhr2');
//method1
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.apiopen.top/api/getImages");
// xhr.send();

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             console.log(xhr.response);
//         } else {
//             console.error(xhr.status);
//         }
//     }
// }

//method2
const p = new Promise(function(resolve, reject){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.apiopen.top/api/getImages");
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
    }
});

p.then(function(value) {
    console.log(value);
}, function(reason) {
    console.error(reason);
});
