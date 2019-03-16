import { shallowMount } from '@vue/test-utils'
import SumAction from '../src/sum-action'
// import * as extSrv from '../src/externalService'
// import * as math from '../src/math';

describe('SumAction', () => {
  // Now mount the component and you have the wrapper
  //const wrapper = shallowMount(SumAction, {})

  it('renders the correct markup', () => {
    //expect(wrapper.html()).toContain('<span class="sum">0</span>')
  })

  it('initial sum value to be zero', () => {
    // expect(wrapper.vm.sum).toBe(0)
  })

  it('button shoud trigger console log (spyon), but actually call add method in real service', () => {
    // const button = wrapper.find('button')
    // const spy = jest.spyOn(console, "log");

    // button.trigger('click');
    // expect(spy).toBeCalled();
    // expect(spy).toBeCalledWith(
    //    expect.stringContaining("add method is called.")
    // );
  })

  it('button shoud trigger and spyon add fn and should not trigger actual servcie', () => {
    // const button = wrapper.find('button')
    // math.add = jest.fn();
    
    // button.trigger('click');
    // expect(math.add).toBeCalled();
    // expect(math.add).toHaveBeenCalledWith(0, 0); // default value from comp
  })

  it('call directly, but stubed and should not call real service ', () => {
    // math.add = jest.fn();
    // // calling directly on the vue obj, without click event
    // wrapper.vm.add(4,5);
    // expect(math.add).toBeCalled();
    // expect(math.add).toHaveBeenCalledWith(4,5);
  })

  it('call directly, but stubed and should not call real service ', () => {
    //const mockFn = jest.fn().mockName(math.add);
   //     return 9;
   // });
    // math.add.mockReturnValue(9);

    //wrapper.vm.add(4,5);
    //expect(mockFn).toBeCalled();
    //expect(math.add).toHaveBeenCalledWith(4,5);
    //expect(math.add).toEqual(9);
  })

})