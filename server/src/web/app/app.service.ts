import { Injectable } from '@angular/core';

export const DATA: Object[] = [
  {key: 1, val: 'A'},
  {key: 2, val: 'B'},
];

@Injectable()
export class AppService {
    getData() {
        return DATA;
    }
}