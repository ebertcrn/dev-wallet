import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPercentage',
})
export class DecimalPercentagePipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    return `${value.toFixed(2)} %`;
  }
}
