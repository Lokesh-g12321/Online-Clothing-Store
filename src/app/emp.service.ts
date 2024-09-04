import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  emp1:string[]=["loki","21691A2879","21691A2879@mits.ac.in"]
  emp2:string[]=["sunith","21691A28F0","21691A28F0@mits.ac.in"]
  emp3:string[]=["Jashwanth","21691A2859","21691A2859@mits.ac.in"]
  getinfo1():string[]{
    return this.emp1
  }
  getinfo2():string[]{
    return this.emp2
  }
  getinfo3():string[]{
    return this.emp3
  }


  constructor() { }
}
