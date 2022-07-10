import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutofillComponent } from './components/autofill/autofill.component';
import { ShirtListComponent } from './components/shirt-list/shirt-list.component';

const routes: Routes = [
  { path: 'svabo', component: AutofillComponent },
  { path: '', component: ShirtListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
