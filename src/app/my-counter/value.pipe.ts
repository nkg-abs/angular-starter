import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'value'})
export class Value implements PipeTransform {
  transform(obj: any, key: any, ): any {
    return obj[key];
  }
}