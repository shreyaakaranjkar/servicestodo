import { Component, OnInit } from '@angular/core';
import { Istudent } from '../interface/student';
import { StudentService } from '../services/student.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {

  studentArray! : Array<Istudent>;

  constructor(private stdServ : StudentService, private snackbar : SnackbarService) { }

  ngOnInit(): void {
    this.studentArray = this.stdServ.fetchAllStudents();
    console.log(this.studentArray)
  }

  onRemove(id : string){
    this.stdServ.onRemoveStudent(id)
    this.snackbar.openSnackBar(`Student deleted!`,'close')
  }

}
