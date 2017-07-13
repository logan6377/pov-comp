import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  template: `
    <div class="palette image">
				<div class="palette-header">
				    <span class='palette-dotted-icon'><img src='../../assets/images/header-dotted.png' alt="header dotted"/></span>
					<p class='palette-head'>image</p>
					<a class="palette-close">X</a>
				</div>
				<div class="palette-body">
					<div class='palette-cont-row'>
						<ul class='image-list'>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
					<div class='palette-cont-row file-upload'>
						 <input type="file" class="file">
						 <button>Upload Image</button>   
					</div>
				</div>
			</div>
  `,
  styleUrls: ['./palettes.component.css']
})
export class ImageuploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
