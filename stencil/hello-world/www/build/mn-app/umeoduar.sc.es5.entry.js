MnApp.loadBundle("umeoduar",["exports"],function(t){var e=window.MnApp.h,n=function(){function t(){this._description="Phone",this._isPrimary=!1,this._primary=""}return t.prototype.componentWillLoad=function(){if(console.log("componentWillLoad()"),console.log(this.data),this.data){this._data=this.data;var t=this.parseData(this._data);this.setData(t)}},t.prototype.componentDidLoad=function(){console.log("componentDidLoad()")},t.prototype.componentWillUpdate=function(){console.log("componentWillUpdate()")},t.prototype.componentDidUpdate=function(){console.log("componentDidUpdate()")},t.prototype.watchHandler=function(t){console.log("in watch-data updated: "+t),this._data=t;var e=this.parseData(this._data);this.setData(e)},t.prototype.parseData=function(t){return JSON.parse(t)},t.prototype.formatPhoneNumber=function(t){return t.substring(0,3)+"-"+t.substring(3,6)+"-"+t.substring(6,10)},t.prototype.setData=function(t){null!=t.description&&""!=t.description&&(this._description=t.description),null!=t.number&&""!=t.number&&(this._phoneNumer=this.formatPhoneNumber(t.number)),null!=t.isPrimary&&""!=t.isPrimary&&(this._isPrimary=t.isPrimary,this._primary="*P")},t.prototype.render=function(){return e("div",null,e("div",{id:"ctx-phone-label",class:"ctx-phone-label"},this._description),e("div",{id:"ctx-phone-text",class:"ctx-phone-text"},this._phoneNumer),e("div",{id:"ctx-phone-primary",class:"ctx-phone-isprimary"},this._primary))},Object.defineProperty(t,"is",{get:function(){return"ctx-phone-display"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_data:{state:!0},_description:{state:!0},_isPrimary:{state:!0},_phoneNumer:{state:!0},_primary:{state:!0},data:{type:String,attr:"data",watchCallbacks:["watchHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".show-content.sc-ctx-phone-display{display:block}.hide-content.sc-ctx-phone-display{display:none}.column.sc-ctx-phone-display{float:left;width:300px}.ctx-phone-label.sc-ctx-phone-display{color:#00f;font-weight:700}.ctx-phone-label.sc-ctx-phone-display, .ctx-phone-text.sc-ctx-phone-display{float:left;width:100px}.ctx-phone-isprimary.sc-ctx-phone-display{color:red}"},enumerable:!0,configurable:!0}),t}();t.CtxPhoneDisplay=n,Object.defineProperty(t,"__esModule",{value:!0})});