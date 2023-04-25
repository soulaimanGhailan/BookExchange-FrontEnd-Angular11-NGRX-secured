import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOwnedBookComponent } from './single-owned-book.component';

describe('SingleOwnedBookComponent', () => {
  let component: SingleOwnedBookComponent;
  let fixture: ComponentFixture<SingleOwnedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOwnedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleOwnedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
