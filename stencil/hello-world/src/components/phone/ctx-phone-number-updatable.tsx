import { Component, Prop, State, Listen } from '@stencil/core';
//import { Phone } from './phone';

@Component({
 tag: 'ctx-phone-updatable',
 styleUrl: 'ctx-phone-number.scss',
 shadow: true
})
export class CtxPhoneUpdatable {
  // string input: '{ "description": "Home",  "number": "4163338899" }'
  @Prop() data: string;
  @State() _data: string; //Phone;
  @State() _cssShowHideDisp: string = "show-content";
  @State() _cssShowHideEdit: string = "hide-content";

  componentWillLoad(){
    console.log('componentWillLoad()');
    console.log(this.data);
    if (this.data) {
        //const dataIn = this.parseData(this.data);
        //this._data = this.validateData(dataIn);
        this._data = this.data;
        console.log(this._data);
    }
    // set CSS class
    //this._cssShowHide = this._isEditVisible === true ? 'show-content' : 'hide:content';
  }

  componentDidLoad(){
    console.log('componentDidLoad()');
    //console.log(this._element);
    //this._elEditPhone = this._element.shadowRoot.querySelector('#phone-edit');
    //console.log('------');
    //console.log(this._elEditPhone);
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');
  }

   // @Watch('data')
    //w//atchHandler(nv: string, ov: string){
      //console.log(`in watch-data updated: ${nv} -  ${ov}`);
      //this.parseData(nv);
    //}

    //parseData(data: string){
      //return JSON.parse(data);
    //}

    /*validateData(data: any){
        let ph = new Phone();
        if (data.description != null && data.description != ''){
            ph.description = data.description;
        }
        if (data.number == null || data.number == ''){
            ph.areaCode = "NA";
        } else {
            ph.areaCode = data.number.substring(0,3);
            ph.localNumber = data.number.substring(3,6);
            ph.lastFour = data.number.substring(6,10);
        }
        return ph;
    }*/

    editPhone(){
        //console.log(this._cssShowHide);
        this.toggleEditContent();
    }

    toggleEditContent() {
        if (this._cssShowHideDisp == "show-content") {
            this._cssShowHideDisp = "hide-content";
            this._cssShowHideEdit = "show-content"
        } else {
            this._cssShowHideDisp = "show-content";
            this._cssShowHideEdit = "hide-content";
        }
    }

    // listen on update phone number event from child component (phone-edit comp)
    @Listen('onPhoneUpdate')
    onPhoneUpdate(e) {
        console.log('in parent cntr');
        console.log(e.detail);
        // update display data
        this._data = e.detail;
        // update toggle
        this.toggleEditContent();
    }

  render() {
    return (
      <div>
          
        <div class="column">
            <span id="phone-display" class={this._cssShowHideDisp}>
                <ctx-phone-display 
                    data={this._data}>
                </ctx-phone-display>
            </span>
        </div>
        <div class={this._cssShowHideDisp}>
            <button id="edit-phone" onClick={() => this.editPhone()}>Edit</button>
        </div>
        <div >
            <span id="phone-edit" class={this._cssShowHideEdit}>
                <label>Enter a telephone number (in the form xxx-xxx-xxxx): </label>
                <ctx-phone-edit
                    data={this._data}>
                </ctx-phone-edit>
            </span>
        </div>
      </div>
    );
  }
}