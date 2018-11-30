import { interval, timer, of, Observable } from 'rxjs';
import { take, switchMap, delay } from 'rxjs/operators';


class SwitchMapApp {
  constructor () {}

  simulateHttp(val: any, timeToDelay: number): Observable<any>{
      return of(val).pipe(
          delay(timeToDelay)
      );
  }

  main (): void {
    console.log('starting mergeMap with result selector app!');

    this.printSwitchMap();

    this.printWithSelector();

  }


  printSwitchMap(){
    // RxJS v6+
    of({
      name: 'julia',
      path: 'adminPath'
    })
    .pipe(
      switchMap(({path}) => of(`basedPath/${path}`),
        (outerValue, innerValue) => 
           `first ${outerValue.name}, second ${innerValue}`
    ))
    .subscribe(x => console.log(x));
  }

  printWithSelector(){
    const course$ = this.simulateHttp({id:1, description: 'Angular For Beginners'}, 1000);

    const httpResult$ = course$.pipe(
      switchMap(
        courses => this.simulateHttp([{id:200, desc:'math'}, {id:220, desc:'science'}], 2000),
        (courses, lessons, outerIndex, innerIndex) => [courses, lessons] ));

    httpResult$.subscribe(
        console.log,
        console.error,
        () => console.log('completed httpResult$')
    );
  }



}

export default new SwitchMapApp()