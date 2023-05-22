import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherBookComponent } from './add-other-book.component';

describe('AddOtherBookComponent', () => {
  let component: AddOtherBookComponent;
  let fixture: ComponentFixture<AddOtherBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOtherBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOtherBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
