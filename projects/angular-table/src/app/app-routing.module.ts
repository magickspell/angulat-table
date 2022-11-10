import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigatorComponent} from "./views/navigator/navigator.component";
import {SummaryComponent} from "./views/summary/summary.component";

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'navigator', component: NavigatorComponent},
  {path: 'navigator/:tab', component: NavigatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
