import { Injectable } from '@angular/core';
import { Istudent } from '../interface/student';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private snackbar : SnackbarService){}

  stdArray : Array<Istudent> = [
    {
      studentName : 'John Doe',
      studentStd : 'Sixth',
      studentSchool : 'ABP Satara',
      id : '123',
      studentAge : 12
    }
  ]

  fetchAllStudents() : Array<Istudent> {
    return this.stdArray;
  }

  addNewStudent(stdObj : Istudent){
    this.stdArray.push(stdObj);
    this.snackbar.openSnackBar(`Student ${stdObj.studentName} successfully added`,'close')
  }

  //remove
  onRemoveStudent(id : string){
    let getIndex = this.stdArray.findIndex(std => std.id === id)
    this.stdArray.splice(getIndex,1)
  }
}
