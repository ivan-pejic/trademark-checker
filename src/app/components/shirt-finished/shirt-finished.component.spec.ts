import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtFinishedComponent } from './shirt-finished.component';

describe('ShirtFinishedComponent', () => {
  let component: ShirtFinishedComponent;
  let fixture: ComponentFixture<ShirtFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirtFinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
