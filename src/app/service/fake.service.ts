import {Injectable} from '@angular/core';

@Injectable()
export class FakeService {

  constructor() {}

  getSomethingRemotely() {
    setTimeout(() => {
      console.log('getSomethingRemotely');
    }, 3000);
  }
}
