import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeThemeService } from '../services/change-theme.service';
import { CheckStorageService } from '../services/check-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  iconToggle: string = 'ri-toggle-fill';

  constructor(public theme: ChangeThemeService, private router: Router, public checkStorage: CheckStorageService) { }

  ngOnInit(): void {
    console.log(localStorage)
    this.checkStorage.storageInfo();
  }


  changeTheme() {
    this.theme.setTheme();
    if (!this.theme.getTheme()) {
      this.iconToggle = 'ri-toggle-line'
    } else {
      this.iconToggle = 'ri-toggle-fill'
    }
  }

  logOut() {
    localStorage.setItem('authorized', 'false');
    this.router.navigate(['/createacc']);
    this.checkStorage.storageInfo();
  }




}
