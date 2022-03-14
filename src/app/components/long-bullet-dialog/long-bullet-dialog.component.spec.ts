import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongBulletDialogComponent } from './long-bullet-dialog.component';

describe('LongBulletDialogComponent', () => {
  let component: LongBulletDialogComponent;
  let fixture: ComponentFixture<LongBulletDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongBulletDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongBulletDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
