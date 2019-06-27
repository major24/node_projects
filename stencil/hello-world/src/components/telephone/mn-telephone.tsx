import { Component, Prop } from '@stencil/core';
// import { Event, EventEmitter } from '@stencil/core';

@Component({
 tag: 'mn-telephone',
 styleUrl: 'mn-telephone.scss',
 shadow: true
})
export class MnTelephone {
  @Prop() label: string = "";
  // @Prop({mutable: true}) width: string = "small";
  // @Prop({mutable: true}) placeHolder: string = "Enter data";
  // @Prop({mutable: true}) value: string;
  // @Prop({mutable: true}) error: string;
  // @Event() mnChanged: EventEmitter<string>;
  // @State() _width: string = '25%';

  // @Element() inputElement: HTMLInputElement;

  // textWidth = {
  //   small: '25%',
  //   medium: '50%',
  //   large: '75%'
  // };

  // componentWillLoad(){
  // }

  // componentDidLoad(){
  //   const el = this.inputElement.shadowRoot.getElementById('mntext');
  //   el.style.width = this.textWidth[this.width];
  // }

  // componentWillUpdate(){
  // }

  // componentDidUpdate(){
  // }

  // handleOnInput(event) {
  //   this.value = event.target ? event.target.value : '';
  //   // clear any errors
  //   this.error = '';
  //   this.mnChanged.emit(this.value);
  // }

  render() {
    return (
      <mn-text
      place-holder="(111) 111-1111"></mn-text>
    );
  }
}
