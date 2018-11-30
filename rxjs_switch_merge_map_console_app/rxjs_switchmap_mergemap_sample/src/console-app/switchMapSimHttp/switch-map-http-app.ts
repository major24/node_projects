import { interval, timer, of, from, Observable } from 'rxjs';
import { take, switchMap, delay, map } from 'rxjs/operators';

// https://blog.angular-university.io/rxjs-switchmap-operator/

class SwitchMapHttpApp {
  constructor () {}

  simulateHttp(val: any, timeToDelay: number): Observable<any>{
      return of(val).pipe(
          delay(timeToDelay)
      );
  }

  simulateFirebase(val: any, timeToDelay: number): Observable<any> {
    return interval(timeToDelay).pipe(
        map(index => val + " " + index)
    )
  }

  main (): void {
    console.log('starting swithmap with http simulate app!');

    this.printSwitchMap();

    this.printSwithMap2();

    this.printSimulateFirebase();
  }

  printSwitchMap(){
    // RxJS v6+
    // cold obs. do not emit till subscribe..
    const http1$ = this.simulateHttp("10", 1000);
    const http2$ = this.simulateHttp("20", 1000);
    // subs
    http1$.subscribe(
      console.log,
      console.error,
      () => console.log('http1$ completed.')
    );

    http2$.subscribe(
      console.log,
      console.error,
      () => console.log('http2$ completed....')
    );
  }

  printSwithMap2() {
    const saveUser$ = this.simulateHttp(" user saved ", 1000);
    //  const example = source.pipe(switchMap(() => interval(500)));
    const httpResult$ = saveUser$.pipe(
            switchMap((sourceValue) => {
              console.log(sourceValue);
            return this.simulateHttp(" data reloaded ", 2000);
        }));

    httpResult$.subscribe(
          console.log,
          console.error,
          () => console.log('completed httpResult$')
    );
  }

  printSimulateFirebase() {
    const firebase1$ = this.simulateFirebase("FB-1 ", 5000);
    const firebase2$ = this.simulateFirebase("FB-2 ", 1000);

    const firebaseResult$ = firebase1$.pipe(
          switchMap(sourceValue => {
        console.log("source value " + sourceValue);
        return this.simulateFirebase("inner observable ", 1000)
    }));

    firebaseResult$.subscribe(
        console.log,
        console.error,
        () => console.log('completed firebaseResult$')
    );
  }



}

export default new SwitchMapHttpApp()