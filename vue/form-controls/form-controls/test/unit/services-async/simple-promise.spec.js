import f2 from '@/services-async/simple-promise'

describe('Simple-Promise Async.js', () => {
  it('Should test asycn f2..', async () => {
    const res = await f2()
    expect(res).toBe('promise done after .5 ms!')
  })
})
