import { Component, Prop, Method, State, Element } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';
import { MyDateTime } from './date-service';
import { PostCodeValidatorService } from './post-code-validator';

@Component({
 tag: 'ctx-post-code',
 //styleUrl: 'hello-world.scss',
 shadow: true
})
export class CtxPostCode {
  @Prop() postCode: string;
  @State() _postCode: string;
  @Event() onChangePostCode: EventEmitter;
  
  @Element() _elPostCode: HTMLCtxPostCodeElement;
  @Prop() methods: any;

  @Method() showPrompt() {
    //console.log('in showPrompt mtd');
  }

  componentWillLoad(){
    //console.log('componentWillLoad()');
    this._postCode = this.postCode;

    console.log('testing servive');
    console.log(MyDateTime);
    const x = new MyDateTime();
    console.log(x);
    console.log(x.getCurrent());
  }

  componentDidLoad(){
    //console.log('componentDidLoad()');
    const pc = this._elPostCode.shadowRoot.getElementById('post-code');
    console.log(pc);
    //pc.addEventListener('change', this.onChange);
  }

  componentWillUpdate(){
    //console.log('componentWillUpdate()');
    //console.log(this.name);
  }

  componentDidUpdate(){
    //console.log('componentDidUpdate()');
    //console.log(this.name);
  }


  handleSubmit(e) {
    e.preventDefault()
    //console.log(this.searchItem);
    //this.searchStarted.emit(this.searchItem);  // Emit event
    // send data to our backend
  }

  onChange() {
    console.log('ddd');
  }

  handleChange(event) {
    this._postCode = event.target.value;
    console.log(`in handle change: ${this._postCode}`);
    
    // do actions defined in component.

    const srv = new PostCodeValidatorService();
    const result = srv.isValid(this._postCode);

    // trigger an emit, so clients can run additional validataions
    if (result.isValid) {
      this.onChangePostCode.emit(this._postCode);  // Emit event
    } else {
      console.log('ErrorFound: ' + result.error);
    }
  }

  //onInput={(event) => this.handleChange(event)}

  render() {
    return (
      <div>
        <h2>PostCode!</h2>
        
          PostCode: <input type="text" 
              id="post-code" 
              value={this._postCode}
              onInput={(event) => this.handleChange(event)}
               />
              
      </div>
    );
  }
}