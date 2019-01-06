import { Component, Prop } from '@stencil/core';

@Component({
 tag: 'my-list-item',
 shadow: true
})
export class MyListItem {
  @Prop() data: string;

  componentDidLoad(){
    console.log('mylist-item-componentDidLoad()');
  }

  render() {
    return (
      <div>
        <h3>{this.data}</h3>
      </div>
    );
  }
}