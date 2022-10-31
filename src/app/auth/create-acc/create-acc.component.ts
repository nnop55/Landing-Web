import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { ChangeThemeService } from 'src/app/services/change-theme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent implements OnInit {

  registerInfo: Register = new Register();

  constructor(public theme: ChangeThemeService, private router: Router) { }

  ngOnInit(): void {
  }

  registerBtn() {
    if (this.registerInfo.email.includes('@') && this.registerInfo.password == this.registerInfo.confirmPass) {
      let registerName = localStorage.setItem('username', this.registerInfo.username);
      let registerPass = localStorage.setItem('password', this.registerInfo.password);
      Swal.fire({
        icon: 'success',
        title: 'Successfully Registered',
      });
      this.router.navigate(['/auth']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
    this.registerInfo.email = '';
    this.registerInfo.username = '';
    this.registerInfo.password = '';
    this.registerInfo.confirmPass = '';
  }

}
