import { Component, Prop, State, Watch } from '@stencil/core';
import { Address } from './address';

@Component({
 tag: 'ctx-address-edit',
 shadow: true
})
export class CtxAddressEdit {
  @Prop() address: string;
  @State() _address: Address = {};

  componentWillLoad(){
    console.log('edit-componentWillLoad()');
    console.log(this.address);
    this.populateAddress(this.address);
  }

  componentDidLoad(){
    console.log('edit-componentDidLoad()');
  }

  componentWillUpdate(){
    console.log('edit-componentWillUpdate()');
    console.log(this.address);
  }

  componentDidUpdate(){
    console.log('edit-componentDidUpdate()');
  }

    @Watch('address')
    watchHandler(nv: string, ov: string){
      console.log('wtch=' + nv + ov);
      this.populateAddress(nv);
    }

    populateAddress(adr: string){
      this._address = JSON.parse(adr);
    }


  render() {
    return (
      <div>
        <h3>Address</h3>
        <p>Address Debug: {this.address}</p>
        <div>
            Address Line1:
            <input type="text" id="address-line1" 
                value={this._address.addressLine1} />
        </div>
        <div>
            City:
            <input type="text" id="city" 
                value={this._address.city} />
        </div>
        <div>
            State:
            <input type="text" id="state" 
                value={this._address.state} />
        </div>
        <div>
            PostCode:
            <input type="text" id="post-code" 
                value={this._address.postcode} />
        </div>
        <div>
            <button>Cancel</button>
            <button>Save</button>
        </div>

      </div>
    );
  }
}