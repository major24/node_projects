import { Component, Prop, State } from '@stencil/core';


@Component({
 tag: 'show-msg-container',
 shadow: true
})
export class ShowMsgContainer {
  @Prop() data: string;
  @State() _data: any; //[1,2,3];
  @State() textValue: string = "My new msg..";

  componentWillLoad(){
    console.log('componentWillLoad()');
    this._data = JSON.parse(this.data);
    console.log(this._data);
   // this.nameState = this.data;
  }

  componentDidLoad(){
    console.log('componentDidLoad()');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');

  }

  update(e: any) {
      console.log('update array' + e);
      console.log(this._data);
      console.log(this.textValue);
      this._data = [...this._data, this.textValue];
  }

  handleChangeState(event) {
    const textUpdated = event.target.value;
    //console.log(textUpdated);
    this.textValue = textUpdated;
  }

  render() {
      return (
      <div>
            {this._data.map((e) => {
                return (
                    <show-msg data={e}></show-msg>
                    )
            })}

          <hr />
          <div>
            Update STATE (Array) from within component: (will update AND RE-RENDER)
            <br />
            <input type="text" id="mystate" 
                    value={this.textValue}
                    onInput={(event) => this.handleChangeState(event)} />
            </div>

          <button onClick={(e) => this.update(e)}>Update Array with Msg</button>
      </div>
      )
  }
}