import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsReplaysComponent } from './comments-replays.component';

describe('CommentsReplaysComponent', () => {
  let component: CommentsReplaysComponent;
  let fixture: ComponentFixture<CommentsReplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsReplaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsReplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
