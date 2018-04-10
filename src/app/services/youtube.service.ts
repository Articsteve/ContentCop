import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private urlYoutube:string = "https://www.googleapis.com/youtube/v3/";
  private apiKey = "AIzaSyAopPDDL2zU0gAFYgyxEjmtZQ2EveyNodk";

  constructor( public http:Http ) { }

  getCategories(){
    let url = `${this.urlYoutube}guideCategories`;
    let params = new URLSearchParams();

    params.set ('part', 'snippet');
    params.set ('key', this.apiKey);
    params.set ('regionCode', 'US');
    return this.http.get( url , {search:params}).map( res =>{
      console.log( res.json());

      let videos:any[] = [];
      for (let video of res.json().items){
        let videoSnippet = video.snippet
        videos.push (videoSnippet);
      }
      return videos
    })
  }
  getVideosCategories( id ){
    let url = `${this.urlYoutube}search`;
    let params = new URLSearchParams();
    params.set ('part', 'snippet');
    params.set ('type', 'video');
    params.set ('videoCategoryId', id);
    params.set ('key', this.apiKey);
    return this.http.get( url , {search:params}).map( res =>{
      console.log( res.json());

      let videos:any[] = [];
      for (let video of res.json().items){
        let videoSnippet = video.snippet
        videos.push (videoSnippet);
      }
      return videos
    })
  }
}
