import { Component, Prop, State } from '@stencil/core';

@Component({
 tag: 'prop-state-test',
 shadow: true
})
export class PropStateTest {
  @Prop() nameProp: string;
  @State() nameState: string;

  componentWillLoad(){
    console.log('componentWillLoad()');
    console.log(this.nameProp);
    console.log(this.nameState);
  }

  componentDidLoad(){
    console.log('componentDidLoad()');
    console.log(this.nameProp);
    console.log(this.nameState);
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()');
    console.log(this.nameProp);
    console.log(this.nameState);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');
    console.log(this.nameProp);
    console.log(this.nameState);
  }


  handleChangeProp(event) {
    const textUpdated = event.target.value;
    console.log(textUpdated);
    this.nameProp = textUpdated;
  }

  handleChangeState(event) {
    const textUpdated = event.target.value;
    console.log(textUpdated);
    this.nameState = textUpdated;
  }
  render() {
      console.log('in render ftn');
    return (
      <div>
        <h2>Prop State Test</h2>
        <p>NameProp: {this.nameProp}</p>
        <p>NameState: {this.nameState}</p>
        <span>Note: State is internal. Will not be updated from external attribute settings..</span>

        <div>
            Update PROP from within component: (will update. BUT WILL NOT RE-RENDER)

            <input type="text" id="nameProp" 
                    value={this.nameProp}
                    onInput={(event) => this.handleChangeProp(event)} />
        </div>

        <div>
            Update STATE from within component: (will update AND RE-RENDER)

            <input type="text" id="nameState" 
                    value={this.nameState}
                    onInput={(event) => this.handleChangeState(event)} />
        </div>

      </div>
    );
  }
}