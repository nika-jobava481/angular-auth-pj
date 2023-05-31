import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateIDInputComponent } from './private-idinput.component';

describe('PrivateIDInputComponent', () => {
  let component: PrivateIDInputComponent;
  let fixture: ComponentFixture<PrivateIDInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateIDInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateIDInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
