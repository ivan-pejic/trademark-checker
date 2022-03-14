import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeShirtComponent } from './change-shirt.component';

describe('ChangeShirtComponent', () => {
  let component: ChangeShirtComponent;
  let fixture: ComponentFixture<ChangeShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeShirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
