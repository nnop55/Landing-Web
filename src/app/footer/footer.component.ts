import { Component, Input, OnInit } from '@angular/core';
import { ChangeThemeService } from '../services/change-theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(public theme: ChangeThemeService) { }

  ngOnInit(): void {
  }

}
