import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Login } from '../models/login.model';
import { AuthService } from '../services/auth.service';
import { ChangeThemeService } from '../services/change-theme.service';
import { CheckStorageService } from '../services/check-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginInfo: Login = new Login();

  tmpUrl!: string;

  constructor(public theme: ChangeThemeService, private router: Router,
    private activatedRoute: ActivatedRoute, private authService: AuthService,
    public checkStorage: CheckStorageService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      console.log(res);
      this.tmpUrl = res['url']
    })
  }

  test() {

  }

  loginBtn() {
    let loginName = localStorage.getItem('username')
    let loginPass = localStorage.getItem('password')
    console.log(loginName, loginPass)
    this.authService.logInUser(loginName);
    if (this.loginInfo.username == loginName && this.loginInfo.password == loginPass) {
      console.log(this.loginInfo.username)
      Swal.fire({
        icon: 'success',
        title: 'Successfully Loged In',
      });
      localStorage.setItem('authorized', 'true');
      if (this.tmpUrl != undefined) {
        this.router.navigate([this.tmpUrl])
      } else {
        this.router.navigate(['/']);
      }
      this.checkStorage.storageInfo()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
    this.loginInfo.username = '';
    this.loginInfo.password = '';
  }


}
