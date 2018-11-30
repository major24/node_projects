import { interval, of } from 'rxjs';
import { take, mergeMap, switchMap } from 'rxjs/operators';

class MergeMapApp {
  constructor () {}

  main (): void {
    console.log('starting mergeMap app!');

    this.printMergeMap();
    //this.printSwitchMap();
  }


  printMergeMap(){
    let src$ = interval(1000)
         .pipe(take(6));
    //map to inner observable and flatten
    const example = src$.pipe(mergeMap(val => of(`${val} World-MM`)));
    //output: 'Hello, Welcome World!'
    const subscribe = example.subscribe(val => console.log(val));
  }

  printSwitchMap(){
    let src$ = interval(1000)
         .pipe(take(6));
    //map to inner observable and flatten
    const example = src$.pipe(switchMap(val => of(`${val} World-SW`)));
    //output: 'Hello, Welcome World!'
    const subscribe = example.subscribe(val => console.log(val));
  }

}

export default new MergeMapApp()