import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryname'
})
export class CategorynamePipe implements PipeTransform {

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


  transform(value: number): string {
    let categoryName:string = "";
    for(let cat of this.categorieList){
      if(Number (value) === cat.id)
      {
        categoryName = cat.name;
      }
    }
    return categoryName;
  }

}
