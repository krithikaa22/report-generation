import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  name=''
  descp=''

  component : any //complete components

  reports : string[] // list of availble reports

  filter : string[]; //list of available filters

  content_complete : string[] //list in the options in the side


  mainarea : string[]; // list maintaining the added filter

  table: string[] //list maintaining the added reports

  table_header : string[] //list of the headers in the reports
  table_rows : string[] //list of the rows in the reports

  table_content_complete = [{
    header: [],
    rows: [],
    name: ''
  }] //list of objects with the table data

  table_content : any //complete lisst of the reports and their data
  

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousContainer, event.container)
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

    this.table_content_complete = []
    this.table.map((t: string) => {
      this.table_content.map((el: any) => {
        if(Object.keys(el)[0] == t) {
          this.table_header.push(el[t].params[0].example)
          this.table_rows.push(el[t].params[0])
          var temp = {
            header: el[t].params[0].example,
            rows: el[t].params.map((p:any) => {
              if(el[t].params.indexOf(p) != 0 && p.example != undefined) {
                return p.example
              }
            }),
            name: t
          }
          temp.rows = temp.rows.filter((r:any) => r!= undefined)
          this.table_content_complete.push(temp)
        }
      })
    })
    console.log(this.table_content_complete)
  }

  submit(){
    var reports = [{}]
    this.table.map(t => {
      reports.push({
        "component_type":"chart",
        "component_type_id":1234
      })
    })
    this.mainarea.map(t => {
      reports.push({
        "component_type":"filter",
        "component_type_id":1234
      })
    })
    var finalData = {
      "report_name": this.name,
      "report_description": this.descp,
      "report_id": 1234,
      "report_content": reports
    }
    this.htpp.submitReport(finalData).subscribe((data: any) => {
      if (data){
        this.router.navigate(['/'])
      }
      else window.alert('Error')
    })
  }

  constructor(private htpp: HttpService, private router: Router) {
    this.filter = []
    this.mainarea = []
    this.table = []
    this.content_complete = []
    this.table_header = []
    this.table_rows = []
    this.reports = []
    this.htpp.getComponents().subscribe(data => {
      this.component = data
    })
    this.htpp.getTableData().subscribe(data => {
      this.table_content = data
      this.component.map((c:any) => {
        if(c.component_type == 'report') {
          this.reports = c.component_elements
        }
        else if(c.component_type == 'filters'){
          this.filter = c.component_elements
        }
        else this.content_complete.push(c.component_type)
      })
      this.content_complete = this.content_complete.filter(c => c != '')
      console.log(this.reports)
    })
   }

  ngOnInit(): void {
  }

}
