import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoEditFromComponent } from './user-info-edit-from.component';

describe('UserInfoEditFromComponent', () => {
  let component: UserInfoEditFromComponent;
  let fixture: ComponentFixture<UserInfoEditFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoEditFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoEditFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
