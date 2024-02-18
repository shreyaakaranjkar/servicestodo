import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidserviceService } from '../uuidservice.service';
import { Todoservice1Service } from '../todoservice1.service';

@Component({
  selector: 'app-formpassenger',
  templateUrl: './formpassenger.component.html',
  styleUrls: ['./formpassenger.component.scss']
})
export class FormpassengerComponent implements OnInit {
formsignup!:FormGroup;
  constructor( private _uuidservice:UuidserviceService, private _todoservice:Todoservice1Service) { }

  ngOnInit(): void {
    this.formsignup= new FormGroup({
      name:new FormControl(null,[Validators.required])
      
      
    })
  }
  formsubmit(){
    if(this.formsignup.valid){
      console.log(this.formsignup.value)
let obj={...this.formsignup.value,id:this._uuidservice.uuid()}
// console.log(obj)
this._todoservice.addtodo(obj)
this.formsignup.reset()
    }
  }

}
