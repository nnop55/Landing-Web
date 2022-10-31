import { Component, Input, OnInit } from '@angular/core';
import { ChangeThemeService } from 'src/app/services/change-theme.service';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  constructor(public theme: ChangeThemeService) { }

  ngOnInit(): void {
  }

}
