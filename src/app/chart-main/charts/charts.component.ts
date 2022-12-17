import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  type = ''

  dataPie = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ]
  setType = (val: any)=>{
    this.type = val.target.value
    console.log(this.type)
  }

  dataBar = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  

  view = [700, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  configs: any = {
    rows: 'user',
    columns: 'book',
    value: 'price',
    value_formatter: function(value: any) {
      return '$' + value;
    }
  };

  source= [
    {'user': 'Deba', 'book': 'Angular'},
    {'user': 'Deba', 'book': 'Physics'},
    {'user': 'Aditya', 'book': 'Angular2'},
    {'user': 'Aditya', 'book': 'Angular3'},
    {'user': 'Aditya2', 'book': 'Angular4'},
    {'user': 'Aditya2', 'book': 'Angular'},
    {'user': 'Aditya3', 'book': 'Angular3'},
    {'user': 'Aditya4', 'book': 'Angular4'},
    {'user': 'Aditya', 'book': 'Angular5'},
    {'user': 'Aditya', 'book': 'Angular3'},
    {'user': 'Aditya2', 'book': 'Angular2'},
    {'user': 'Aditya', 'book': 'Angular6'},
    {'user': 'Aditya', 'book': 'Angular7'},
    {'user': 'Aditya', 'book': 'Angular8'},
    {'user': 'Aditya', 'book': 'Angular2'},
    {'user': 'Aditya', 'book': 'Angula3r'},
    {'user': 'Aditya', 'book': 'Angular9'},
    {'user': 'Aditya', 'book': 'Angular7'},
    {'user': 'Aditya', 'book': 'Angular6'},
  ];

  constructor() {
   
  }



  ngOnInit(): void {
  }

}
