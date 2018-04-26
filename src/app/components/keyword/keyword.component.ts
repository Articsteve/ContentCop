import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styles: []
})
export class KeywordComponent implements OnInit {

  videoInfo:any;
  constructor( private activatedRoute: ActivatedRoute, private _ys:YoutubeService ) {
    this.activatedRoute.params
    .map( data => data.word)
    .subscribe( word => {
      this._ys.searchVideo( word ).subscribe( videoInfo => {
        this.videoInfo = videoInfo;
        console.log(videoInfo,"Video Info")
      });
    });
  }

  ngOnInit() {
  }

}
