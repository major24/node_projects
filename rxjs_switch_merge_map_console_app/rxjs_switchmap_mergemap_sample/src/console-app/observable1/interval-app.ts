import { interval, of } from 'rxjs';
import { take } from 'rxjs/operators';

class IntervalApp {
  constructor () {}

  main (): void {
    console.log('starting interval app!');

    this.printInterval();
    this.printOf();
  }


  printInterval(){
    let src$ = interval(1000)
         .pipe(take(6));
    const sb = src$.subscribe(x => {
      console.log(x);
    });
  }

  printOf() {
    const src$ = of(100, 200, 300, 400);
    const sb = src$.subscribe(x => {
      console.log(x);
    })
  }


}

export default new IntervalApp()