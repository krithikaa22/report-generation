import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report-main/report/report.component';
import { AddReportComponent } from './report-main/add-report/add-report.component';
import { EditReportComponent } from './report-main/edit-report/edit-report.component';

const routes: Routes = [
  {
    path: 'report',
    component: ReportComponent,
    loadChildren: () => import('./report-main/report.module').then(m => m.ReportModule),
  },
  {
    path: 'chart',
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
    path: 'editreport',
    component: EditReportComponent,
    loadChildren: () => import('./report-main/report.module').then(m => m.ReportModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
