import { interval, of } from 'rxjs';
import { take, merge } from 'rxjs/operators';

class MergeApp {
  constructor () {}

  main (): void {
    console.log('starting interval app!');

    this.printMerge();
    this.printMergeOf();
  }


  printMerge(){
    console.log(`merge with interval..`);
    let src1$ = interval(1000)
         .pipe(take(6));
    let src2$ = interval(1000)
         .pipe(take(5));

    let ex = src1$.pipe(merge(src2$));

    const sb = ex.subscribe(x => {
      console.log(x);
    });
    console.log(`----------`);
  }

  printMergeOf() {
    console.log(`merge with of, array`);
    const src1$ = of(1, 2, 3, 4);
    const src2$ = of(100, 200, 300, 400);

    let ex = src1$.pipe(merge(src2$));

    const sb = ex.subscribe(x => {
      console.log(x);
    });
    console.log(`------------`);
  }


}

export default new MergeApp()