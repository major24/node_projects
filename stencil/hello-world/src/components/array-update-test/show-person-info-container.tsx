import { Component, Prop, State } from '@stencil/core';


@Component({
 tag: 'show-person-info-container',
 styleUrl: 'show-style.scss',
 shadow: true
})
export class ShowPersonInfoContainer {
  // array with obj within
  @Prop() data: string;
  @State() _data: any;
  @State() textValue: string = "Ratnam";

  @State() _userList: Array<object> = [];

  componentWillLoad(){
    console.log('componentWillLoad()');
    // parse array with obj
    this._data = JSON.parse(this.data);
    console.log(this._data);
    //this.createStarList(1);
    this.createUserList("");
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

  update() {
      console.log('update array');
      console.log(this._data);
      console.log(this.textValue);
      // add new obj, works
      // this._dataArrayWithObj = [...this._dataArrayWithObj, {"name": this.textValue}];
      // update?
      /*this._dataArrayWithObj = this._dataArrayWithObj.map((e, i) => {
          if (i == 1){
              console.log('in eval' + e);
              const x = {...e, name: this.textValue};
              return x;
          }
          return e;
      });
      */
     //this._dataArrayWithObj.splice(1,1);
     //this._dataArrayWithObj.splice(1,1, {"name": "Peter66"});
     //this._dataArrayWithObj = 
       //     this._dataArrayWithObj.splice(1,1, "name": "Peter66"});
      //console.log("---------------");
      //console.log(this._dataArrayWithObj);
      //this._dataArrayWithObj = [...this._dataArrayWithObj, Object.assign({}, {"name": "ssr"})];
      //console.log(this._dataArrayWithObj);
     // this.componentWillLoad();
  }

  handleChangeState(event) {
    const textUpdated = event.target.value;
    console.log(textUpdated);
    this.textValue = textUpdated;
  }

  @State() name: string = "MM";
  createUserList(add: string) {
      
    let userList = [];

    //--------------------------------------------------------------------------
    /*if (add == "") {
        this._data.map((e) => {
            userList.push(<div>{e.name}</div>);
        });
    } else {
        this._userList = [];
        this._data.map((e, i) => {
            if (i == 1) {
                console.log(add + this.textValue);
                userList.push(<div>{this.textValue}</div>);
            } else {
                userList.push(<div>{e.name}</div>);
            }
        });
    }*/
    //-----------------------------------------------------------------------

    //---
    //let name: string;

    if (add == "") {
        this._data.map((e) => {
            userList.push(<show-person-info name={e.name}></show-person-info>);
        });
    } else {
        this._userList = [];
        this._data.map((e, i) => {
            console.log(e);
            if (i == 1) {
                console.log(add + this.textValue);
                userList.push(<show-person-info name={this.textValue}></show-person-info>);
            } else {
                userList.push(<show-person-info name={e.name}></show-person-info>);
            }
        });
    }


    console.log('----');
    console.log(userList);
    this._userList = [...this._userList, userList];
    console.log(this._userList);


    //------------------------------------------------------------------------
    //for (let i = 1; i <= this.maxValue; i++) {
      //if (i <= numberOfStars) {
        //starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2605;</span>);
      //} else {
        //starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2606;</span>);
      //}
    //}

    /*if (add == "") {
        userList.push(<p>{this._dataArrayWithObj[0].name}</p>);
        userList.push(<p>{this._dataArrayWithObj[1].name}</p>);
        userList.push(<p>{this._dataArrayWithObj[2].name}</p>);
        userList.push(<p>Peter</p>);
    } else {
        //userList.push(<p>Rodny</p>)
        this._userList = [];
        userList.push(<p>{this._dataArrayWithObj[0].name}</p>);
        userList.push(<p>XX</p>);
        userList.push(<p>MM</p>);
        userList.push(<p>Peter</p>);
    }*/

    //this._userList = userList;

  }






  ///






  render() {
      return (
      <div>
           {this._userList}

          <hr />
          <div>
            Update STATE (Array within obj) from within component: (will update AND RE-RENDER)
            <br />
            <input type="text" id="mystate" 
                    value={this.textValue}
                    onInput={(event) => this.handleChangeState(event)} />
            </div>

          <button onClick={() => this.createUserList("John")}>Update Array with Msg</button>
      </div>
      )
  }
}




///==================================

  /////
  //https://auth0.com/blog/creating-web-components-with-stencil/
  
  /*
  @Prop() maxValue: number = 5;
  @Prop() value: number = 0;

  @State() starList: Array<object> = [];

  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.value);
  }

  createStarList(numberOfStars: number) {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2605;</span>);
      } else {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2606;</span>);
      }
    }

    this.starList = starList;
  }

   render() {
    return  (
      <div>
        {this.starList}
      </div>
    );
   }

*/