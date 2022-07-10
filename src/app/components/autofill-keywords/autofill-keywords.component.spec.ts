import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofillKeywordsComponent } from './autofill-keywords.component';

describe('AutofillKeywordsComponent', () => {
  let component: AutofillKeywordsComponent;
  let fixture: ComponentFixture<AutofillKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutofillKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutofillKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
