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
  randomNumberGenerator(){
  let num = Math.round(Math.random() * 10000)
  return num;
  }
}
