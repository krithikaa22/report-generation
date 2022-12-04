import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import { ChartComponent } from './chart/chart.component';
import { AddChartComponent } from './add-chart/add-chart.component';
import { EditChartComponent } from './edit-chart/edit-chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NzIconModule } from 'ng-zorro-antd/icon';
import {DataTablesModule} from 'angular-datatables';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {DragDropModule} from '@angular/cdk/drag-drop';



registerLocaleData(en);
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    ChartComponent,
    AddChartComponent,
    EditChartComponent
  ],
  imports: [
    materialModules,
    FormsModule,
    NzIconModule,
    NzMenuModule,
    DragDropModule,
    NzDropDownModule,
  ],
})
export class ChartModule { }