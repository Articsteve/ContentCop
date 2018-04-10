import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){

  }
  transform(value: string): any {
    let url = "https://www.youtube.com/embed/";
    let auto = "?autoplay=1"
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value + auto);
  }

}
