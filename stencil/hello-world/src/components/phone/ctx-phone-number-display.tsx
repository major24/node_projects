import { Component, Prop, State, Watch } from '@stencil/core';

@Component({
 tag: 'ctx-phone-display',
 styleUrl: 'ctx-phone-number.scss',
 shadow: true
})
export class CtxPhoneDisplay {
  // string input: '{ "description": "Home",  "number": "4163338899", "isPrimary": true }'
  @Prop() data: string;
  @State() _data: string;
  @State() _phoneNumer: string;
  @State() _description: string = "Phone";
  @State() _isPrimary: boolean = false;
  @State() _primary: string = ".";
 
  componentWillLoad(){
    console.log('componentWillLoad()');
   // console.log(this.data);
    if (this.data) {
        this._data = this.data;
        const dataIn = this.parseData(this._data);
        this.setData(dataIn);
    }
  }

  componentDidLoad(){
    console.log('componentDidLoad()');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');
  }

    @Watch('data')
    watchHandler(nv: string){
      console.log(`in watch-data updated: ${nv}`);
      this._data = nv;
      const dataIn = this.parseData(this._data);
      this.setData(dataIn);
    }

    parseData(data: string){
      return JSON.parse(data);
    }

    formatPhoneNumber(number: string) {
      return `${number.substring(0,3)}-${number.substring(3,6)}-${number.substring(6,10)}`;
    }

    setData(data: any) {
      // assign phone description (Home/ MObile/ Work etc)
      if (data.description != null && data.description != ''){
        this._description = data.description;
      }
      if (data.number != null && data.number != ''){
        this._phoneNumer = this.formatPhoneNumber(data.number);  //dataIn.number;
      }
      if (data.isPrimary != null && data.isPrimary != ''){
        this._isPrimary = data.isPrimary;
        this._primary = "*P";
      }
    }

  render() {
    return (
      <div>
        <div id="ctx-phone-label" class="ctx-phone-label">{this._description}</div>
        <div id="ctx-phone-text" class="ctx-phone-text">{this._phoneNumer}</div>
        <div id="ctx-phone-primary" class="ctx-phone-isprimary">
            {this._primary}
        </div>
      </div>
    );
  }
}

/**
 *   render() {
    return (
      <div>
        <div id="ctx-phone-label" class="ctx-phone-label">{this._description}</div>
        <div id="ctx-phone-text" class="ctx-phone-text">{this._phoneNumer}</div>
        <div id="ctx-phone-primary" class="ctx-phone-isprimary">
            {this._primary}
        </div>
      </div>
    );
  }
 */