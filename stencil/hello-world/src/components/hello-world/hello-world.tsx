import { Component, Prop, Method, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
 tag: 'hello-world',
 styleUrl: 'hello-world.scss',
 shadow: true
})
export class HelloWorld {
  @Prop() name: string;
  @State() searchItem: string;
  @Event() searchStarted: EventEmitter;


  @Method() showPrompt() {
    console.log('in showPrompt mtd');
  }

  componentWillLoad(){
    console.log('componentWillLoad()');
    console.log(this.name);
  }

  componentDidLoad(){
    console.log('componentDidLoad()');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()');
    console.log(this.name);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');
    console.log(this.name);
  }



  handleSubmit(e) {
    e.preventDefault()
    console.log(this.searchItem);
    this.searchStarted.emit(this.searchItem);  // Emit event
    // send data to our backend
  }

  handleChange(event) {
    this.searchItem = event.target.value;
    console.log(event);
    console.log(this.searchItem);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Name: {this.name}</p>

        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
          Search: <input type="text"
              id="search"
              value={this.searchItem}
              onInput={(event) => this.handleChange(event)} /> (@state value)

          <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}