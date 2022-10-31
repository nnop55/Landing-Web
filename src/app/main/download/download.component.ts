import { Component, Input, OnInit } from '@angular/core';
import { ChangeThemeService } from 'src/app/services/change-theme.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(public theme: ChangeThemeService) { }

  ngOnInit(): void {
  }

}
