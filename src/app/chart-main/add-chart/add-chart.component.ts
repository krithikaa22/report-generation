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

  tables: any //list maintaining the added reports
  filters = [
    {
      "filter_id":'',
      "filter_col":"",
      "data_type":"",
      "data_table_id":''
}
  ]
  table_header = [{
    "col_name": "",
    "label": ""
  }] //list of the headers in the reports
  tables_chosen : string[]


  table_content : any
  


  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousContainer, event.container, event.previousIndex, event.currentIndex)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    if(this.tables_chosen.length > 0){
      var temp: string[] = []
      this.table_content.map((el:any) => temp.push(el.data_table))
      this.tables = temp

      this.tables_chosen.map(el => {
        console.log(this.table_content[0].cols)
        this.table_content.filter((r: any) => r.data_table == el)[0].cols.map((c:any) => {
      this.table_header.push({
        "col_name": c,
        "label": c
      })
    })
      })
    }
  }

  setCols = (item: any) => {
    this.table_content.filter((r:any) => r.data_table == item)[0].cols.map((c:any) => {
      this.table_header.push({
        "col_name": c,
        "label": c
      })
    })
    this.filters = this.table_content.filter((r: any) => r.data_table == item)[0].filters
    console.log(this.filters)
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
    this.http.getComponentList().subscribe(data => {
      this.component = data
    })
    
    this.http.getTableContent().subscribe(data => {
      this.table_content = data
      })  

  
    this.mainarea = ['']
    this.table_header = [{
      "col_name": "",
      "label": ""
    }]

    this.tables_chosen = ['']
    this.table_header = this.table_header.filter(t => this.table_header.indexOf(t) != 0)
    console.log(this.table_content)
   }

  ngOnInit(): void {
  }

}
