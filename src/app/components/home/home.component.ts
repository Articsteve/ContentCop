import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { ChartService } from '../../services/chart.service';
import 'rxjs/Rx';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  categories:any = [];
  categorieList:any = [
    {'id': 1, 'name':'Film & Animation'},
    {'id': 2, 'name':'Autos & Vehicles'},
    {'id': 10, 'name':'Music'},
    {'id': 15, 'name':'Pets & Animals'},
    {'id': 17, 'name':'Sports'},
    {'id': 18, 'name':'Short Movies'},
    {'id': 20, 'name':'Gaming'},
    {'id': 30, 'name':'Movies'},
    {'id': 31, 'name':'Anime/Animation'},
    {'id': 36, 'name':'Drama'},
    {'id': 44, 'name':'Trailers'},
    {'id': 40, 'name':'Sci-Fi/Fantasy'}
  ]

  trendingTags:string[] = this._cs.getTrendingTags().labels

  arr1:any = [];
  arr2:any = [];
  arr3:any = [];
  arr4:any = [];
  arr5:any = [];

  arrTop:any = [];

  constructor( public _ys:YoutubeService, private _cs:ChartService ) {

      let arrTrendingInfo:any[] = [];

      this._ys.getVideosCategories( 10 ).subscribe( categoryVideos => {
        //console.log( artist );
        this.categories = categoryVideos;
      });
      //trendingTags = this._cs.getTrendingTags().labels;
      this.trendingTags.forEach((tag, idx) =>{
        _ys.searchVideo( this.trendingTags[tag] ).subscribe( (videoInfo:any) => {
          this.addArray(videoInfo , idx)
            //arrTrendingInfo[idx] = videoInfo;
        })
    })
    this._ys.getTop().subscribe( videoInfo => {
      this.arrTop = videoInfo;
      console.log("idk", videoInfo) // has tags
    })

  }

  addArray( videoInfo:any, idx:number){
    switch(idx){
        case 0: this.arr1 = videoInfo;
        case 1: this.arr2 = videoInfo;
        case 2: this.arr3 = videoInfo;
        case 3: this.arr4 = videoInfo;
        case 4: this.arr5 = videoInfo;
    }
    // this.logValues();
  }

  ngOnInit() {
  }
}
//.subscribe( videoInfo => {
  // this.videoInfo = videoInfo;
