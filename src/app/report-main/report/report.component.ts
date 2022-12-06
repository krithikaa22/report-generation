import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  data : any = []

edit = (item: any) => {
 this.http.setDataForEditReport(item)
 this.router.navigate(['/editreport'])
}
  
delete = (item: any) => {
  this.data = this.data.filter((el: any) => el !== item)
}

  constructor(
    private router: Router,
    private http: HttpService
  ) {
  }

  ngOnInit(): void {
    this.http.getReports().subscribe(data => {
      this.data = data
      console.log(data)
    })
  }

}
