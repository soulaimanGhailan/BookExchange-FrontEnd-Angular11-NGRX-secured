import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserInfoComponent } from './profile-user-info.component';

describe('ProfileUserInfoComponent', () => {
  let component: ProfileUserInfoComponent;
  let fixture: ComponentFixture<ProfileUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
