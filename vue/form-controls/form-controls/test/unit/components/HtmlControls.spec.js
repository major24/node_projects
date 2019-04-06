import { shallowMount } from '@vue/test-utils'
import HtmlControls from '@/components/HtmlControls'

describe('When HtmlControls.vue loads...', () => {
  const wrapper = shallowMount(HtmlControls, {
    propsData: {},
    stubs: {
    }
  })
  // console.log(wrapper.html())

  it('Should render correct title', () => {
    expect(wrapper).toBeTruthy()
    expect(wrapper.html()).toContain('Html Controls')
  })

  it('Should contain first name input', () => {
    const fname = wrapper.find('#fname')
    // console.log(fname.html())
    expect(fname).toBeTruthy()
  })

  it('Should contain last name input', () => {
    const lname = wrapper.find('#lname')
    expect(lname).toBeTruthy()
  })
})

describe('When user data sets up for input controls...', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HtmlControls, {
      propsData: {},
      stubs: {
      }
    })
    wrapper.setData({
      user: {
        'firstName': 'John',
        'lastName': 'Jonathan'
      }
    })
  })

  it('Should set user data first name', () => {
    expect(wrapper.vm.user.firstName).toBe('John')
  })

  it('Should set user data last name', () => {
    expect(wrapper.vm.user.lastName).toBe('Jonathan')
  })

  it('Should set input first name', () => {
    const fname = wrapper.find('#fname')
    expect(fname.element.value).toBe('John')
  })

  it('Should set input last name', () => {
    const lname = wrapper.find('#lname')
    expect(lname.element.value).toBe('Jonathan')
  })

  it('Should render computed property full name correctly', () => {
    const fullname = wrapper.find('#fullname')
    expect(fullname.html()).toContain('Full Name: (computed) John Jonathan')
  })
})

describe('When input controls data changes...', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HtmlControls, {
      propsData: {},
      stubs: {
      }
    })
    wrapper.setData({
      user: {
        'firstName': 'Reynold',
        'lastName': 'Smith'
      }
    })
  })

  it('Should set user data first name', () => {
    expect(wrapper.vm.user.firstName).toBe('Reynold')
  })

  it('Should render first name correctly after input change', () => {
    const fname = wrapper.find('#fname')
    fname.element.value = 'Reynold2424'
    expect(fname.element.value).toBe('Reynold2424')
  })

  it('Should render computed property full name correctly after data state change', () => {
    const fullname = wrapper.find('#fullname')
    expect(fullname.html()).toContain('Full Name: (computed) Reynold Smith')
    wrapper.setData({
      user: {
        'firstName': 'Reynold9000'
      }
    })
    expect(fullname.html()).toContain('Full Name: (computed) Reynold9000 Smith')
  })
})

describe('When HtmlControls loads sets up province radio buttons...', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HtmlControls, {
      propsData: {},
      stubs: {
      }
    })
    wrapper.setData({
      user: {
        'firstName': 'Reynold',
        'lastName': 'Smith',
        'province': 'ON'
      }
    })
  })

  it('Should find selected province in correct selection control', () => {
    const rdo = wrapper.find('#ON')
    // console.log(ont.html())
    expect(rdo.element.value).toBe('ON')
    expect(rdo.element.checked).toBe(true)
  })

  it('Should not check non selected control', () => {
    const rdo = wrapper.find('#BC')
    expect(rdo.element.value).toBe('BC')
    expect(rdo.element.checked).toBe(false)
  })

  it('When province selected control is clicked', () => {
    const rdo = wrapper.find('#QC')
    rdo.trigger('click')
    expect(wrapper.vm.user.province).toBe('QC')
  })
})

describe('When HtmlControls loads sets up programming language checkboxes...', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HtmlControls, {
      propsData: {},
      stubs: {
      }
    })
    wrapper.setData({
      user: {
        'firstName': 'Reynold',
        'lastName': 'Smith',
        'languages': ['JV', 'JS']
      }
    })
  })

  it('Should find checkbox set correctly for java lang', () => {
    const chk = wrapper.find('#JV')
    expect(chk.element.value).toBe('JV')
    expect(chk.element.checked).toBe(true)
  })

  it('Should find checkbox set correctly for Javascript lang', () => {
    const chk = wrapper.find('#JS')
    expect(chk.element.value).toBe('JS')
    expect(chk.element.checked).toBe(true)
  })

  it('Should find checkbox not set for python lang', () => {
    const chk = wrapper.find('#PY')
    expect(chk.element.value).toBe('PY')
    expect(chk.element.checked).toBe(false)
  })

  it('When checkbox for Go Lang is clicked then set lang', () => {
    const chk = wrapper.find('#GO')
    chk.trigger('click')
    expect(chk.element.value).toBe('GO')
    expect(chk.element.checked).toBe(true)
  })
})

describe('When phone number control is validated...', () => {
  let wrapper
  const errorPhone = 'Invalid number. Should be 10 digits and not 800 number.'

  beforeEach(() => {
    wrapper = shallowMount(HtmlControls, {
      propsData: {},
      stubs: {
      }
    })
    wrapper.setData({
      user: {
        'firstName': 'John',
        'lastName': 'Jonathan',
        'phone': ''
      }
    })
  })

  it('Then enter a correct phone and expect no error', () => {
    const phone = wrapper.find('#phone')
    phone.element.value = '4162223434'
    phone.trigger('blur')
    expect(wrapper.vm.errorMessage.phone).toBe('')
  })

  it('Then enter an incorrect phone and expect error', () => {
    const phone = wrapper.find('#phone')
    phone.element.value = '41622'
    phone.trigger('blur')
    expect(wrapper.vm.errorMessage.phone).toBe(errorPhone)
  })

  it('Then enter an incorrect area code and expect error', () => {
    const phone = wrapper.find('#phone')
    phone.element.value = '8002221111'
    phone.trigger('blur')
    expect(wrapper.vm.errorMessage.phone).toBe(errorPhone)
  })
})

describe('When callme selection loads...', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HtmlControls, {
      propsData: {},
      stubs: {
      }
    })
    wrapper.setData({
      user: {
        'firstName': 'John',
        'lastName': 'Jonathan',
        'callme': true
      }
    })
  })

  it('Then it set the user preference', () => {
    const callme = wrapper.find('#mob-yes')
    expect(callme.element.checked).toBe(true)

    const callmeno = wrapper.find('#mob-no')
    expect(callmeno.element.checked).toBe(false)
  })

  it('When callme is set to no, then set value', () => {
    const callmeno = wrapper.find('#mob-no')
    callmeno.trigger('click')
    expect(callmeno.element.checked).toBe(true)
  })
})
