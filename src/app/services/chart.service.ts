import { Injectable } from '@angular/core';
import { keyword } from '../api/keyword';
import { YoutubeService } from '../services/youtube.service';

@Injectable()
export class ChartService {

  globalCategory = "";

  example:keyword = {
    labels: ["Minecraft", "Overwatch", "Monster Hunter", "Fortnite", "League of Legends", "Borderlands"],
    data: [
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator()
    ]
  }
  film:keyword = {
    labels: [],
    data: [
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator()
    ]
  }
  cars:keyword = {
    labels: [],
    data: [
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator()
    ]
  }
  music:keyword = {
    labels: [],
    data: [
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator()
    ]
  }
  gaming:keyword = {
    labels: [],
    data: [
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator()
    ]
  }
  pets:keyword = {
    labels: [],
    data: [
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator()
    ]
  }

  constructor( public _ys:YoutubeService) {
    let labelArray = [];

    this._ys.getTags( "1" ).subscribe( categoryTags => {
    //console.log( "TagsbyId" , categoryTags)
      let idx:number = 0;
      for(let tags of categoryTags){
        if( tags.tags){
          for(let t of tags.tags ){
            labelArray[idx] = t;
            idx++;
          }
        }
      }
      this.film.labels = [ labelArray[0], labelArray[1], labelArray[2], labelArray[3], labelArray[4] ]
      labelArray = [];
    });

    this._ys.getTags( "2" ).subscribe( categoryTags => {
    //console.log( "TagsbyId" , categoryTags)
      let idx:number = 0;
      for(let tags of categoryTags){
        if( tags.tags){
          for(let t of tags.tags ){
            labelArray[idx] = t;
            idx++;
          }
        }
      }
      this.cars.labels = [ labelArray[0], labelArray[1], labelArray[2], labelArray[3], labelArray[4] ]
      labelArray = [];
    });

    this._ys.getTags( "10" ).subscribe( categoryTags => {
    //console.log( "TagsbyId" , categoryTags)
      let idx:number = 0;
      for(let tags of categoryTags){
        if( tags.tags){
          for(let t of tags.tags ){
            labelArray[idx] = t;
            idx++;
          }
        }
      }
      this.music.labels = [ labelArray[0], labelArray[1], labelArray[2], labelArray[3], labelArray[4] ]
      labelArray = [];
    });

    this._ys.getTags( "15" ).subscribe( categoryTags => {
    //console.log( "TagsbyId" , categoryTags)
      let idx:number = 0;
      for(let tags of categoryTags){
        if( tags.tags){
          for(let t of tags.tags ){
            labelArray[idx] = t;
            idx++;
          }
        }
      }
      this.pets.labels = [ labelArray[0], labelArray[1], labelArray[2], labelArray[3], labelArray[4] ]
      labelArray = [];
    });

    this._ys.getTags( "20" ).subscribe( categoryTags => {
    //console.log( "TagsbyId" , categoryTags)
      let idx:number = 0;
      for(let tags of categoryTags){
        if( tags.tags){
          for(let t of tags.tags ){
            labelArray[idx] = t;
            idx++;
          }
        }
      }
      this.gaming.labels = [ labelArray[0], labelArray[1], labelArray[2], labelArray[3], labelArray[4] ]
      labelArray = [];
    });

  }
  getTags(id:number){

    switch(id){
      case 1:{
        return this.film;
      }
      case 2:{
        return this.cars;
      }
      case 10:{
        return this.music;
      }
      case 20:{
        //return this.gaming
        return this.example
      }
      case 15:{
        return this.pets;
      }
      default:{
        return this.example
      }
    }

  }
  getTrendingTags(){
    return this.example;
  }
  randomNumberGenerator(){
  let num = Math.round(Math.random() * 10000)
  return num;
  }

  /* For whenever I need to filter down an array, got yet to declare an object with the labels, data and count tho
  let result = [];
  for (let index = 0; index < SOURCE.length; index++) {
    let el = SOURCE[index];
    if (!result.includes(el)) result.push(el);
  }*/

}
