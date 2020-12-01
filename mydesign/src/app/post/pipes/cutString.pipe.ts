import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class cutStringPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.substring(1, args[0]);
  }
}
