import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report-main/report/report.component';
import { ChartComponent } from './chart-main/chart/chart.component';
import { AddReportComponent } from './report-main/add-report/add-report.component';
import { AddChartComponent } from './chart-main/add-chart/add-chart.component';
import { EditReportComponent } from './report-main/edit-report/edit-report.component';
import { EditChartComponent } from './chart-main/edit-chart/edit-chart.component';
import { ChartsComponent } from './chart-main/charts/charts.component';

const routes: Routes = [
  {
    path: 'report',
    component: ReportComponent,
    loadChildren: () => import('./report-main/report.module').then(m => m.ReportModule),
  },
  {
    path: 'chart',
    component: ChartComponent,
    loadChildren: () => import('./chart-main/chart.module').then(m => m.ChartModule)
  },
  {
    path: '',
    component: ReportComponent,
    loadChildren: () => import('./report-main/report.module').then(m => m.ReportModule),
  },
  {
    path: 'addreport',
    component: AddReportComponent,
    loadChildren: () => import('./report-main/report.module').then(m => m.ReportModule)
  },
  {
    path: 'addchart',
    component: AddChartComponent,
    loadChildren: () => import('./chart-main/chart.module').then(m => m.ChartModule)
  },
  {
    path: 'editreport',
    component: EditReportComponent,
    loadChildren: () => import('./report-main/report.module').then(m => m.ReportModule)
  },
  {
    path: 'editchart',
    component: EditChartComponent,
    loadChildren: () => import('./chart-main/chart.module').then(m => m.ChartModule)
  },
  {
    path: 'viewchart',
    component: ChartsComponent,
    loadChildren: () => import('./chart-main/chart.module').then(m => m.ChartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
