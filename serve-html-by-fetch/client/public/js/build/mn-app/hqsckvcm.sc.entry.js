const s=window.MnApp.h;class d{constructor(){this._address={}}componentWillLoad(){console.log("adr-componentWillLoad()"),console.log(this.address),this.populateAddress(this.address)}componentDidLoad(){console.log("adr-componentDidLoad()")}componentWillUpdate(){console.log("adr-componentWillUpdate()"),console.log(this.address)}componentDidUpdate(){console.log("adr-componentDidUpdate()")}watchHandler(s,d){console.log("wtch="+s+d),this.populateAddress(s)}populateAddress(s){this._address=JSON.parse(s)}render(){return s("div",{class:"addr-main"},s("h3",null,"ctx-Address"),s("div",null,"Addr: ",this._address.addressLine1),s("div",null,this._address.city,", ",this._address.state,", ",this._address.postcode))}static get is(){return"ctx-address"}static get encapsulation(){return"shadow"}static get properties(){return{_address:{state:!0},address:{type:String,attr:"address",watchCallbacks:["watchHandler"]}}}static get style(){return".addr-main.sc-ctx-address{border:1px solid;background:#add8e6;width:600px;padding:10px}"}}export{d as CtxAddress};