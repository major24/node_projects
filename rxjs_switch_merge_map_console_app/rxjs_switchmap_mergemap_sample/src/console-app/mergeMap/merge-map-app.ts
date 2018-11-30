import { interval, of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

class MergeMapApp {
  constructor () {}

  main (): void {
    console.log('starting mergeMap app!');

    this.printMergeMap();

  }


  printMergeMap(){
    //emit 'Hello'
    const source = of(['Hello', ' Welcome']);
    //map to inner observable and flatten
    const example = source.pipe(mergeMap(val => of(`${val} World!`)));
    //output: 'Hello, Welcome World!'
    const subscribe = example.subscribe(val => console.log(val));
    console.log(`----------`);
  }



}

export default new MergeMapApp()