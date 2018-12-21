import { Component, Prop, State, Watch } from '@stencil/core';
import { Address } from './address';

@Component({
 tag: 'ctx-address',
 styleUrl: 'ctx-address.scss',
 shadow: true
})
export class CtxAddress {
  @Prop() address: string;
  @State() _address: Address = {};

  componentWillLoad(){
    console.log('adr-componentWillLoad()');
    console.log(this.address);
    this.populateAddress(this.address);
  }

  componentDidLoad(){
    console.log('adr-componentDidLoad()');
  }

  componentWillUpdate(){
    console.log('adr-componentWillUpdate()');
    console.log(this.address);
  }

  componentDidUpdate(){
    console.log('adr-componentDidUpdate()');
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
      <div class="addr-main">
        <h3>ctx-Address</h3>
        <div>Addr: {this._address.addressLine1}</div>
        <div>
          {this._address.city}, {this._address.state}, {this._address.postcode}

        </div>
      </div>
    );
  }
}