const t=window.MnApp.h;class e{constructor(){this.phoneDescTypes=["Home","Work","Mobile"]}componentWillLoad(){this.data&&(this._dataIn=this.parseData(this.data))}componentDidLoad(){}componentWillUpdate(){}componentDidUpdate(){}watchHandler(t){this.parseData(t)}parseData(t){return JSON.parse(t)}handleChange(t){this._dataIn.number=this.formatPhoneNumber(t.target.value)}handleSelect(t){this._dataIn.description=t.target.value}formatPhoneNumber(t){return""===t?"":3===t.length||7===t.length?t+"-":t}render(){return t("div",null,t("span",{id:"ctx-phone-label",class:"ctx-phone-label"},t("select",{onInput:t=>this.handleSelect(t)},t("option",{value:""},"Select"),this.phoneDescTypes.map(e=>t("option",{value:e,selected:this._dataIn.description===e},e)))),t("span",null,t("input",{type:"text",id:"ctx-phone-number",value:this._dataIn.number,maxLength:12,onInput:t=>this.handleChange(t)})),t("span",null,"RowId: ",this._dataIn.rowId))}static get is(){return"ctx-phone-edit"}static get encapsulation(){return"shadow"}static get properties(){return{_dataIn:{state:!0},data:{type:String,attr:"data",watchCallbacks:["watchHandler"]}}}static get events(){return[{name:"onPhoneUpdate",method:"onPhoneUpdate",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".show-content{display:block}.hide-content{display:none}.column{float:left;width:300px}.ctx-phone-label{color:#00f;font-weight:700}.ctx-phone-label,.ctx-phone-text{float:left;width:100px}.ctx-phone-isprimary{color:red}"}}class n{constructor(){this._cssShowHideDisp="show-content",this._cssShowHideEdit="hide-content"}componentWillLoad(){console.log("updatable-componentWillLoad()"),this.data&&(this._data=this.data,this._dataIn=this.parseData(this._data),this._dataIn=this._dataIn.map((t,e)=>(t.rowId=e,t)))}componentDidLoad(){}componentWillUpdate(){}componentDidUpdate(){}parseData(t){return JSON.parse(t)}stringfy(t){return JSON.stringify(t)}editPhone(){this.toggleEditContent()}toggleEditContent(){"show-content"==this._cssShowHideDisp?(this._cssShowHideDisp="hide-content",this._cssShowHideEdit="show-content"):(this._cssShowHideDisp="show-content",this._cssShowHideEdit="hide-content")}onPhoneUpdate(t){console.log("in parent cntr"),this._data=t.detail,this.toggleEditContent()}updatePhone(){console.log("in updatable update");const t=this._divParent.shadowRoot;console.log(t);const e=t.querySelectorAll("ctx-phone-edit");console.log(e);const n=e[0].shadowRoot.getElementById("ctx-phone-number");console.log(n);const a=t.querySelectorAll("ctx-phone-number");console.log(a)}render(){return t("div",null,t("div",{class:"column"},t("div",{class:this._cssShowHideDisp},t("button",{id:"edit-phone",onClick:()=>this.editPhone()},"Edit")),this._dataIn.map(e=>t("div",null,t("span",{id:"phone-display",class:this._cssShowHideDisp},t("ctx-phone-display",{data:this.stringfy(e)})),t("span",{id:"phone-edit",class:this._cssShowHideEdit},t("ctx-phone-edit",{data:this.stringfy(e)})))),t("span",{class:this._cssShowHideEdit},t("button",{id:"update-phone",onClick:()=>this.updatePhone()},"Update"))))}static get is(){return"ctx-phone-updatable"}static get encapsulation(){return"shadow"}static get properties(){return{_cssShowHideDisp:{state:!0},_cssShowHideEdit:{state:!0},_data:{state:!0},_dataIn:{state:!0},_divParent:{elementRef:!0},_nbr:{elementRef:!0},data:{type:String,attr:"data"}}}static get listeners(){return[{name:"onPhoneUpdate",method:"onPhoneUpdate"}]}static get style(){return".show-content{display:block}.hide-content{display:none}.column{float:left;width:300px}.ctx-phone-label{color:#00f;font-weight:700}.ctx-phone-label,.ctx-phone-text{float:left;width:100px}.ctx-phone-isprimary{color:red}"}}export{e as CtxPhoneEdit,n as CtxPhoneUpdatable};