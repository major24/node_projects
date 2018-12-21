import { Component, Prop, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
 tag: 'ctx-address-test',
 styleUrl: 'ctx-address-test.scss',
 shadow: true
})
export class CtxAddressTest {
  @Prop() name: string;
  @State() searchItem: string;
  @Prop() cssToggle: string;

  @Event() searchStarted: EventEmitter;

  componentWillLoad(){
    console.log('componentWillLoad()');
  }

  componentDidLoad(){
    console.log('componentDidLoad()');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');
  }

 

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.searchItem);
    this.searchStarted.emit(this.searchItem);  // Emit event
    // send data to our backend
  }

  handleChange(event) {
    this.searchItem = event.target.value;
    console.log(this.searchItem);
  }

  edit() {
      console.log(this.cssToggle);
      if (this.cssToggle === 'show-content'){
          this.cssToggle = 'hide-content';
      } else {
          this.cssToggle = 'show-content';
      }
  }

  render() {
      console.log('in render');
    return (
      <div>
        <h3>Address Edit!</h3>
        <button onClick={this.edit}>Edit</button>
        <p>cls: {this.cssToggle}</p>
        <div id="editable-address" class={this.cssToggle}>
            <p>aaaaa</p>
            <p>bbbbbbb</p>
        </div>
      </div>
    );
  }
}