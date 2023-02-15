import { Component, OnInit } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { reportDB } from 'src/app/shared/tables/report';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public report = [];
  sales;

  constructor(private salesservice:SalesService) {
    this.report = reportDB.report;
  }

  // lineChart
  public salesChartData = chartData.salesChartData;
  public salesChartLabels = chartData.salesChartLabels;
  public salesChartOptions = chartData.salesChartOptions;
  public salesChartColors = chartData.salesChartColors;
  public salesChartLegend = chartData.salesChartLegend;
  public salesChartType = chartData.salesChartType;

  public areaChart1 = chartData.areaChart1;
  public columnChart1 = chartData.columnChart1;
  public lineChart = chartData.lineChart;

  public chart5 = chartData.chart6

  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      Items: {
        title: 'Items',
      },
      Amount: {
        title: 'Amount',
        type: 'html'
      },
      Cash: {
        title: 'Cash'
      },
      total: {
        title: 'Total'
      },
      Balance: {
        title: 'Balnce'
      }
    },
  };

  ngOnInit() {
    this.loadsales()
  }


  loadsales(){
    this.salesservice.getSales().subscribe((res:any)=>{
      this.sales=res
   console.log(this.sales)

    })

    


  }

}
