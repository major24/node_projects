const t=window.MnApp.h;class e{componentWillLoad(){console.log("show-msg-componentWillLoad()")}render(){return t("div",null,t("h3",null,"Name: ",this.name," "))}static get is(){return"show-person-info"}static get encapsulation(){return"shadow"}static get properties(){return{name:{type:String,attr:"name"}}}}class o{constructor(){this.textValue="Ratnam",this._userList=[],this.name="MM"}componentWillLoad(){console.log("componentWillLoad()"),this._data=JSON.parse(this.data),console.log(this._data),this.createUserList("")}componentDidLoad(){console.log("componentDidLoad()")}componentWillUpdate(){console.log("componentWillUpdate()")}componentDidUpdate(){console.log("componentDidUpdate()")}update(){console.log("update array"),console.log(this._data),console.log(this.textValue)}handleChangeState(t){const e=t.target.value;console.log(e),this.textValue=e}createUserList(e){let o=[];""==e?this._data.map(e=>{o.push(t("show-person-info",{name:e.name}))}):(this._userList=[],this._data.map((s,n)=>{console.log(s),1==n?(console.log(e+this.textValue),o.push(t("show-person-info",{name:this.textValue}))):o.push(t("show-person-info",{name:s.name}))})),console.log("----"),console.log(o),this._userList=[...this._userList,o],console.log(this._userList)}render(){return t("div",null,this._userList,t("hr",null),t("div",null,"Update STATE (Array within obj) from within component: (will update AND RE-RENDER)",t("br",null),t("input",{type:"text",id:"mystate",value:this.textValue,onInput:t=>this.handleChangeState(t)})),t("button",{onClick:()=>this.createUserList("John")},"Update Array with Msg"))}static get is(){return"show-person-info-container"}static get encapsulation(){return"shadow"}static get properties(){return{_data:{state:!0},_userList:{state:!0},data:{type:String,attr:"data"},name:{state:!0},textValue:{state:!0}}}static get style(){return".rating.sc-show-person-info-container{color:orange}"}}export{e as ShowPersonInfo,o as ShowPersonInfoContainer};