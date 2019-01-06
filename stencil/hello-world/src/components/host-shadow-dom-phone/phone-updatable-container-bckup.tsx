// import { Component, Prop, State, Element, Listen } from '@stencil/core';

// @Component({
//  tag: 'phone-updatable-container',
//  shadow: true
// })
// export class PhoneUpdatableContainer {
//   @Prop() data: string;
//   @State() _dataDisplay: any;  // clone data for display and edit separatly
//   @State() _dataEdit: any;

//   @Element() _parDiv: HTMLDivElement;

//   componentWillLoad(){
//     console.log('phone-updatable-cont-componentDidLoad()');
//     // parse list
//     try{
//         this._dataDisplay = JSON.parse(this.data);
//         this._dataEdit = JSON.parse(this.data);
//         // Add a rowid so we can track in child element updates
//         this._dataEdit = this._dataEdit.map((e, idx) => {
//             e.rowId = idx;
//             return e;
//         });
//         console.log(this._dataDisplay);
//     } catch (e) {
//         console.log("Error: " + e);
//     }
//   }

//       // on update event from child component..
//       @Listen('onChangePhoneNumber')
//       onUpdatePhone(e) {
//         console.log('in parent on update: ' + e.detail);
//         // update display data to relect the edit changes
//         const temp = JSON.parse(e.detail);
//         // create a new phone obj
//         const newPh = `{"description": "${temp.description}", "number": "${temp.number}", "isPrimary": ${temp.isPrimary}}`;
//         const rowId = temp.rowId;
//         console.log(rowId);
//         console.log(newPh);
//         const newPh2 = JSON.parse(newPh);
//         //this._dataDisplay.forEach((element, index) => {
//           //  console.log(element);
//             //if(rowId === index) {
//               //  this._dataDisplay[index] = JSON.parse(newPh);
//             //}
//         //});
//         this._dataDisplay = this._dataDisplay.map((e, idx) => {
//             if (rowId == idx) {
//                 return newPh2;
//             }
//             return e;
//         });
//         console.log('--------');
//         console.log(this._dataDisplay);

//         /*const newData = this._dataDisplay.map((e, idx) => {
//             if (temp.rowId == idx) {
//                 console.log("Matches");
//                 // row id matches. update
//                 e.number = temp.number;
//                 //console.log(e);
//                 return e;
//             } else {
//                 return e;
//             }
//         });
//         //console.log(newData);
//         this._dataDisplay = [...newData];
//         console.log('-----');
//         console.log(this._dataDisplay);
//         //const newData = this._data.map((author) => {
//           // HARD Code for now. Add unique ID and update by ID..
//           //if (author.name == 'Steve') {
//             //author.name = e.detail;
//           //}
//           //return author;
//         //});
//         //this._data = newData;
//         //console.log(this._data);
//         */
//       }

//       //{"description": "Home",  "number": "4169997777", "isPrimary": false}
//       updatePhone(){
//         //this._dataDisplay = [...this._dataDisplay, {"description": "Home",  "number": "41699111111", "isPrimary": false}];
//         console.log(this._dataDisplay);
//         console.log('------');
//         this._dataDisplay =  this._dataDisplay.map((e, i) => {
//             if (i == 1) {
//                 console.log(this._dataDisplay[i]);
//                 this._dataDisplay[i] = {...e, "des": "5", "description": "Home22", "number": "1111", "isPrimary": false};
//                 //return {"description": "Home",  "number": "41699111111", "isPrimary": false};
//             }
//             return e;
//         });
//         console.log("---");
//         console.log(this._dataDisplay);
//         //this._dataDisplay = Object.assign([], dataDisplay);
//         //console.log(this._dataDisplay);
//         //this._dataDisplay = [];
//         //this._dataDisplay[3] = {"description": "Home",  "number": "41699111112", "isPrimary": false};
//         //const dataIn = {"description": "Home",  "number": "41699111111", "isPrimary": false};
//         //const idx = 1;
//         //this._dataDisplay.splice(idx, 1, dataIn);
//         //this._dataDisplay = [...this._dataDisplay, this._dataDisplay];
//         //this._dataDisplay = [
//           //  ...this._dataDisplay.slice(idx,0)
//         //];
//         //console.log(this._dataDisplay);
//         //this._dataDisplay.splice(1,1);

//         //console.log(this._dataDisplay);
//         //const t = this._dataDisplay.map((e, i) => {
//           //  if (i === 1){
//             //    return {"description": "Home",  "number": "111111111", "isPrimary": false};
//             //}
//             //return e;
//         //});
//         //console.log(t);
//         //this._dataDisplay = [];
//         //this._dataDisplay = [...this._dataDisplay, t];
//         //console.log(this._dataDisplay);

//       }

//   updatePhone22(){
//         console.log('in upd phone. get shadow root values');
//         const shRootParent = this._parDiv.shadowRoot;
//         console.log(shRootParent);  // #shadowRoot
//         // get first div for dispaly
//         const dispDivs =  shRootParent.querySelectorAll("phone-display");
//         console.log(dispDivs);  // 3 nodes - array of each child components
//         // loop thru and find numbers
//         dispDivs.forEach((e) => {
//             // get where the phone number is stored. span with and id
//             // e is child comp, so it contains a shadowRoot
//             const shRootDisp = e.shadowRoot;
//             console.log(shRootDisp);
//             // now get element by id
//             const span = shRootDisp.getElementById("phone-number");
//             console.log(span);
//             console.log(span.innerHTML);
//         });

//         // get edit phone values
//         console.log("get edit box values..");
//         const editDivs =  shRootParent.querySelectorAll("phone-edit");
//         console.log(editDivs);  // 3 nodes - array of each child components
//         // loop thru and find numbers
//         editDivs.forEach((e) => {
//             // get where the phone number is stored. span with and id
//             // e is child comp, so it contains a shadowRoot
//             const shRootEdit = e.shadowRoot;
//             console.log(shRootEdit);
//             //this._inputEl = e.shadowRoot;
//             // now get element by id
//             //this._inputEl = shRootEdit.getElementById("phone-number");  //querySelector("#phone-number")
//             //console.log(this._inputEl);
//             //console.log(input.getAttribute('value'));
//         });     


//   }

//   render() {
//     return (
//       <div>
//         <h2>Phone List Container</h2>
//         {this._dataDisplay.map((e) => {
//             return (
//                 <div>
//                     <phone-display data={JSON.stringify(e)}></phone-display>
//                 </div>
//             )
//         })}
//         <hr />

//         {this._dataEdit.map((e) => {
//             return (
//                 <div>
//                     <phone-edit data={JSON.stringify(e)}></phone-edit>
//                 </div>
//             )
//         })}

//         <hr />
//         <p>Get phone ALL edits from container ctl.</p>
//         <button id="update-phone" onClick={() => this.updatePhone()}>Update</button>

//       </div>
//     );
//   }
// }
