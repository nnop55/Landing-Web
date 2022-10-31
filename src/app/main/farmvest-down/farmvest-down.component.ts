import { Component, Input, OnInit } from '@angular/core';
import { ChangeThemeService } from 'src/app/services/change-theme.service';

@Component({
  selector: 'app-farmvest-down',
  templateUrl: './farmvest-down.component.html',
  styleUrls: ['./farmvest-down.component.css']
})
export class FarmvestDownComponent implements OnInit {

  constructor(public theme: ChangeThemeService) { }

  ngOnInit(): void {
  }

}
