import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleCasePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LongBulletDialogComponent } from './components/long-bullet-dialog/long-bullet-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { ShirtListComponent } from './components/shirt-list/shirt-list.component';
import { OptionsListComponent } from './components/options-list/options-list.component';
import { ShirtImportDialogComponent } from './components/shirt-import-dialog/shirt-import-dialog.component';
import { ShirtFinishedComponent } from './components/shirt-finished/shirt-finished.component';
import { ChangeShirtComponent } from './components/change-shirt/change-shirt.component';
import { ImageZoomComponent } from './components/image-zoom/image-zoom.component';
import { TmCheckBadgeComponent } from './components/tm-check-badge/tm-check-badge.component';
import { AutofillComponent } from './components/autofill/autofill.component';
import { AutofillKeywordsComponent } from './components/autofill-keywords/autofill-keywords.component';
import { AmazonAutocompleteComponent } from './components/amazon-autocomplete/amazon-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    LongBulletDialogComponent,
    HeaderComponent,
    ShirtListComponent,
    OptionsListComponent,
    ShirtImportDialogComponent,
    ShirtFinishedComponent,
    ChangeShirtComponent,
    ImageZoomComponent,
    TmCheckBadgeComponent,
    AutofillComponent,
    AutofillKeywordsComponent,
    AmazonAutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    TitleCasePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
