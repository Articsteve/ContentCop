import { Component, Input} from '@angular/core';
import { ChartService } from '../../../services/chart.service';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../../services/youtube.service';
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
  //labels:string[] = [this.labelArray[0],this.labelArray[1],this.labelArray[2],this.labelArray[3],this.labelArray[4],this.labelArray[5]]
  doughnutChartLabels:string[] = this._cs.getTags( Number(this.category) ).labels// = this.doughnutChartLabels;
  doughnutChartData:number[] = this._cs.getTags( Number(this.category) ).data //= this.doughnutChartData;
  doughnutChartType:string = 'doughnut';

  labelArray:any[] = [];

  constructor( private _cs:ChartService, private router:Router, private activatedRoute: ActivatedRoute, private _ys:YoutubeService){
    //console.log("Id", this.categoryId );
    this.activatedRoute.params
    .map( data => data.id)
    .subscribe( id => {
      this._ys.getTags( id ).subscribe( categoryTags => {
      //console.log( "TagsbyId" , categoryTags)
        let idx:number = 0;
        for(let tags of categoryTags){
          for(let t of tags.tags ){
            this.labelArray[idx] = t;
            idx++;
            //console.log("Idx", idx, "Tag", t)
          }
        }
        console.log(this.labelArray,"Array")
      });
    });
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
