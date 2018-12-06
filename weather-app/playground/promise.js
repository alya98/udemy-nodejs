const asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a+b)
      } else {
        reject('arguments must be numbers')
      }
    }, 1500);
  });
}
asyncAdd(5,'44').then(res => {
  console.log('result: '+res)
  return asyncAdd(res, 33);
})
.then( res => console.log('result2: '+res))
.catch(error => console.log(error))

// const aPromise = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     resolve('kuku')
//     reject('error')
//   }, 2000);
// });

// aPromise.then((message)=>console.log(message), (error)=> console.log(error))