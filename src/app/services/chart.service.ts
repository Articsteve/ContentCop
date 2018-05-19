import { Injectable } from '@angular/core';
import { keyword } from '../api/keyword';

@Injectable()
export class ChartService {

  example:keyword = {
    labels: ["Minecraft", "Overwatch", "Monster Hunter", "Fortnite", "God of War", "Sick Ass Turtles"],
    data: [
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator(),
      this.randomNumberGenerator()
    ]
  }

  constructor() { }
  getTags(id:number){
    return this.example;
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
