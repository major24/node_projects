import { mount, shallowMount } from '@vue/test-utils'
import Counter from './src/counter'


describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})



import PhonePage from './src/phonePage'

describe('PhonePage', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(PhonePage)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div>')
  });

  it('ensurs correct phone number is entered', () => {
    // console.log(wrapper.html())
    wrapper.find('input').setValue('4161112233');
    wrapper.find('input').trigger('blur');
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain('<span></span>');
  })

  it('ensurs invalid phone number is throwing error', () => {
    // console.log(wrapper.html())
    wrapper.find('input').setValue('abcdef');
    wrapper.find('input').trigger('blur');
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain('<span>Invalid phone number!</span>');
  })

})



