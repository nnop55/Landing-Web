import { Component, Input, OnInit } from '@angular/core';
import { ChangeThemeService } from 'src/app/services/change-theme.service';

@Component({
  selector: 'app-pathway',
  templateUrl: './pathway.component.html',
  styleUrls: ['./pathway.component.css']
})
export class PathwayComponent implements OnInit {

  constructor(public theme: ChangeThemeService) { }

  ngOnInit(): void {

  }

}
