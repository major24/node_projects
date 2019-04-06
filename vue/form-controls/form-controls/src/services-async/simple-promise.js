// TO run this file manually, go into the /src/services-async
// $ node simple-promise.js

const f2 = async () => {
  let promise = new Promise((resolve, reject) => {
    console.log('in f2 real async method...')
    setTimeout(() => resolve('promise done after .5 ms!'), 500)
  })

  let result = await promise
  // wait till the promise resolves (*)
  // console.log(result); // "prints...!"
  return result
}

// local file testing only in command line
// expects a promise
// uncomment below lines to manually test ...
// f2().then((e) => {
//   console.log(e)
// })

module.exports = f2
