import { Component, Input} from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: []
})
export class PieChartComponent {

  @Input('category') category;

  label:string = "";
  labels:string[] = this._cs.getTags( Number(this.category) ).labels;
  doughnutChartLabels:string[] = this._cs.getTags( Number(this.category) ).labels// = this.doughnutChartLabels;
  doughnutChartData:number[] = this._cs.getTags( Number(this.category) ).data //= this.doughnutChartData;
  doughnutChartType:string = 'doughnut';

  constructor( private _cs:ChartService, private router:Router){
  }

  public chartClicked(e:any):void {
    //console.log(e.active[0]._index);
    this.label = this.labels[e.active[0]._index];
    this.router.navigate(['/keyword', this.label]);

  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
