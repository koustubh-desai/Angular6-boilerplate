import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';

const routes:Routes=[
  {path:'',redirectTo:'/movies',pathMatch:'full'},
  {path:'movies',component:DashboardComponent}
]

@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)],
  declarations: []
})
export class RoutingModule { }
