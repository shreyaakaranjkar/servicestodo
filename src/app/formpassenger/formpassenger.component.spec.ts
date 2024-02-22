import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpassengerComponent } from './formpassenger.component';

describe('FormpassengerComponent', () => {
  let component: FormpassengerComponent;
  let fixture: ComponentFixture<FormpassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
