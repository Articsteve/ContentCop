import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  videosArr:any[] = [];
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

  getVideos( id ){
    let url = `${this.urlYoutube}videos`;
    let params = new URLSearchParams();

    params.set ('part', 'snippet');
    params.set ('chart', 'mostPopular');
    params.set ('key', this.apiKey);
    params.set ('videoCategoryId', id);
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
      let videos:any[] = [];
      for (let video of res.json().items){
        let videoSnippet = video.snippet
        videos.push (videoSnippet);
      }
      return videos
    })
  }
  searchVideo( term:string ){

    let url = `${this.urlYoutube}search`;
    let params = new URLSearchParams();
    params.set ('part', 'snippet');
    params.set ('type', 'video');
    params.set ('q', term);
    params.set ('key', this.apiKey);
    return this.http.get( url , {search:params}).map( res =>{
      let videos:any[] = [];
      for (let video of res.json().items){
        let videoSnippet = video.snippet
        videos.push (videoSnippet);
      }
      return videos
    })
  }
  searchVideoByTerm( term:string ){

    let url = `${this.urlYoutube}search`;
    let params = new URLSearchParams();
    params.set ('part', 'snippet');
    params.set ('type', 'video');
    params.set ('q', term);
    params.set ('key', this.apiKey);
    this.videosArr = [];
    return this.http.get( url , {search:params}).map( res =>{
      for (let video of res.json().items){
        let videoSnippet = video.snippet
        this.videosArr.push (videoSnippet);
      }
      return this.videosArr
    })
  }
  getTop(){

    let url = `${this.urlYoutube}videos`;
    let params = new URLSearchParams();
    params.set ('part', 'snippet');
    params.set ('chart', 'mostPopular');
    params.set ('regionCode', 'us');
    params.set ('key', this.apiKey);
    return this.http.get( url , {search:params}).map( res =>{
      let videos:any[] = [];
      for (let video of res.json().items){
        let videoSnippet = video.snippet
        videos.push (videoSnippet);
      }
      return videos
    })
  }

  getTags( categoryId:string ){
    let url = `${this.urlYoutube}videos`;
    let params = new URLSearchParams();
    params.set ('part', 'snippet');
    params.set ('chart', 'mostPopular');
    params.set('videoCategoryId' , categoryId);
    params.set ('regionCode', 'us');
    params.set ('key', this.apiKey);
    return this.http.get( url , {search:params}).map( res =>{
      let videos:any[] = [];
      for (let video of res.json().items){
        let videoSnippet = video.snippet
        videos.push (videoSnippet);
      }
      return videos
    })
  }
}
