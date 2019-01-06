import { Component, Prop } from '@stencil/core';


@Component({
 tag: 'show-person-info',
 shadow: true
})
export class ShowPersonInfo {
  @Prop() name: string;
  //@State() _name: string;

  componentWillLoad(){
    console.log('show-msg-componentWillLoad()');
    //this._name = this.name;
  }


  render() {
    return (
      <div>
        <h3>Name: {this.name} </h3>
      </div>
    );
  }
}