import { Component, Prop } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
 tag: 'phone-edit',
 shadow: true
})
export class PhoneEdit {
  @Prop() phoneType: string;
  @Prop() phoneNumber: string;

  @Event() onChangePhoneNumber: EventEmitter;

  componentWillLoad(){
    console.log('phone-edit-componentWillLoad()');
  }


handleChange(event) {
  const text = event.target.value;
  console.log(`in handle change: ${text} - ${this.phoneType}`);
  // validate..
  //Format: {description: "Home", number: "4169997777", isPrimary: false}
  const result = `{"description": "${this.phoneType}", "number": "${text}", "isPrimary": true}`;
  this.onChangePhoneNumber.emit(result);  // Emit event
}


  render() {
    return (
      <div>
        <span>
          {this.phoneType}
        </span>
        <span>
          <input type="text" 
            id="phone-number"
            value={this.phoneNumber}
            onInput={(event) => this.handleChange(event)} />
        </span>
      </div>
    );
  }
}