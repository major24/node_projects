MnApp.loadBundle("sy152cgv",["exports"],function(t){var e=window.MnApp.h,n=function(){function t(){}return t.prototype.componentWillLoad=function(){console.log("componentWillLoad()"),console.log(this.data),this.data&&(this._data=this.data,this._phoneData=this.parseData(this._data),console.log(this._phoneData))},t.prototype.componentDidLoad=function(){},t.prototype.componentWillUpdate=function(){},t.prototype.componentDidUpdate=function(){},t.prototype.watchHandler=function(t){console.log("in watch-data updated: "+t),this._data=t},t.prototype.parseData=function(t){return JSON.parse(t)},t.prototype.stringfy=function(t){return console.log("=="+JSON.stringify(t)),JSON.stringify(t)},t.prototype.render=function(){var t=this;return e("div",null,this._phoneData.map(function(n){return e("ctx-phone-display",{data:t.stringfy(n)})}))},Object.defineProperty(t,"is",{get:function(){return"ctx-phone-display-container"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_data:{state:!0},_phoneData:{state:!0},data:{type:String,attr:"data",watchCallbacks:["watchHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".show-content.sc-ctx-phone-display-container{display:block}.hide-content.sc-ctx-phone-display-container{display:none}.column.sc-ctx-phone-display-container{float:left;width:300px}.ctx-phone-label.sc-ctx-phone-display-container{color:#00f;font-weight:700}.ctx-phone-label.sc-ctx-phone-display-container, .ctx-phone-text.sc-ctx-phone-display-container{float:left;width:100px}.ctx-phone-isprimary.sc-ctx-phone-display-container{color:red}"},enumerable:!0,configurable:!0}),t}();t.CtxPhoneDisplayContainer=n,Object.defineProperty(t,"__esModule",{value:!0})});