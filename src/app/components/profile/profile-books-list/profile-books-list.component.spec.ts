import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBooksListComponent } from './profile-books-list.component';

describe('ProfileBooksListComponent', () => {
  let component: ProfileBooksListComponent;
  let fixture: ComponentFixture<ProfileBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBooksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
