import { Component, Prop } from '@stencil/core';

@Component({
 tag: 'book-comp',
 shadow: true
})
export class BookComp {
  @Prop() title: string;

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


  render() {
    return (
      <div>
        <div>Title: {this.title}</div>
      </div>
    );
  }
} 