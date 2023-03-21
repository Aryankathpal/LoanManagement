import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './Components/apply/apply.component';
import { CalcComponent } from './Components/calc/calc.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HistoryComponent } from './Components/history/history.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
   
  {path:'',component:LoginComponent},  
  {path:'home',component:HomeComponent, 
  children:[
  {path:'dashboard',component:DashboardComponent},
  {path:'apply',component:ApplyComponent},
  {path:'history',component:HistoryComponent},
  {path:'emi-calculator',component:CalcComponent},

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
