import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidserviceService } from '../uuidservice.service';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

  stdForm! : FormGroup;
  constructor(private stdServ : StudentService, private uidServ : UuidserviceService) { }

  ngOnInit(): void {
    this.stdForm = new FormGroup({
      studentName : new FormControl(null, [Validators.required]),
      studentStd : new FormControl(null, [Validators.required]),
      studentSchool : new FormControl(null, [Validators.required]),
      studentAge : new FormControl(null, [Validators.required])
    })
  }
  
  onSubmit(){
    if(this.stdForm.valid){
      console.log(this.stdForm.value)
   
    let obj = {...this.stdForm.value, id : this.uidServ.uuid()}
    this.stdServ.addNewStudent(obj);
  }
}
}
