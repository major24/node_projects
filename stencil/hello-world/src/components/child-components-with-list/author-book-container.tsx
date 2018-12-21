import { Component, Prop, State, Listen } from '@stencil/core';

//import { Author } from './author';

@Component({
 tag: 'author-book-container',
 styleUrl: 'author-book-container.scss',
 shadow: true
})
export class AuthorBookContainer {
  @Prop() data: string;
  @State() _data: any;

  @State() _temp: string = "Major";
  @State() _css: string = "addr-hidden"


  componentWillLoad(){
    console.log('componentWillLoad()');
    // get data from api (string data)
    const resp = `[
      {"name": "Steve", "books": ["st-book 1", "st-book 2"]},
      {"name": "Renold", "books": ["ry-book 1", "ry-book 2"]}
    ]`;
    //      
    this.parseAndPopulate(resp);
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
    console.log('in upd');
    const newData = `[
      {"name": "Kamalan Kalki", "books": ["London is falling", "Thiefs in Kandahar"]},
      {"name": "Sujatha Mani", "books": ["Welcome to heaven"]}
    ]`;
    setTimeout(() => {
      this._temp = "Nalliah";
      this.parseAndPopulate(newData);
    }, 200);
    
  }

  parseAndPopulate(authBookData: string){
    try{
      this._data = JSON.parse(authBookData);
      console.log(this._data);
    } catch(e){
      console.log(`ERROR: ${e}`);
    }
  }

  edit(e){
    console.log(e);
    if (this._css == "addr-hidden"){
      this._css = "addr-visible";
    } else {
      this._css = "addr-hidden";
    }
  }

    // on update event from child component..
    @Listen('onUpdate')
    onUpdateName(e) {
      console.log('in parent on update: ' + e.detail);
      console.log('-----');
      //console.log(this._data);
      const newData = this._data.map((author) => {
        // HARD Code for now. Add unique ID and update by ID..
        if (author.name == 'Steve') {
          author.name = e.detail;
        }
        return author;
      });
      this._data = newData;
      console.log(this._data);
    }

  render() {
    return (
      <div>
        <h2> --- Author-Book-Container --- </h2>
        {this._data.map((e) => {
          console.log(e);
          return (
            <div>
              <div>
                <author-comp name={e.name}></author-comp>
                {e.books.map((b) => {
                  console.log(b);
                  return (<book-comp title={b}></book-comp>)
                })}

                <author-edit name={e.name}></author-edit>
                
              </div>
            </div>
          ) // end of 2 comps render

   
        })}
        
        <hr />
        <button onClick={() => this.update()}>Update from author-book-cont comp</button>
      </div>
    );
  }
}