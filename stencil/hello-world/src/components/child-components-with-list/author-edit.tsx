import { Component, Prop, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
 tag: 'author-edit',
 styleUrl: 'author-book-container.scss',
 shadow: true
})
export class AuthorEdit {
  @Prop() name: string;
  @State() _name: string;
  @Event() onUpdate: EventEmitter;

  @State() _css: string = "addr-hidden"

  componentWillLoad(){
    console.log('auth-edit-componentWillLoad()');
    this._name = this.name;
  }

  componentDidLoad(){
    //console.log('componentDidLoad()');
  }

  componentWillUpdate(){
    //console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
    //console.log('componentDidUpdate()');
}

edit(){
    if (this._css == "addr-hidden"){
      this._css = "addr-visible";
    } else {
      this._css = "addr-hidden";
    }
  }
 
  cancel(){
    this._css = "addr-hidden";
  }

  save(e){
    e.preventDefault()
    console.log(this._name);
    this.onUpdate.emit(this._name);  // Emit event
  }

  handleNameChange(event){
    const textUpdated = event.target.value;
    this._name = textUpdated;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.edit()}>Edit</button>
        <div class={this._css}>
            <h3>Author Edit!</h3>
            <p>Name: <input type="text" value={this._name}
                        onInput={(event) => this.handleNameChange(event)} /></p>

            <button onClick={() => this.cancel()}>Cancel</button>
            <button onClick={(e) => this.save(e)}>Save</button>
        </div>
      </div>
    );
  }
}