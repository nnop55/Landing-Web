import { Component, Input, OnInit } from '@angular/core';
import { ChangeThemeService } from 'src/app/services/change-theme.service';

@Component({
  selector: 'app-farmvest-up',
  templateUrl: './farmvest-up.component.html',
  styleUrls: ['./farmvest-up.component.css']
})
export class FarmvestUpComponent implements OnInit {

  constructor(public theme: ChangeThemeService) { }

  ngOnInit(): void {
  }

}
