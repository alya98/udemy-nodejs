console.log('\nstarting app');

setTimeout(() => {
  console.log('first setTimeout')
}, 101)

setTimeout(() => {
  const array = [];
  const start = Date.now();
  for(let i =0; i<10000; i++){
    array[i] = Math.pow(Math.random()*20, Math.random()*30);
  }
  const finish = Date.now();
  const result = finish-start;
  console.log('second setTimeout')
  console.log(result)
}, 100)

setImmediate(() => {
  console.log('setImm');
})
setTimeout(() => {
  const array = [];
  const start = Date.now();
  for(let i =0; i<10000; i++){
    array[i] = Math.pow(Math.random()*20, Math.random()*30);
  }
  const finish = Date.now();
  const result = finish-start;
  console.log('third setTimeout');
  console.log(result)
}, 0)


Promise.resolve(5).then(console.log);

console.log('finishing  app');