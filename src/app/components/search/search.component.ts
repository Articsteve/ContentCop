import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchTerm:string = '';
  constructor( private _ys:YoutubeService ) { }
  searchVideo(){
    if( this.searchTerm.length == 0 ){
      return;
    }
    this._ys.searchVideoByTerm( this.searchTerm ).subscribe();
  }
  ngOnInit() {
  }

}
