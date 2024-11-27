
// pass one functions with two params, resolve and reject
const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let err = "data read error";
        // reject(err);
        resolve('my data');
    }, 1000);
  });

  // pass two functions to handle resolve and reject
  // return as none promise obj
//   const result = p.then(
//     function (value) {
//       console.log(value);
//       return 'erli';
//     },
//     function (reason) {
//       console.warn(reason);
//     }
//   );

//   console.log(result);

  // return as promise obj
  const result = p.then(
    function (value) {
        console.log(value);

        // promise state: fulfilled, result: 'hello erli'
        // return 'hello erli';

        // promise state: fulfilled, result: 'ok'
        // promise state: rejected, result: 'error'
        return new Promise ((resolve, reject)=>{
            resolve('ok');
            // reject('error');
        });

        // promise state: rejected, result: Error...
        // throw new Error("error!!");

    },
    function (reason) {
      console.warn(reason);
    }
  ).then(value=> {
    console.log(value)
    return new Promise ((resolve, reject)=>{
        resolve('ok2');
        // reject('error');
    });
  }).then(value => {
    console.log(value)
    return new Promise ((resolve, reject)=>{
        resolve('ok3');
        // reject('error');
    });
  });

  console.log(result);