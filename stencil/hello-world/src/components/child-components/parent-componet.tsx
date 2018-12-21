import { Component, Prop, State } from '@stencil/core';

@Component({
 tag: 'parent-component',
 shadow: true
})
export class ParentComponent {
  @Prop() name: string;
  @State() _name: string;

  componentWillLoad(){
    console.log('componentWillLoad()');
    console.log(this.name);
    this._name = this.name;
  }

  componentDidLoad(){
    console.log('componentDidLoad()');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()');
    console.log('prop=' + this.name);
    console.log('state=' + this._name);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');
    console.log(this.name);
  }

  update() {
    console.log('in upd');
    this._name = "**Updated**";
  }

  handleChangeState(event) {
    const textUpdated = event.target.value;
    console.log(textUpdated);
    this._name = textUpdated;
    this.name = textUpdated; // ** Never updated**
  }

  render() {
    console.log('in rndr');
    return (
      <div>
        <h2>Parent Comp!</h2>
        <p>
          <span>Name(prop): {this.name}</span>
          <br />
          <span>Name(state): {this._name}</span>
        </p>
        <input type="text" id="nameState" 
                    value={this._name}
                    onInput={(event) => this.handleChangeState(event)} />
        <button onClick={this.update}>Update</button>
        <button onClick={() => this.update()}>Update</button>
      </div>
    );
  }
}