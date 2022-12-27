import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-chart',
  templateUrl: './edit-chart.component.html',
  styleUrls: ['./edit-chart.component.css']
})
export class EditChartComponent implements OnInit {
  component : any

  val = ''

  text(){
    console.log(this.val)
  }

  mainarea : string[]; // list maintaining the added filter

 

  // tables_chosen : string[]


  table_content : any

  chart_type: string[]
  tables: any //list maintaining the added reports
  filters = [
   ''
  ]
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
    // var temp: string[] = []
    //   this.table_content.map((el:any) => temp.push(el.data_table))
      this.tables = ['Temp Data']
      // this.table_content.filter((r: any) => r.data_table == this.chart_type)[0].cols.map((c:any) => {
      //   this.table_header.push({
      //     "col_name": c,
      //     "label": c
      //   })
      // })

    //   this.tables_chosen.map(el => {
    //     console.log(this.table_content[0].cols)
    //     this.table_content.filter((r: any) => r.data_table == el)[0].cols.map((c:any) => {
    //   this.table_header.push({
    //     "col_name": c,
    //     "label": c
    //   })
    // })
    //   })
    console.log(this.tables)
  }

  setCols = () => {
    // console.log(Object(this.table_content[0]).keys)
    
    Object.keys(this.table_content[0]).map((c: any, index) => {
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
    this.filters = Object.keys(this.table_content[0])
    console.log(this.filters, this.table_header)
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
    this.chart_type = ['']
    this.tables = ['']
    this.http.getComponentList().subscribe(data => {
      this.component = data
    })
    
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
