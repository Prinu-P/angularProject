import { Injectable } from '@angular/core';
import { nextTick } from 'process';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoBehaviourService {

data: object = {};
private dataSub = new BehaviorSubject<object>(this.data);
currentData = this.dataSub.asObservable();
  constructor() {
     
   }

   changeDataSub(newData:Object){
       this.dataSub.next(newData);

   }


}
