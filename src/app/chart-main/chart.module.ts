import { NgModule } from '@angular/core';

import { ChartComponent } from './chart/chart.component';
import { AddChartComponent } from './add-chart/add-chart.component';
import { EditChartComponent } from './edit-chart/edit-chart.component';
import { ChartsComponent } from './charts/charts.component';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';

import { MatIconModule } from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {CommonModule} from "@angular/common"
import {ChartRouteRoutingModule} from "./chart-route-routing.module"
import {AngularPivotTableModule} from 'angular-pivot-table';

registerLocaleData(en);
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    ChartComponent,
    AddChartComponent,
    EditChartComponent,
    ChartsComponent
  ],
  imports: [
    materialModules,
    FormsModule,
    NzIconModule,
    NzMenuModule,
    DragDropModule,
    NzDropDownModule,
    CommonModule,
    NgxChartsModule,
    ChartRouteRoutingModule,
    AngularPivotTableModule,
    NzSelectModule,
    NzTagModule,
    NzInputModule,
  ],
})
export class ChartModule { }