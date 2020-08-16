import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { DatabarangComponent } from './barang/databarang/databarang.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  {path: 'databarang', component: DatabarangComponent},
  {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }