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

  // global id. simulate angualr Input or parm value
  gid: number;
  firstReqDelay: number;
  main (): void {
    console.log('starting switchMap with result selector app!');

    of({id:1}).pipe(delay(100)).subscribe((val) => {
        this.gid = val.id;
        this.firstReqDelay = 3000;
        console.log(this.gid + ' -- ' + this.firstReqDelay);
    });

    of({id:1}).pipe(delay(150)).subscribe((val) => {
        console.log('calling search..');
        this.printWithSelectorSetDelay();
    });

    of({id:3}).pipe(delay(200)).subscribe((val) => {
        console.log('changing id to 3');
        this.gid = val.id;
        this.firstReqDelay = 1000;
        console.log(this.gid + ' -- ' + this.firstReqDelay);
    });

    
    //this.printWithSelector(1, 800, 1000);
    //this.printWithSelector(3, 500, 5000);
    //this.printWithSelector();

  }


  printWithSelectorSetDelay(){
    const course$ = this.simulateHttpFindCourse(this.gid, 200);

    const httpResult$ = course$.pipe(
      switchMap(
        courses => this.simulateHttpFindLession(courses.id, this.firstReqDelay),
        (courses, lessons, outerIndex, innerIndex) => [courses, lessons] ));

    httpResult$.subscribe(
        console.log,
        console.error,
        () => console.log('completed httpResult$')
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




}

export default new SwitchMapApp()