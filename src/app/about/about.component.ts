import { Component, OnInit } from '@angular/core';
import { Slider } from '../models/slider.model';
import { ChangeThemeService } from '../services/change-theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  sliderData: Slider[] = [];
  imgIndex: number = 0;

  constructor(public theme: ChangeThemeService) { }

  ngOnInit(): void {
    this.getSliderData();
  }

  getSliderData() {
    this.sliderData = [
      { url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" },
      { url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80" },
      { url: "https://images.unsplash.com/9/fields.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80" },
      { url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" }
    ]
  }

  previousImage() {
    if (this.imgIndex != 0) {
      this.imgIndex--;
    } else {
      this.imgIndex = this.sliderData.length - 1
    }
  }

  nextImage() {
    this.imgIndex++;
    if (this.imgIndex > (this.sliderData.length - 1)) {
      this.imgIndex = 0;
    }
  }


}
