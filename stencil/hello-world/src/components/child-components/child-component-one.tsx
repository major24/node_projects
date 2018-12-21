import { Component, Prop } from '@stencil/core';

@Component({
 tag: 'child-component-one',
 shadow: true
})
export class ChildComponentOne {
  @Prop() name: string;

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


  render() {
    return (
      <div>
        <h3>Child Comp!</h3>
        <p>Name: {this.name}</p>
      </div>
    );
  }
}