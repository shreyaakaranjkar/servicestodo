import { Injectable } from '@angular/core';
import { Istudent } from '../interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stdArray : Array<Istudent> = [
    {
      studentName : 'John Doe',
      studentStd : 'Sixth',
      studentSchool : 'ABP Satara',
      id : 123,
      studentAge : 12
    }
  ]

  fetchAllStudents() : Array<Istudent> {
    return this.stdArray;
  }

  addNewStudent(stdObj : Istudent){
    this.stdArray.push(stdObj)
  }
  constructor() { }
}
