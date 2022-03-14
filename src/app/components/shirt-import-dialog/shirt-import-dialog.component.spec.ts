import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtImportDialogComponent } from './shirt-import-dialog.component';

describe('ShirtImportDialogComponent', () => {
  let component: ShirtImportDialogComponent;
  let fixture: ComponentFixture<ShirtImportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirtImportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
