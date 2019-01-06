import { Component, Prop, State } from '@stencil/core';

@Component({
 tag: 'my-list',
 shadow: true
})
export class MyList {
  @Prop() data: string;
  @State() _prod: any;

  componentWillLoad(){
    console.log('mylist-componentDidLoad()');
    // parse list
    try{
        this._prod = JSON.parse(this.data);
    } catch (e) {
        console.log("Error: " + e);
    }
    console.log(this._prod);
  }

  render() {
    return (
      <div>
        <h2>My List - {this._prod.prod}</h2>
        {this._prod.items.map((e) => {
            console
            return (
                <my-list-item data={e}></my-list-item>
            )
        })}
      </div>
    );
  }
}
