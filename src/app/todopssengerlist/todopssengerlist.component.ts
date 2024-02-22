import { Component, OnInit } from '@angular/core';
import { Todoservice1Service } from '../todoservice1.service';
import { Ipassenger } from '../interface';

@Component({
  selector: 'app-todopssengerlist',
  templateUrl: './todopssengerlist.component.html',
  styleUrls: ['./todopssengerlist.component.scss']
})
export class TodopssengerlistComponent implements OnInit {
todos!:Array<Ipassenger>;

  constructor(private _todoservice:Todoservice1Service) { }

  ngOnInit(): void {
    this.todos=this._todoservice.fetchpassenger() 
  }
  ondelet(id:string){
console.log(id)
this._todoservice.removetodo(id)
  }
}
