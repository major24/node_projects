MnApp.loadBundle("zlcsoeyc",["exports"],function(n){var e=window.MnApp.h,o=function(){function n(){}return n.prototype.componentWillLoad=function(){console.log("componentWillLoad()"),console.log(this.name)},n.prototype.componentDidLoad=function(){console.log("componentDidLoad()")},n.prototype.componentWillUpdate=function(){console.log("componentWillUpdate()"),console.log(this.name)},n.prototype.componentDidUpdate=function(){console.log("componentDidUpdate()"),console.log(this.name)},n.prototype.render=function(){return e("div",null,e("h3",null,"Child Comp!"),e("p",null,"Name: ",this.name))},Object.defineProperty(n,"is",{get:function(){return"child-component-one"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{name:{type:String,attr:"name"}}},enumerable:!0,configurable:!0}),n}(),t=function(){function n(){}return n.prototype.componentWillLoad=function(){console.log("componentWillLoad()"),console.log(this.name),this._name=this.name},n.prototype.componentDidLoad=function(){console.log("componentDidLoad()")},n.prototype.componentWillUpdate=function(){console.log("componentWillUpdate()"),console.log(this.name)},n.prototype.componentDidUpdate=function(){console.log("componentDidUpdate()"),console.log(this.name)},n.prototype.update=function(){console.log("in upd"),this._name="**Updated**"},n.prototype.render=function(){var n=this;return e("div",null,e("h2",null," --- Parent Child Container --- "),e("parent-component",{name:this._name}),e("child-component-one",{name:this._name}),e("p",null),e("button",{onClick:function(){return n.update()}},"Update from PC comp"))},Object.defineProperty(n,"is",{get:function(){return"parent-child-container"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{_name:{state:!0},name:{type:String,attr:"name"}}},enumerable:!0,configurable:!0}),n}(),i=function(){function n(){}return n.prototype.componentWillLoad=function(){console.log("componentWillLoad()"),console.log(this.name),this._name=this.name},n.prototype.componentDidLoad=function(){console.log("componentDidLoad()")},n.prototype.componentWillUpdate=function(){console.log("componentWillUpdate()"),console.log("prop="+this.name),console.log("state="+this._name)},n.prototype.componentDidUpdate=function(){console.log("componentDidUpdate()"),console.log(this.name)},n.prototype.update=function(){console.log("in upd"),this._name="**Updated**"},n.prototype.handleChangeState=function(n){var e=n.target.value;console.log(e),this._name=e,this.name=e},n.prototype.render=function(){var n=this;return console.log("in rndr"),e("div",null,e("h2",null,"Parent Comp!"),e("p",null,e("span",null,"Name(prop): ",this.name),e("br",null),e("span",null,"Name(state): ",this._name)),e("input",{type:"text",id:"nameState",value:this._name,onInput:function(e){return n.handleChangeState(e)}}),e("button",{onClick:this.update},"Update"),e("button",{onClick:function(){return n.update()}},"Update"))},Object.defineProperty(n,"is",{get:function(){return"parent-component"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{_name:{state:!0},name:{type:String,attr:"name"}}},enumerable:!0,configurable:!0}),n}();n.ChildComponentOne=o,n.ParentChildContainer=t,n.ParentComponent=i,Object.defineProperty(n,"__esModule",{value:!0})});