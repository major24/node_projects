import { Component, Prop, State, Watch } from '@stencil/core';
//import { Address } from './address';

@Component({
  tag: 'ctx-address-editable-container',
  styleUrl: 'ctx-address-container.scss',
  shadow: true
 })
 export class CtxAddressEditableContainer {
  @Prop() addresses: string;

  // Address[] = [
    //{"addressLine1":"10 Kng Str", "city": "Toronto", "state": "Alberta", "postcode": "E5T 9Y6"},
    //{"addressLine1":"20 Blr Str", "city": "Northyrk", "state": "Alberta", "postcode": "E5T 9Y6"}
  //];
  @State() _addresses: [] = [];

  @Prop() _editing: string = 'true';
  @Prop() cssToggle: string = 'hide-content';

  componentWillLoad(){
    console.log('adr-ctr-componentWillLoad()');
    const temp = `[
      {"addressLine1":"10 Kng Str", "city": "Toronto", "state": "Alberta", "postcode": "E5T 9Y6"},
      {"addressLine1":"20 Blr Str", "city": "Northyrk", "state": "Alberta", "postcode": "E5T 9Y6"}
    ]`;
    // simulate api call
    setTimeout(() => {
      this.populateAddresses(temp);
    },200);
    
  }

  @Watch('addresses')
  watchHandlerAddresses(nv: string, ov: string){
    console.log('wtch2=' + nv + ov);
    this.populateAddresses(nv);
  }


  populateAddresses(data: string) {
    console.log('wtch24=');
    try {
      let x = JSON.parse(data);
      this._addresses = Object.assign([], x);              //[...this._temp, x);
      console.log(this._addresses);
      this._addresses.map((a) => {
        console.log(JSON.stringify(a));
      })
    } catch (e){
      console.log('ERROR:' + e);
    }
  }

  edit() {
    console.log(this.cssToggle);
    if (this.cssToggle === 'show-content'){
        this.cssToggle = 'hide-content';
    } else {
        this.cssToggle = 'show-content';
    }
}


    render() {
      console.log('in render')
      return (
        <div>
        {this._addresses.map((e) => {
          console.log(e);
          return (<div class="addr-container-main">
                    <ctx-address address={JSON.stringify(e)}></ctx-address>
                    <button onClick={this.edit}>Edit22</button>
                    <ctx-address-test cssToggle={this.cssToggle}></ctx-address-test>
                    <hr />

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