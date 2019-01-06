import { Component, Prop } from '@stencil/core';

@Component({
 tag: 'phone-display',
 shadow: true
})
export class PhoneDisplay {
  @Prop() phoneType: string;
  @Prop() phoneNumber: string;
  //@State() _data: any;

  componentWillLoad(){
    console.log('phone-display-componentWillLoad()');
  }


  render() {
    return (
      <div>
        <span>
          {this.phoneType}
        </span>
        <span id="phone-number">
          {this.phoneNumber}
        </span>
      </div>
    );
  }
}
