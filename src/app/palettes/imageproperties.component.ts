import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageproperties',
  template: `
    <div class="palette element" *ngIf="paletteVisible">
				<div class="palette-header">
				    <span class='palette-dotted-icon'><img src='../../assets/images/header-dotted.png' alt="header dotted"/></span>
					<p class='palette-head'>element properties</p>
					<a class="palette-close">X</a>
				</div>
				<div class="palette-body">
					<div class='palette-txtbox-row'>
						<div class="palette-txtbox-sec">
							<label for="width">Width :</label>
							<input type="text">
						</div>
						<div class="palette-txtbox-sec">
							<label for="height">Height :</label>
							<input type="text">
						</div>
					</div>
					<div class='palette-txtbox-row'>
						<div class="palette-txtbox-sec">
							<label for="element-id">Element Id :</label>
							<input type="text" class='md-txtbox'>
						</div>
					</div>
					<div class='palette-cont-row'>
						<div class='palette-slide'>
							<div class='palette-slider-header'>
							    <span class="slide-arrow"><img src='../../assets/images/down-arrow.png' alt='down arrow'/></span>
								<h3>Predefined animations</h3>
							</div>
							<div class='palette-slider-cont'>
							    <div class="dropdown-sec">
									<div class='dropdown'>
										<p>fadeIn</p>
										<div class='custom-arrow'></div>
									</div>
									<ul class="dropdown-list">
										<li>Option 1</li>
										<li>Option 2</li>
										<li>Option 3</li>
									</ul>
								</div>
								<div class='palette-txtbox-row'>
									<div class="palette-txtbox-sec">
										<label for="width">Duration</label>
										<input type="text">
									</div>
									<div class="palette-txtbox-sec">
										<label for="height">Delay</label>
										<input type="text">
									</div>
								</div>		
							</div>
						</div>
					</div>
					<div class='palette-cont-row'>
						<div class='palette-slide'>
							<div class='palette-slider-header'>
							    <span class="slide-arrow"><img src='../../assets/images/down-arrow.png' alt='down arrow'/></span>
								<h3>On click action</h3>
							</div>
							<div class='palette-slider-cont'>
							    <div class="dropdown-sec">
									<div class='dropdown'>
										<p>URL</p>
										<div class='custom-arrow'></div>
									</div>
									<ul class="dropdown-list">
										<li>Option 1</li>
										<li>Option 2</li>
										<li>Option 3</li>
									</ul>
								</div>
								<div class="palette-txtbox-sec right">
									<label for="element-id">URL :</label>
									<input type="text" class='lg-txtbox'>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</div>
  `,
  styleUrls: ['./palettes.component.css']
})
export class ImagepropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  paletteVisible = true; 

  closePalette(){
    this.paletteVisible = !this.paletteVisible
  }
}
