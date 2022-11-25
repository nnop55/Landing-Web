import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckStorageService {

  checkStorage: boolean = false;

  constructor() { }

  storageInfo() {
    if (localStorage.getItem('authorized') == 'false') {
      this.checkStorage = true;
    } else {
      this.checkStorage = false;
    }
  }
}
