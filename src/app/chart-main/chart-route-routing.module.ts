import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { AddChartComponent } from './add-chart/add-chart.component';
import { EditChartComponent } from './edit-chart/edit-chart.component';
import { ChartsComponent } from './charts/charts.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'chart',
    pathMatch: 'full',
  },
  {
    path: 'viewchart',
    component: ChartsComponent,
  },
  {
    path: 'addchart',
    component: AddChartComponent,
  },
  {
    path: 'editchart',
    component: EditChartComponent,
  },
  {
    path: 'chart',
    component: ChartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRouteRoutingModule { }
