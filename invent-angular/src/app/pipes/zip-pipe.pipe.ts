import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zipPipe'
})
export class ZipPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 10) {
      return `0${value}xxx`;
    } else {
      return `${value}xxx`;
    }
  }

}
