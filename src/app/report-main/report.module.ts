import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import { ReportComponent } from '../report-main/report/report.component';
import { AddReportComponent } from './add-report/add-report.component';
import { EditReportComponent } from './edit-report/edit-report.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {CommonModule} from "@angular/common"

import { ReportRouteRouting } from './report-route-routing.module';

registerLocaleData(en);
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    ReportComponent,
    AddReportComponent,
    EditReportComponent,
  ],
  imports: [
    materialModules,
    FormsModule,
    NzIconModule,
    NzMenuModule,
    DragDropModule,
    NzDropDownModule,
    CommonModule,
    ReportRouteRouting
  ],
})
export class ReportModule { }
