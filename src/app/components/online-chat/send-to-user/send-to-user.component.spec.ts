import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToUserComponent } from './send-to-user.component';

describe('SendToUserComponent', () => {
  let component: SendToUserComponent;
  let fixture: ComponentFixture<SendToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
