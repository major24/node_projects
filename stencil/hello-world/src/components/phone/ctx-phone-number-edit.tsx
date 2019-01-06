import { Component, Prop, State, Watch } from '@stencil/core';
//import { Phone } from './phone';
import { Event, EventEmitter } from '@stencil/core';



@Component({
 tag: 'ctx-phone-edit',
 styleUrl: 'ctx-phone-number.scss',
 shadow: true
})
export class CtxPhoneEdit {
  // string input: '{ "description": "Home",  "number": "4163338899" }'
  @Prop() data: string;
  //@State() _data: Phone;
  //@State() _phoneNumber: string;
  //@State() _description: string = "Phone";
  @State() _dataIn: any;
  @Event() onPhoneUpdate: EventEmitter;

  private phoneDescTypes: string[] = ["Home", "Work", "Mobile"];

  componentWillLoad(){
    if (this.data) {
        this._dataIn = this.parseData(this.data);
        // assign phone description (Home/ MObile/ Work etc)
        //if (dataIn.description != null && dataIn.description != ''){
          //this._description = dataIn.description;
        //}
        //if (dataIn.number != null && dataIn.number != ''){
          //this._phoneNumber = dataIn.number;
        //}       
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




    handleChange(event) {
      const tmp = event.target.value;
      this._dataIn.number = this.formatPhoneNumber(tmp);
    }

    handleSelect(event) {
      this._dataIn.description = event.target.value;
    }

    formatPhoneNumber(text) {
      if (text === '') return '';
      if (text.length  === 3 || text.length === 7){
        return text + "-";
      } else {
        return text;
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
              return <option value={e} selected={this._dataIn.description === e}>{e}</option>
            })}
          </select>
        </span>
        <span>
            <input 
                type="text" id="ctx-phone-number" 
                value={this._dataIn.number}
                maxLength={12}
                onInput={(event) => this.handleChange(event)}
                >
            </input>
        </span>
        <span>RowId: {this._dataIn.rowId}</span>
      </div>
    );
  }
}