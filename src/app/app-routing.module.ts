import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Front1aComponent } from './front1a/front1a.component';
import { SimpsonComponent } from './simpson/simpson.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '1a', component: Front1aComponent},
  {path: 'Simpson', component: SimpsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
