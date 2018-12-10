import { Component, Prop, Method } from '@stencil/core';

@Component({
 tag: 'hello-world',
 styleUrl: 'hello-world.scss',
 shadow: true
})
export class HelloWorld {
  @Prop() name: string;

  @Method() showPrompt() {
    console.log('in mtd');
    //document.getElementById('prompt').innerHTML = 'aaa';
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Name: {this.name}</p>
        <div id="prompt">..</div>
      </div>
    );
  }
}