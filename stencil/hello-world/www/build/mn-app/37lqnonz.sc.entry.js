const t=window.MnApp.h;class e{showPrompt(){console.log("in mtd")}render(){return t("div",null,t("h1",null,"Hello World!"),t("p",null,"Name: ",this.name),t("div",{id:"prompt"},".."))}static get is(){return"hello-world"}static get encapsulation(){return"shadow"}static get properties(){return{name:{type:String,attr:"name"},showPrompt:{method:!0}}}static get style(){return".sc-hello-world-h   h1.sc-hello-world{color:#00f}"}}export{e as HelloWorld};