import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonAutocompleteComponent } from './amazon-autocomplete.component';

describe('AmazonAutocompleteComponent', () => {
  let component: AmazonAutocompleteComponent;
  let fixture: ComponentFixture<AmazonAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
