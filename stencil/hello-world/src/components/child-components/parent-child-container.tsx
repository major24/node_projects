import { Component, Prop, State } from '@stencil/core';

@Component({
 tag: 'parent-child-container',
 shadow: true
})
export class ParentChildContainer {
  @Prop() name: string;
  @State() _name: string;

  componentWillLoad(){
    console.log('componentWillLoad()');
    console.log(this.name);
    this._name = this.name;
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

  update() {
    console.log('in upd');
    this._name = "**Updated**";
  }

  render() {
    return (
      <div>
        <h2> --- Parent Child Container --- </h2>
        <parent-component name={this._name}></parent-component>

        <child-component-one name={this._name}></child-component-one>

        <p></p>
        <button onClick={() => this.update()}>Update from PC comp</button>
      </div>
    );
  }
}