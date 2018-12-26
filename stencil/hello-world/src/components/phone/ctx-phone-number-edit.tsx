import { Component, Prop, State, Watch } from '@stencil/core';
import { Phone } from './phone';
import { Event, EventEmitter } from '@stencil/core';



@Component({
 tag: 'ctx-phone-edit',
 styleUrl: 'ctx-phone-number.scss',
 shadow: true
})
export class CtxPhoneEdit {
  // string input: '{ "description": "Home",  "number": "4163338899" }'
  @Prop() data: string;
  @State() _data: Phone;
  @State() _phoneNumer: string;
  @State() _description: string = "Phone";
  @Event() onPhoneUpdate: EventEmitter;

  private phoneDescTypes: string[] = ["Home", "Work", "Mobile"];

  componentWillLoad(){
    //console.log('componentWillLoad()');
    //console.log(this.data);
    if (this.data) {
        const dataIn = this.parseData(this.data);
        // assign phone description (Home/ MObile/ Work etc)
        if (dataIn.description != null && dataIn.description != ''){
          this._description = dataIn.description;
        }
        if (dataIn.number != null && dataIn.number != ''){
          this._phoneNumer = dataIn.number;
        }       
    }
  }

  componentDidLoad(){
    //console.log('edit-componentDidLoad()');
  }

  componentWillUpdate(){
    //console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
    //console.log('componentDidUpdate()');
  }

    @Watch('data')
    watchHandler(nv: string){
      //console.log(`in watch-data updated: ${nv} -  ${ov}`);
      this.parseData(nv);
    }

    parseData(data: string){
      return JSON.parse(data);
    }

    validateData(data: any){
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
    }

    // validate and upate (emit data)
    updatePhone() {
      //e.preventDefault()
      console.log('inedit..' + this._phoneNumer);
      const updatedPhoneData = `{ "description": "${this._description}",  "number": "${this._phoneNumer}" }`;
      this.onPhoneUpdate.emit(updatedPhoneData);  // Emit event
    }

    handleChange(event) {
      const tmp = event.target.value;
     // console.log(tmp);
      //if (tmp.length > 6)
      //const tmp2 = `${tmp.substring(0,3)}-${tmp.substring(3,6)}`;
      this._phoneNumer = this.formatPhoneNumber(tmp);
    }

    handleKeyPress(event) {
      const tmp = event.target.value;
      console.log('PR=' + tmp);
      if (tmp == 'a') return false;
      //if (tmp.length > 6)
      //const tmp2 = `${tmp.substring(0,3)}-${tmp.substring(3,6)}`;
      //this._phoneNumer = this.formatPhoneNumber(tmp);
    }

    handleSelect(event) {
     // console.log(event.target.value);
      this._description = event.target.value;
    }

    formatPhoneNumber(text) {
      //if (text === '') return '';
      if (text.length > 7){
        return `${text.substring(0,3)}-${text.substring(3,6)}`;
      }
    }

  render() {
    return (
      <div>
        <span id="ctx-phone-label" class="ctx-phone-label">
        <select onInput={(event) => this.handleSelect(event)}>
            <option value="">Select</option>
            {this.phoneDescTypes.map((e) => {
              //console.log(e);
              return <option value={e} selected={this._description === e}>{e}</option>
            })}
          </select>
        </span>
        <span>
            <input 
                type="tel" id="ctx-phone-edit" 
                value={this._phoneNumer}
                onInput={(event) => this.handleChange(event)}
                onKeyPress={(event) => this.handleKeyPress(event)}
                >
            </input>
        </span>
        <span>
        <button id="update-phone" onClick={() => this.updatePhone()}>Update</button>
        </span>
      </div>
    );
  }
}