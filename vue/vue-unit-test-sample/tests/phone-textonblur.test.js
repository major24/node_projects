import { mount, shallowMount } from '@vue/test-utils'
import PhonePage from '../src/phonePage'

describe('PhonePage', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(PhonePage, {
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div>')
  });

  it('set correct phone number and ensure onblur is triggered with no errors', () => {
    // console.log(wrapper.html())
    wrapper.find('input').setValue('4161112233');
    wrapper.find('input').trigger('blur');
    expect(wrapper.html()).toContain('<span></span>');
  })

  it('set invalid phone number and expect error', () => {
    wrapper.find('input').setValue('abcdef');
    wrapper.find('input').trigger('blur');
    expect(wrapper.html()).toContain('<span>Invalid phone number!</span>');
  })

})


