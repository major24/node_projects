import f2 from '@/services-async/simple-promise'
import f2Service from '@/services-async/simple-promise-service'

// below uses REAL f2 async class to test the service function..
describe('Simple-Promise Service Async.js', () => {
  it('Should test async f2Service..', async () => {
    const res = await f2Service()
    expect(res).toBe('promise done after .5 ms!')
  })
})

describe('Simple-Promise MOCK f2 for Service Async.js', () => {
  it('Should test async f2Service..', async () => {
    // MOCK f2 class. dependant for f2Service
    const f2Mock = jest.fn(f2)
    f2Mock.mockResolvedValue(() => 'FOO-MOCK')
    const res = await f2Service()
    console.log(res.resolves)
    // expect(res).toBe('promise done after .5 ms!')
  })
})
