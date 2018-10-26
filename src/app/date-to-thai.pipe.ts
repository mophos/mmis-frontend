import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'dateToThai'
})
export class DateToThaiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    moment.locale('th');
    if (moment(value, 'YYYY-MM-DD HH:mm:ii').isValid()) {
      let thaiDate = `${moment(value).format('DD MMM')} ${moment(value).get('year') + 543} `;
      thaiDate += `${moment(value).format('HH:mm')} น.`;
      return thaiDate;
    } else {
      return '-';
    }
  }

}
