import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeThemeService {
  private toggleTheme: boolean = true;

  setTheme() {
    this.toggleTheme = !this.toggleTheme;
  }

  getTheme() {
    return this.toggleTheme;
  }
}
