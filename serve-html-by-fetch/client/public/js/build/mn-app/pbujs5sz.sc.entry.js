const t=window.MnApp.h;class e{constructor(){this._address={}}componentWillLoad(){console.log("edit-componentWillLoad()"),console.log(this.address),this.populateAddress(this.address)}componentDidLoad(){console.log("edit-componentDidLoad()")}componentWillUpdate(){console.log("edit-componentWillUpdate()"),console.log(this.address)}componentDidUpdate(){console.log("edit-componentDidUpdate()")}watchHandler(t,e){console.log("wtch="+t+e),this.populateAddress(t)}populateAddress(t){this._address=JSON.parse(t)}render(){return t("div",null,t("h3",null,"Address"),t("p",null,"Address Debug: ",this.address),t("div",null,"Address Line1:",t("input",{type:"text",id:"address-line1",value:this._address.addressLine1})),t("div",null,"City:",t("input",{type:"text",id:"city",value:this._address.city})),t("div",null,"State:",t("input",{type:"text",id:"state",value:this._address.state})),t("div",null,"PostCode:",t("input",{type:"text",id:"post-code",value:this._address.postcode})),t("div",null,t("button",null,"Cancel"),t("button",null,"Save")))}static get is(){return"ctx-address-edit"}static get encapsulation(){return"shadow"}static get properties(){return{_address:{state:!0},address:{type:String,attr:"address",watchCallbacks:["watchHandler"]}}}}export{e as CtxAddressEdit};