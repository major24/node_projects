MnApp.loadBundle("yyywrgin",["exports"],function(e){var t=window.MnApp.h,n=function(){function e(){}return e.prototype.componentWillLoad=function(){console.log("componentWillLoad()"),console.log(this.nameProp),console.log(this.nameState)},e.prototype.componentDidLoad=function(){console.log("componentDidLoad()"),console.log(this.nameProp),console.log(this.nameState)},e.prototype.componentWillUpdate=function(){console.log("componentWillUpdate()"),console.log(this.nameProp),console.log(this.nameState)},e.prototype.componentDidUpdate=function(){console.log("componentDidUpdate()"),console.log(this.nameProp),console.log(this.nameState)},e.prototype.handleChangeProp=function(e){var t=e.target.value;console.log(t),this.nameProp=t},e.prototype.handleChangeState=function(e){var t=e.target.value;console.log(t),this.nameState=t},e.prototype.render=function(){var e=this;return console.log("in render ftn"),t("div",null,t("h2",null,"Prop State Test"),t("p",null,"NameProp: ",this.nameProp),t("p",null,"NameState: ",this.nameState),t("span",null,"Note: State is internal. Will not be updated from external attribute settings.."),t("div",null,"Update PROP from within component: (will update. BUT WILL NOT RE-RENDER)",t("input",{type:"text",id:"nameProp",value:this.nameProp,onInput:function(t){return e.handleChangeProp(t)}})),t("div",null,"Update STATE from within component: (will update AND RE-RENDER)",t("input",{type:"text",id:"nameState",value:this.nameState,onInput:function(t){return e.handleChangeState(t)}})))},Object.defineProperty(e,"is",{get:function(){return"prop-state-test"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{nameProp:{type:String,attr:"name-prop"},nameState:{state:!0}}},enumerable:!0,configurable:!0}),e}();e.PropStateTest=n,Object.defineProperty(e,"__esModule",{value:!0})});