import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodopssengerlistComponent } from './todopssengerlist/todopssengerlist.component';
import { FormpassengerComponent } from './formpassenger/formpassenger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StdformComponent } from './stdform/stdform.component';
import { StdtableComponent } from './stdtable/stdtable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    TodopssengerlistComponent,
    FormpassengerComponent,
    StdformComponent,
    StdtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
