import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodopssengerlistComponent } from './todopssengerlist.component';

describe('TodopssengerlistComponent', () => {
  let component: TodopssengerlistComponent;
  let fixture: ComponentFixture<TodopssengerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodopssengerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodopssengerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
