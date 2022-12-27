import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api = "http://192.168.1.4:105"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Allow': "PUT",
      'Access-Control-Allow-Origin': ['http://192.168.1.4:105', 'https://quote.cloobot.ai/3api/report-gen/materdata/planedgeStatic']
    })
  }

  dataEditReport: any

  reports : any

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getReports(){
    // var dataR = this.httpClient.get(`${this.api}/report`).subscribe(data => {
    //   this.reports = data
    //   console.log(data, this.reports)
    //   return this.reports
    // })
    console.log(this.httpClient.get(`${this.api}`))
    return this.httpClient.get(`${this.api}/report`)
  }

  public getCharts(){
    return this.httpClient.get(`${this.api}/chart`)
  }

  public getComponents(){
    return this.httpClient.get(`${this.api}/components`)
  }

  public getTableData(){
    return this.httpClient.get(`${this.api}/tabledata`)
  }

  submitReport (data:any){
    return this.httpClient.post(`${this.api}/submitreport`, {"data":data})
  }

  public getTableContent(){
    return this.httpClient.post(`https://quote.cloobot.ai/3api/report-gen/materdata/planedgeStatic`, {"nrows": 10})
  }

  public getComponentList(){
    return this.httpClient.get(`${this.api}/componentList`)
  }

  public setDataForEditReport(data: any){
    this.dataEditReport = data
  }

  public getDataForEditReport(){
    return this.dataEditReport
  }
}

