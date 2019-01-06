MnApp.loadBundle("sctxern5",["exports"],function(t){var e=window.MnApp.h,n=function(){function t(){this.phoneDescTypes=["Home","Work","Mobile"]}return t.prototype.componentWillLoad=function(){this.data&&(this._dataIn=this.parseData(this.data))},t.prototype.componentDidLoad=function(){},t.prototype.componentWillUpdate=function(){},t.prototype.componentDidUpdate=function(){},t.prototype.watchHandler=function(t){this.parseData(t)},t.prototype.parseData=function(t){return JSON.parse(t)},t.prototype.handleChange=function(t){this._dataIn.number=this.formatPhoneNumber(t.target.value)},t.prototype.handleSelect=function(t){this._dataIn.description=t.target.value},t.prototype.formatPhoneNumber=function(t){return""===t?"":3===t.length||7===t.length?t+"-":t},t.prototype.render=function(){var t=this;return e("div",null,e("span",{id:"ctx-phone-label",class:"ctx-phone-label"},e("select",{onInput:function(e){return t.handleSelect(e)}},e("option",{value:""},"Select"),this.phoneDescTypes.map(function(n){return e("option",{value:n,selected:t._dataIn.description===n},n)}))),e("span",null,e("input",{type:"text",id:"ctx-phone-number",value:this._dataIn.number,maxLength:12,onInput:function(e){return t.handleChange(e)}})),e("span",null,"RowId: ",this._dataIn.rowId))},Object.defineProperty(t,"is",{get:function(){return"ctx-phone-edit"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_dataIn:{state:!0},data:{type:String,attr:"data",watchCallbacks:["watchHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onPhoneUpdate",method:"onPhoneUpdate",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".show-content{display:block}.hide-content{display:none}.column{float:left;width:300px}.ctx-phone-label{color:#00f;font-weight:700}.ctx-phone-label,.ctx-phone-text{float:left;width:100px}.ctx-phone-isprimary{color:red}"},enumerable:!0,configurable:!0}),t}(),o=function(){function t(){this._cssShowHideDisp="show-content",this._cssShowHideEdit="hide-content"}return t.prototype.componentWillLoad=function(){console.log("updatable-componentWillLoad()"),this.data&&(this._data=this.data,this._dataIn=this.parseData(this._data),this._dataIn=this._dataIn.map(function(t,e){return t.rowId=e,t}))},t.prototype.componentDidLoad=function(){},t.prototype.componentWillUpdate=function(){},t.prototype.componentDidUpdate=function(){},t.prototype.parseData=function(t){return JSON.parse(t)},t.prototype.stringfy=function(t){return JSON.stringify(t)},t.prototype.editPhone=function(){this.toggleEditContent()},t.prototype.toggleEditContent=function(){"show-content"==this._cssShowHideDisp?(this._cssShowHideDisp="hide-content",this._cssShowHideEdit="show-content"):(this._cssShowHideDisp="show-content",this._cssShowHideEdit="hide-content")},t.prototype.onPhoneUpdate=function(t){console.log("in parent cntr"),this._data=t.detail,this.toggleEditContent()},t.prototype.updatePhone=function(){console.log("in updatable update");var t=this._divParent.shadowRoot;console.log(t);var e=t.querySelectorAll("ctx-phone-edit");console.log(e);var n=e[0].shadowRoot.getElementById("ctx-phone-number");console.log(n);var o=t.querySelectorAll("ctx-phone-number");console.log(o)},t.prototype.render=function(){var t=this;return e("div",null,e("div",{class:"column"},e("div",{class:this._cssShowHideDisp},e("button",{id:"edit-phone",onClick:function(){return t.editPhone()}},"Edit")),this._dataIn.map(function(n){return e("div",null,e("span",{id:"phone-display",class:t._cssShowHideDisp},e("ctx-phone-display",{data:t.stringfy(n)})),e("span",{id:"phone-edit",class:t._cssShowHideEdit},e("ctx-phone-edit",{data:t.stringfy(n)})))}),e("span",{class:this._cssShowHideEdit},e("button",{id:"update-phone",onClick:function(){return t.updatePhone()}},"Update"))))},Object.defineProperty(t,"is",{get:function(){return"ctx-phone-updatable"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_cssShowHideDisp:{state:!0},_cssShowHideEdit:{state:!0},_data:{state:!0},_dataIn:{state:!0},_divParent:{elementRef:!0},_nbr:{elementRef:!0},data:{type:String,attr:"data"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"onPhoneUpdate",method:"onPhoneUpdate"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".show-content{display:block}.hide-content{display:none}.column{float:left;width:300px}.ctx-phone-label{color:#00f;font-weight:700}.ctx-phone-label,.ctx-phone-text{float:left;width:100px}.ctx-phone-isprimary{color:red}"},enumerable:!0,configurable:!0}),t}();t.CtxPhoneEdit=n,t.CtxPhoneUpdatable=o,Object.defineProperty(t,"__esModule",{value:!0})});