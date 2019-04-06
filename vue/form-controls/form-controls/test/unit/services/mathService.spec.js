import * as mhSrv from '@/services/mathService'
import * as math from '@/services/math'

describe('MathService.js', () => {
  it('Should use original math service for doAdd', () => {
    expect(mhSrv).toBeTruthy()
    expect(mhSrv.doAdd(5, 4)).toEqual(9)
  })

  it('Should use mock math service for doAdd', () => {
    const addMock = jest.spyOn(math, 'add')
    // override the implementation
    addMock.mockImplementation(() => 15)
    expect(mhSrv.doAdd(5, 5)).toEqual(15)
  })
})
