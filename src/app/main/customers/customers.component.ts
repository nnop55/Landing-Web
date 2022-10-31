import { Component, Input, OnInit } from '@angular/core';
import { ChangeThemeService } from 'src/app/services/change-theme.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public theme: ChangeThemeService) { }

  ngOnInit(): void {
  }

}
