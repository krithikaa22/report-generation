import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: any;

  edit = (item: any) => {
    this.router.navigate(['/editchart'])
  }
    
  delete = (item: any) => {
    this.data = this.data.filter((el: any) => el !== item)
  }

  constructor(
    private router: Router,
    private http: HttpService
  ) {
    this.http.getCharts().subscribe(data => {
      this.data = data
      console.log(this.data)
    })
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
