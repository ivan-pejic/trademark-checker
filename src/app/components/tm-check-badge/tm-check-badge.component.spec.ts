import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmCheckBadgeComponent } from './tm-check-badge.component';

describe('TmCheckBadgeComponent', () => {
  let component: TmCheckBadgeComponent;
  let fixture: ComponentFixture<TmCheckBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmCheckBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmCheckBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
