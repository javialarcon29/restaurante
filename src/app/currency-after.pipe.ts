import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyAfter',
  standalone: true
})
export class CurrencyAfterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
