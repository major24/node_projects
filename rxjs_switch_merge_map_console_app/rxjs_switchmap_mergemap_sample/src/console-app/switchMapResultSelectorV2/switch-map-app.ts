import { interval, timer, of, Observable } from 'rxjs';
import { take, switchMap, delay } from 'rxjs/operators';


class SwitchMapApp {
  constructor () {}

  private courses = [{id:1, desc:'Computer Science'},
                      {id:2, desc:'Business Management'},
                       {id:3, desc:'Canadian History'}];

  private lessions = [{courseid:1, reqd: ['Java', 'CSharp']},
                      {courseid:2, reqd: ['Accouting', 'Economics']},
                      {courseid:3, reqd: ['Native IndianP1', 'New Comers']}
                      ];

  findCourse(id: number){
    return this.courses.find((course) => {
      return course.id === id;
    });
  }

  findLession(courseid: number){
    return this.lessions.find((data) => {
      return data.courseid === courseid;
    });
  }


  simulateHttpFindCourse(val: any, timeToDelay: number): Observable<any>{
      return of(this.findCourse(val)).pipe(
        delay(timeToDelay)
      );
  }

  simulateHttpFindLession(val: any, timeToDelay: number): Observable<any>{
      return of(this.findLession(val)).pipe(
        delay(timeToDelay)
      );
  }

  main (): void {
    console.log('starting switchMap with result selector app!');
    //console.log(this.courses);
    //console.log(this.findCourse(2));  // {id:2, desc:'Business Management'}
    //console.log(this.findLession(2)); // {courseid:2, reqd: ['Accouting', 'Economics']}

    // test simply to return obj via sim http..
    //this.printBasicSwitchMap();

    this.printWithSelector(2, 2000, 3000); // courseid, delay, delay
    this.printWithSelector(1, 800, 1000);
    this.printWithSelector(3, 500, 5000);
    //this.printWithSelector();

  }

  printBasicSwitchMap(){
    // RxJS v6+
    // cold obs. do not emit till subscribe..
    const http1$ = this.simulateHttpFindCourse(2, 1000);
    // subs
    http1$.subscribe(
      console.log,
      console.error,
      () => console.log('http1$ completed.')
    );

    const http2$ = this.simulateHttpFindLession(2, 500);
    // subs
    http2$.subscribe(
      console.log,
      console.error,
      () => console.log('http2$ completed.')
    );

  }



  printWithSelector(id: number, timeDelayCrse: number, timeDelayLess: number){
    const course$ = this.simulateHttpFindCourse(id, timeDelayCrse);

    const httpResult$ = course$.pipe(
      switchMap(
        courses => this.simulateHttpFindLession(courses.id, timeDelayLess),
        (courses, lessons, outerIndex, innerIndex) => [courses, lessons] ));

    httpResult$.subscribe(
        console.log,
        console.error,
        () => console.log('completed httpResult$')
    );
  }


/** simple sample 
 *   printSwitchMap(){
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
 */


}

export default new SwitchMapApp()