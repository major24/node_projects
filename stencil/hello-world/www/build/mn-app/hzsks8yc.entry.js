const t=window.MnApp.h;class e{componentWillLoad(){}componentDidLoad(){}componentWillUpdate(){}componentDidUpdate(){}render(){return t("span",null,this.error)}static get is(){return"mn-error"}static get encapsulation(){return"shadow"}static get properties(){return{error:{type:String,attr:"error"},errors:{type:"Any",attr:"errors"}}}static get style(){return":host span{width:100%;font-size:1em;color:red;margin-left:.3rem}"}}class r{render(){return t("span",null,this.label)}static get is(){return"mn-label"}static get encapsulation(){return"shadow"}static get properties(){return{label:{type:String,attr:"label"}}}static get style(){return":host span{font-size:1.2em;font-weight:700;color:#00f;padding:.1em}"}}class n{constructor(){this.label=""}render(){return t("mn-text",{"place-holder":"(111) 111-1111"})}static get is(){return"mn-telephone"}static get encapsulation(){return"shadow"}static get properties(){return{label:{type:String,attr:"label"}}}static get style(){return":host input{font-size:1.2rem;padding:.1em;margin-left:.3rem}"}}class l{constructor(){this.label="",this.width="small",this.placeHolder="Enter data",this._width="25%",this.textWidth={small:"25%",medium:"50%",large:"75%"}}componentWillLoad(){}componentDidLoad(){this.inputElement.shadowRoot.getElementById("mntext").style.width=this.textWidth[this.width]}componentWillUpdate(){}componentDidUpdate(){}handleOnInput(t){this.value=t.target?t.target.value:"",this.error="",this.mnChanged.emit(this.value)}render(){return t("div",null,t("mn-label",{label:this.label}),t("input",{type:"text",id:"mntext",name:"mntext",value:this.value,onInput:t=>this.handleOnInput(t),placeholder:this.placeHolder}),t("div",null,t("mn-error",{error:this.error})))}static get is(){return"mn-text"}static get encapsulation(){return"shadow"}static get properties(){return{_width:{state:!0},error:{type:String,attr:"error",mutable:!0},inputElement:{elementRef:!0},label:{type:String,attr:"label"},placeHolder:{type:String,attr:"place-holder",mutable:!0},value:{type:String,attr:"value",mutable:!0},width:{type:String,attr:"width",mutable:!0}}}static get events(){return[{name:"mnChanged",method:"mnChanged",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host input{font-size:1.2rem;padding:.1em;margin-left:.3rem}"}}export{e as MnError,r as MnLabel,n as MnTelephone,l as MnText};