import { Component } from '@angular/core';

@Component({
	selector: 'app-imageupload',
	templateUrl: './imageupload.component.html',
  styleUrls: ['./palettes.component.css']
})
export class ImageuploadComponent {

  paletteVisible = true; 

  closePalette(){
    this.paletteVisible = !this.paletteVisible
  }

}
