import { Component, Prop, State, Watch } from '@stencil/core';

@Component({
 tag: 'ctx-phone-display-container',
 styleUrl: 'ctx-phone-number.scss',
 shadow: true
})
export class CtxPhoneDisplayContainer {
  // string input: of arry of phone numbers
  // ['{ "description": "Home",  "number": "4163338899", "isPrimary": true }, {....}]'
  @Prop() data: string;
  @State() _data: string;
  @State() _phoneData: any;
  //@State() _phoneNumer: string;
  //@State() _description: string = "Phone";
  //@State() _isPrimary: boolean = false;
 
  componentWillLoad(){
    console.log('componentWillLoad()');
    console.log(this.data);
    if (this.data) {
        this._data = this.data;
        this._phoneData = this.parseData(this._data);
        console.log(this._phoneData);
        //this.setData(dataIn);
    }
  }

  componentDidLoad(){
    //console.log('componentDidLoad()');
  }

  componentWillUpdate(){
    //console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
    //console.log('componentDidUpdate()');
  }

    @Watch('data')
    watchHandler(nv: string){
      console.log(`in watch-data updated: ${nv}`);
      this._data = nv;
      //const dataIn = this.parseData(this._data);
      //this.setData(dataIn);
    }

    parseData(data: string){
      return JSON.parse(data);
    }

    stringfy(data: any) {
        console.log('==' + JSON.stringify(data));
        return JSON.stringify(data);
    }


  render() {
    return (
      <div>
          {this._phoneData.map((e) => {
              return (<ctx-phone-display
                        data={this.stringfy(e)}>
                    </ctx-phone-display>)
          })}
      </div>
    );
  }
}