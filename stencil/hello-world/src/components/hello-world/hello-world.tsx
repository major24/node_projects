import { Component, Prop, Method, State } from '@stencil/core';

@Component({
 tag: 'hello-world',
 styleUrl: 'hello-world.scss',
 shadow: true
})
export class HelloWorld {
  @Prop() name: string;
  //@Prop() homeAddress: any;

  @Method() showPrompt() {
    console.log('in showPrompt mtd');
  }

  componentWillLoad(){
    console.log('componentWillLoad()')
  }

  componentDidLoad(){
    console.log('componentDidLoad()')
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()')
  }

  @State() searchItem: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.searchItem);
    // send data to our backend
  }

  handleChange(event) {
    this.searchItem = event.target.value;
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
        <div id="prompt">..</div>
      </div>
    );
  }
}