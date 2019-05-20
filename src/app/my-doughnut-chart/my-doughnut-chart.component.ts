import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { IdentificationService } from '../services/dwc_identification_services/identification.service';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartColors = [{ backgroundColor: [] }];

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private identificationService: IdentificationService) { }

  ngOnInit() {

    this.identificationService.getVerification('NUEVO REGISTRO').subscribe(data => {
      this.doughnutChartLabels.push('NUEVO REGISTRO')
      this.doughnutChartData.push(data.length)
      this.doughnutChartColors[0].backgroundColor.push('rgba(255,0,0,0.5)')
    });
    this.identificationService.getVerification('EN REVISION').subscribe(data => {
      this.doughnutChartLabels.push('EN REVISION')
      this.doughnutChartData.push(data.length)
      this.doughnutChartColors[0].backgroundColor.push('rgba(0,0,255,0.5)')
    });
    this.identificationService.getVerification('APROBADO PARA PUBLICAR').subscribe(data => {
      this.doughnutChartLabels.push('APROBADO PARA PUBLICAR')
      this.doughnutChartData.push(data.length)
      this.doughnutChartColors[0].backgroundColor.push('rgba(0,255,0,0.5)')
    });
    
  }

}
