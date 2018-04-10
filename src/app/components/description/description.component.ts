import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: []
})
export class DescriptionComponent implements OnInit {

  categories:any[] = [];
  constructor( private activatedRoute: ActivatedRoute, private _ys:YoutubeService) {
    this.activatedRoute.params
    .map( data => data.id)
    .subscribe( id => {
      console.log(id);
      this._ys.getVideosCategories( id ).subscribe( categoryVideos => {
        this.categories = categoryVideos;
        console.log(categoryVideos)
      });
    });
  }
  ngOnInit() {
  }

}
