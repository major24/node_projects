import { Component, Prop, State } from '@stencil/core';

@Component({
 tag: 'author-comp',
 shadow: true
})
export class AuthorComp {
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
    console.log('prop=' + this.name);
    console.log('state=' + this._name);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');
    console.log(this.name);
  }


  render() {
    console.log('in rndr');
    return (
      <div>
        <h3>Author</h3>
        <div>Author Name: {this.name}</div>
      </div>
    );
  }
} 