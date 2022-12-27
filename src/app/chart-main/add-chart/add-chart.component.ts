import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../http.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-add-chart',
  templateUrl: './add-chart.component.html',
  styleUrls: ['./add-chart.component.css']
})
export class AddChartComponent implements OnInit {

  component : any

  val = ''

  text(){
    console.log(this.val)
  }

  mainarea : string[]; // list maintaining the added filter

 

  // tables_chosen : string[]
  x = ""
  y = ''

  table_content : any

  chart_type: string
  tables: any //list maintaining the added reports
  filters : any
  table_header = [{
    "col_name": "",
    "label": ""
  }] //list of the headers in the reports

  col_list =[{
    "col_name": "",
    "label": ""
  }]

  drop() {
    console.log(this.chart_type)
   
      this.tables = [
        {
          'data_table': "Temp",
          "data_table_id": 1234,
          "cols": this.table_content[0],
          "filters": [
            {
              "filter_id":123,
              "filter_col":"date created",
              "data_type":"timestamp",
              "data_table_id":1213
            },
            {
              "filter_id":123,
              "filter_col":"date created",
              "data_type":"timestamp",
              "data_table_id":1213
            },
            {
              "filter_id":123,
              "filter_col":"date created",
              "data_type":"timestamp",
              "data_table_id":1213
            },
          ]
        }
      ]
  
    console.log(this.tables)
  }

  setCols = () => {
    // console.log(Object(this.table_content[0]).keys)
    this.table_header = []
    this.col_list = []
    this.filters = []
    Object.keys(this.tables[0].cols).map((c: any, index) => {
      this.table_header.push({
        "col_name": c,
        "label": c
      })
      if( index < 5){
        this.col_list.push({
          "col_name": c,
          "label": c
        })
      }

    })
    this.filters = this.tables[0].filters
  } 
  addColumn(){
    console.log(this.col_list)
    this.col_list.push({
      "col_name": '',
      "label": ''
    })
  }
  submit(){
    var finalData = {
      "chart_type" : "table",
      "data_table" : 1213,
      "columns":this.table_header,
      "filters": this.filters
}

  console.log(finalData)
    this.http.submitReport(finalData).subscribe((data: any) => {
      if (data){
        this.router.navigate(['/'])
      }
      else window.alert('Error')
    })
  }

  constructor( private http: HttpService, private router: Router) {
    this.chart_type = ''
    this.tables = ['']
    this.http.getComponentList().subscribe(data => {
      this.component = data
    })

    console.log(this.component)
    
    this.http.getTableContent().subscribe(data => {
      console.log(data)
      this.table_content = data
      console.log(this.table_content.data)
      this.table_content = this.table_content.data
      })  

  
    this.mainarea = ['']
    this.table_header = [{
      "col_name": "",
      "label": ""
    }]
    this.col_list = [{
      "col_name": "",
      "label": ""
    }]
    // this.tables_chosen = ['']
    this.table_header = this.table_header.filter(t => this.table_header.indexOf(t) != 0)
    console.log(this.table_content)
    this.filters = [{
      "filter_id":0,
              "filter_col": '',
              "data_type":"",
              "data_table_id":0
    }]
   }

  ngOnInit(): void {

    // this.component.map(c => {
    //   if(c.component_type == 'report') {
    //     this.reports = c.component_elements
    //   }
    //   else if(c.component_type == 'filters'){
    //     this.filter = c.component_elements
    //   }
    //   else this.content_complete.push(c.component_type)
    // })]
  
  }

}
