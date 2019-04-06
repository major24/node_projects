// Does not work with Javascript loader..
// import { f2 } from './simple-promise';

const f2Service = async () => {
  const f2 = require('./simple-promise')
  console.log('in simple-promise service')
  const res = await f2()
  return res
}

// console test code
// f2Service().then((e) => {
//   console.log('>>>', e)
// })

module.exports = f2Service
