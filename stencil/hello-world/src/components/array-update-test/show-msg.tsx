import { Component, Prop, State } from '@stencil/core';


@Component({
 tag: 'show-msg',
 shadow: true
})
export class ShowMsg {
  @Prop() data: string;
  @State() _data: string;

  componentWillLoad(){
    console.log('componentWillLoad()');
    this._data = this.data;
  }


  render() {
    return (
      <div>
        <h3>MSG: {this._data} </h3>
      </div>
    );
  }
}