import { shallowMount } from '@vue/test-utils'
import UserPage from '@/components/UserPage'

import * as math from '../../../src/services/math'
import * as userSrv from '../../../src/services/userService'

describe('UserPage.vue', () => {
  let wrapper
  math.add = jest.fn()
  math.subtract = jest.fn()

  beforeEach(() => {
    wrapper = shallowMount(UserPage, {
      propsData: {},
      stubs: {
      }
    })
  })

  describe('When user page loads...', () => {
    it('Should render correct contents', () => {
      expect(wrapper).toBeTruthy()
    })
  })

  describe('When Math Service is used', () => {
    it('And add method is called', () => {
      wrapper.vm.onAdd(6, 9)
      expect(math.add).toHaveBeenLastCalledWith(6, 9)
    })

    it('And subtract method is called', () => {
      wrapper.vm.onSubtract(10, 4)
      expect(math.subtract).toHaveBeenLastCalledWith(10, 4)
    })
  })

  describe('When User Service is used', () => {
    it('And getSampleData method is called', () => {
      userSrv.getSampleData = jest.fn()
      wrapper.vm.getSampleData()
      expect(userSrv.getSampleData).toHaveBeenCalled()
    })

    // sync call ...
    it('And getSampleData method is called', () => {
      userSrv.getSampleData = jest.fn()
      userSrv.getSampleData.mockReturnValue('Welcome to test')

      wrapper.vm.getSampleData()
      expect(userSrv.getSampleData).toHaveBeenCalled()

      const msgDiv = wrapper.find('#msg')
      // console.log(msgDiv.text())
      expect(msgDiv.text()).toEqual('Welcome to test')
    })
  })

  // async test...
  describe('When User Service is used for api calls', () => {
    it('And getUsers API method is called', () => {
      wrapper.vm.getUsers()
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.users[0].name).toEqual('Steve Jonathan (mock)')
      })
    })
  })
})
