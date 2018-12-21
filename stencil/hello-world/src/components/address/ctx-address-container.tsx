import { Component, Prop, State, Watch } from '@stencil/core';
//import { Address } from './address';

@Component({
  tag: 'ctx-address-container',
  styleUrl: 'ctx-address-container.scss',
  shadow: true
 })
 export class CtxAddressContainer {
  @Prop() addresses: string;

  // Address[] = [
    //{"addressLine1":"10 Kng Str", "city": "Toronto", "state": "Alberta", "postcode": "E5T 9Y6"},
    //{"addressLine1":"20 Blr Str", "city": "Northyrk", "state": "Alberta", "postcode": "E5T 9Y6"}
  //];
  @State() _addresses: [] = [];

  @Prop() _editing: string = 'true';

  componentWillLoad(){
    console.log('adr-ctr-componentWillLoad()');
    const temp = `[
      {"addressLine1":"10 Kng Str", "city": "Toronto", "state": "Alberta", "postcode": "E5T 9Y6"},
      {"addressLine1":"20 Blr Str", "city": "Northyrk", "state": "Alberta", "postcode": "E5T 9Y6"}
    ]`;
    // simulate api call
    setTimeout(() => {
      this.populateAddresses(temp);
    },500);
    
  }

  @Watch('addresses')
  watchHandlerAddresses(nv: string, ov: string){
    console.log('wtch2=' + nv + ov);
    this.populateAddresses(nv);
  }


  populateAddresses(data: string) {
    //let x = JSON.parse(data);
    console.log('wtch24=');
    try {
      let x = JSON.parse(data);
      //this._temp = x.map((v) => {
        //return v;
      //})
      this._addresses = Object.assign([], x);              //[...this._temp, x);
      console.log(this._addresses);
      console.log('-----------');
      this._addresses.map((a) => {
        console.log(JSON.stringify(a));
      })
      console.log('-----------');
    } catch (e){
      console.log('ERROR:' + e);
    }
  }

  editAddress() {
    console.log('edit');
    this._editing = 'bb'; //!this._editing;
    //this._editing = Object.assign(Boolean, false);
    console.log(this._editing);
    //const el = document.getElementById('editables');
    //console.log(el);
  }

    render() {
      console.log('in render')
      return (
        <div>
          <div class={this._editing ? 'addr-container-editables-visible' : 'addr-container-editables-hidden'}>
            aaa-{this._editing}
          </div>
        {this._addresses.map((e) => {
          console.log(e);
          return (<div class="addr-container-main">
                    <ctx-address address={JSON.stringify(e)}></ctx-address>
                    <p>
                      <button onClick={this.editAddress}>Edit</button>
                    </p>
                    <span>aa-{this._editing}</span>
                    <div class={this._editing ? 'addr-container-editables-visible' : 'addr-container-editables-hidden'} id="editables">
                      <p>EdIT ABLE CONTENTS 1</p>
                      <p>EdIT ABLE CONTENTS 2</p>
                    </div>
                  </div>
                )
        })}
        </div>
      )
    }
}



//import { Address } from './address';
//import { CtxAddress } from './ctx-address';
/*
@Component({
 tag: 'ctx-address-container',
 shadow: true
})
export class CtxAddressContainer {
  @Prop() address: string;
  @Prop() addresses: Address[] = [
      {"addressLine1":"10 Kng Str", "city": "Toronto", "state": "Alberta", "postcode": "E5T 9Y6"},
      {"addressLine1":"20 Blr Str", "city": "Northyrk", "state": "Alberta", "postcode": "E5T 9Y6"},
    ];
  @State() _address: Address = {};

  componentWillLoad(){
    console.log('adr-ctr-componentWillLoad()');
    console.log(this.address);
    this.populateAddress(this.address);
  }

  componentDidLoad(){
    console.log('adr-ctr-componentDidLoad()');
  }

  componentWillUpdate(){
    console.log('adr-ctr-componentWillUpdate()');
    console.log(this.address);
  }

  componentDidUpdate(){
    console.log('adr-ctr-componentDidUpdate()');
  }

    @Watch('address')
    watchHandler(nv: string, ov: string){
      console.log('wtch=' + nv + ov);
      this.populateAddress(nv);
    }

    @Watch('addresses')
    watchHandlerAddresses(nv: string, ov: string){
      console.log('wtch2=' + nv + ov);
      //this.populateAddress(nv);
    }

    populateAddress(adr: string){
      this._address = JSON.parse(adr);
    }




  render() {
    return (
      <div>
        <h3>Address container</h3>
        <hr />
        {this.addresses.map((address) => {
            console.log('JJJ');
            console.log(JSON.stringify(address));
            <ctx-address address='{JSON.stringify(address)}'></ctx-address>
        })}
       <hr />

      </div>
    );
  }
}
*/