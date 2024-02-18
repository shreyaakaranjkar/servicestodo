import { Component, OnInit } from '@angular/core';
import { Istudent } from '../interface/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {

  studentArray! : Array<Istudent>;

  constructor(private stdServ : StudentService) { }

  ngOnInit(): void {
    this.studentArray = this.stdServ.fetchAllStudents();
    console.log(this.studentArray)
  }

}
