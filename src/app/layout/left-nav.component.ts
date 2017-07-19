import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  template: `
    <div class="left-nav" [ngClass]='{active: leftnavopen===false}'>
      <ul>
        <li>
          <img src="../../assets/images/icon-bg.png">
          <p>Bg Color</p>
        </li>
        <li>
          <img src="../../assets/images/icon-image.png">
          <p>Image</p>
        </li>
        <li>
          <img src="../../assets/images/icon-text.png">
          <p>Text</p>
        </li>
      </ul>
      <span class="slide-toggle" (click)="slideToggle()" [ngClass]='{show: leftnavopen===false}'></span>
    </div>
  `,
  styles: []
})
export class LeftNavComponent{ 

  constructor() { }

  leftnavopen = true; 

  slideToggle(){
    this.leftnavopen = !this.leftnavopen;
  }

}
