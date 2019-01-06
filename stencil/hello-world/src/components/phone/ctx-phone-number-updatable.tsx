import { Component, Prop, State, Listen, Element } from '@stencil/core';
//import { CtxPhoneEdit } from './ctx-phone-number-edit';

//import { Phone } from './phone';

@Component({
 tag: 'ctx-phone-updatable',
 styleUrl: 'ctx-phone-number.scss',
 shadow: true
})
export class CtxPhoneUpdatable {
  // string input:
  // ['{ "description": "Home",  "number": "4163338899", "isPrimary": true }, {....}]'
  @Prop() data: string;
  @State() _data: string; //Phone;
  @State() _dataIn: any;
  @State() _cssShowHideDisp: string = "show-content";
  @State() _cssShowHideEdit: string = "hide-content";
  //@Element() _ctxEdit: HTMLCtxPhoneEditElement;
  //@Element() _ctxE: HTMLInputElement;
  @Element() _divParent: HTMLDivElement;
  @Element() _nbr: HTMLInputElement;

  componentWillLoad(){
    console.log('updatable-componentWillLoad()');
    //console.log(this.data);
    if (this.data) {
        this._data = this.data;
        this._dataIn = this.parseData(this._data);
        // inorder to edit/update we need a unique identifier to identify which rec
        // is being modified. add row id to incoming data
        this._dataIn = this._dataIn.map((e, idx) => {
            e.rowId = idx;
            return e;
        })
        //console.log(this._dataIn);
    }
    // set CSS class
    //this._cssShowHide = this._isEditVisible === true ? 'show-content' : 'hide:content';
  }

  componentDidLoad(){
   // console.log('componentDidLoad()');
    //console.log(this._element);
    //this._elEditPhone = this._element.shadowRoot.querySelector('#phone-edit');
    //console.log('------');
    //console.log(this._elEditPhone);
  }

  componentWillUpdate(){
    //console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
   // console.log('componentDidUpdate()');
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

    parseData(data: string){
        return JSON.parse(data);
    }

    stringfy(data: any) {
        //console.log('==' + JSON.stringify(data));
        return JSON.stringify(data);
    }


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
        //console.log(e.detail);
        // update display data
        this._data = e.detail;
        // update toggle
        this.toggleEditContent();
    }

        // validate and upate (emit data)
        updatePhone() {
            //e.preventDefault()
            //console.log('inedit..' + this._dataIn.number);   //this._phoneNumber);
            //const re = /-/gi;
            //const number = this._dataIn.number.replace(re, "");
            //console.log(number);
            //const updatedPhoneData = `{ "description": "${this._dataIn.description}",  "number": "${number}", "rowId": ${this._dataIn.rowId} }`;
            //console.log(updatedPhoneData)
            //this.onPhoneUpdate.emit(updatedPhoneData);  // Emit event
            console.log('in updatable update');
            //const ctxEditCtls = this._ctxEdit.shadowRoot.querySelectorAll("ctx-phone-edit");
            //console.log(ctxEditCtls);
            //console.log(ctxEditCtls.length);
            //for(let i = 0; i < ctxEditCtls.length; i++) {
                //console.log(ctxEditCtls[i]);
               // this._ctxE = ctxEditCtls[i].shadowRoot.querySelector('ctx-phone-number');
                //console.log(this._ctxE);
                //const x = ctxEditCtls.getEle
           // }
            const div = this._divParent.shadowRoot;
            console.log(div);
            const edits = div.querySelectorAll('ctx-phone-edit');
            console.log(edits);
            const nbr = edits[0].shadowRoot.getElementById('ctx-phone-number');
            //this._nbr = edits[0].shadowRoot.getElementById('ctx-phone-number');
            console.log(nbr);
            const x = div.querySelectorAll('ctx-phone-number');
            console.log(x);
            //console.log(nbr.getAttribute('value'));
            
            //{this._dataIn.map((e) => {
                //console.log(e);
            //})}
            //this.toggleEditContent();
          }


    render() {
        return (
          <div>
              <div class="column">
              <div class={this._cssShowHideDisp}>
                            <button id="edit-phone" onClick={() => this.editPhone()}>Edit</button>
                        </div>
              {this._dataIn.map((e) => {
                  return (
                        <div>
                        <span id="phone-display" class={this._cssShowHideDisp}>
                            <ctx-phone-display 
                                data={this.stringfy(e)}>
                            </ctx-phone-display>
                        </span>

                            
                                <span id="phone-edit" class={this._cssShowHideEdit}>
                                    <ctx-phone-edit
                                        data={this.stringfy(e)}>
                                    </ctx-phone-edit>
                                </span>
                            
                        </div>
                        )
              })}
                      <span class={this._cssShowHideEdit}>
        <button id="update-phone" onClick={() => this.updatePhone()}>Update</button>
        </span>
              </div>
          </div>
        );
      }


}