import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MediaComponent } from './media/media.component';
import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SimpsonComponent } from './simpson/simpson.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'Media', component: MediaComponent},
  {path: 'Std', component: StddevComponent},
  {path: 'Regression', component: LinearRegressionComponent},
  {path: 'Simpson', component: SimpsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
