import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtListComponent } from './shirt-list.component';

describe('ShirtListComponent', () => {
  let component: ShirtListComponent;
  let fixture: ComponentFixture<ShirtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirtListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
