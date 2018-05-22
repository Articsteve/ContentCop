import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: any, text:string): any {
    console.log("Desc Des")
    value = "5";
    return value;
  }

}
