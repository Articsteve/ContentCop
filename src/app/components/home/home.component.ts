import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
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
    {'id': 21, 'name':'Videoblogging'},
    {'id': 31, 'name':'Anime/Animation'},
    {'id': 36, 'name':'Drama'},
    {'id': 44, 'name':'Trailers'},
    {'id': 40, 'name':'Sci-Fi/Fantasy'}
  ]

  constructor( public _ys:YoutubeService) {

      //console.log(id);
      this._ys.getVideosCategories( 10 ).subscribe( categoryVideos => {
        //console.log( artist );
        this.categories = categoryVideos;
        console.log(categoryVideos)
      });

  }

  ngOnInit() {
  }
}
