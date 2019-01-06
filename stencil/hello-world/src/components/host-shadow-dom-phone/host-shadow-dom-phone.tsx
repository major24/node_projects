// import { Component, Prop, Element } from '@stencil/core';

// @Component({
//  tag: 'host-shadow-dom-phone',
//  shadow: true
// })
// export class HostShadowDomPhone {
//   @Prop() name: string;

//   @Element() _elDiv: HTMLDivElement;
//   @Element() _mylist: HTMLMyListElement;
//   @Element() _elDivMyList: HTMLDivElement;

//   // Sample data. or passed from exteranl app..
//   private sampleData ='[{"description": "Home",  "number": "4169997777", "isPrimary": false}, {"description": "Mobile",  "number": "9058885555", "isPrimary": true}, {"description": "Work",  "number": "7057771111", "isPrimary": false}]';
//   //private sampleData = '[{"description":"Home","number":"4163338899"},{"description":"Mobile","number":"4165559900"}]';


//   componentWillLoad(){
//     console.log('componentWillLoad()');
//   }

//   componentDidLoad(){
//     /*console.log('componentDidLoad()');
//     const div = this._elDiv.shadowRoot;
//     console.log(div);  // #shadow-root
//     const span = div.getElementById('name');
//     console.log(span);  // <span ...
//     console.log(span.innerText);
//     span.innerText = `${span.innerText} - updated via shadow root access..`;

//     // access deeply nested div
//     const deepDiv = div.getElementById("deeply-nested");
//     console.log(deepDiv.innerText);

//     console.log("--- Access Inner ShadowDOM ---");

//     const div2 = div.querySelector('my-list');  // parent ctl
//     console.log(div2);
//     const h2 = div2.shadowRoot.querySelector('h2');
//     console.log(h2.innerText);

//     // child containers.
//     console.log("--- Access Child containers ---");
//     const divItems = div2.shadowRoot.querySelectorAll('my-list-item');
//     console.log(divItems);
//     divItems.forEach((e) => {
//         console.log(e);
//         console.log(e.shadowRoot.querySelector('h3').innerText);
//     })
//     */
//   }

//   render() {
//     return (
//       <div>

//         <h2>Shadow DOM - Phone Test</h2>

//         <phone-updatable-container
//             data={this.sampleData}>
//         </phone-updatable-container>

//       </div>
//     );
//   }
// }