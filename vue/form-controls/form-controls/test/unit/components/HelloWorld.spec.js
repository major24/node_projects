import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld, {
    propsData: {},
    stubs: {
      RouterLink: RouterLinkStub
    }
  })
  // console.log(wrapper.html())

  it('Should render correct contents', () => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.html()).toContain('Welcome to Your Vue.js App')
  })
})
