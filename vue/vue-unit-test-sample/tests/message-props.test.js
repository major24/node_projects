import { shallowMount } from '@vue/test-utils'
import Message from '../src/message'


describe('Message.vue', () => {
  // Now mount the component and you have the wrapper
  // testing property
  const wrapper = shallowMount(Message, {
    propsData: {
        title: '',
        message: {
            firstmsg: '',
            secondmsg: ''
        }
    }
  })

  it('Then has a title property title with default value of empty', () => {
      expect(wrapper.props().title).toBe('');
  })

  it('renders the title property with default value', () => {
    expect(wrapper.html()).toContain('<span class="title"></span>')
  })

  it('renders the message property with default value', () => {
    const el = wrapper.find('.message');
    expect(el.html()).toContain('<span class="message"> </span>')
  })

});

describe('Message.vue', () => {
    // Now mount the component and you have the wrapper
    // testing property
    const wrapper = shallowMount(Message, {
      propsData: {
          title: 'My Message Board',
          message: {
              firstmsg: 'Welcome',
              secondmsg: ''
          }
      }
    })

    it('Then has a message property title with passed in value', () => {
        expect(wrapper.props().title).toBe('My Message Board');
    })

    it('renders the title property with passed in', () => {
      expect(wrapper.html()).toContain('<span class="title">My Message Board</span>')
    })

    it('renders the messgage property passed in', () => {
      const el = wrapper.find('.message');
      expect(el.html()).toContain('<span class="message">Welcome </span>')
    })

  });

