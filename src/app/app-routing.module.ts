import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Front1aComponent } from './front1a/front1a.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { Front3aComponent } from './front3a/front3a.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '1a', component: Front1aComponent},
  {path: '3a', component: Front3aComponent},
  {path: 'Simpson', component: SimpsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
