import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { IdentificationService } from '../services/dwc_identification_services/identification.service';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [{ backgroundColor: [] }];


  constructor(private identificationService: IdentificationService) { }

  ngOnInit() {
    this.identificationService.getReinos('Animalia').subscribe(data => {
      this.pieChartLabels.push('Animalia')
      this.pieChartData.push(data.length)
      this.pieChartColors[0].backgroundColor.push('rgba(255,0,0,0.5)')
    });
    this.identificationService.getReinos('Plantae').subscribe(data => {
      this.pieChartLabels.push('Plantae');
      this.pieChartData.push(data.length);
      this.pieChartColors[0].backgroundColor.push('rgba(0,255,0,0.5)');
    });
    this.identificationService.getReinos('Fungi').subscribe(data => {
      this.pieChartLabels.push('Fungi');
      this.pieChartData.push(data.length);
      this.pieChartColors[0].backgroundColor.push('rgba(0,0,255,0.5)');
    });
    this.identificationService.getReinos('Monera').subscribe(data => {
      this.pieChartLabels.push('Monera');
      this.pieChartData.push(data.length);
      this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.5)');
    });
    this.identificationService.getReinos('Protista').subscribe(data => {
      this.pieChartLabels.push('Protista');
      this.pieChartData.push(data.length);
      this.pieChartColors[0].backgroundColor.push('rgba(255,255,0,0.5)');
    });
  }

}
