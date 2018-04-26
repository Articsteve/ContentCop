import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {  Video } from '../api/video';

@Injectable()
export class MysqlService {

  constructor(public _http: Http) {
  }

  public postVideo( video:Video ) {
    const url = 'http://localhost:4200/post_video.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(url, {channelId: video.channelId, channelTitle: video.channelTitle, defaultAudioLanguage: video.defaultAudioLanguage,
                          description: video.description , videoTitle: video.videoTitle, publishedAt: video.publishedAt, tags: video.tags }, {headers: headers})
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }

  public getVideos() {
    return this._http.get('http://localhost:4200/get_videos.php')
      .map(rep => rep.json());
  }

}
