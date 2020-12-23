import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'clear'
})
export class ClearHtmlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
}
