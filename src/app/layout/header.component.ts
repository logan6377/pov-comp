import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="row">
        <div class="col-md-2"><a href="/"><img src="../../assets/images/logo.png"></a></div>
        <div class="col-md-2 pull-right aligh-right text-right"><a href="/">alarumugam@triadretail.com <span class="glyphicon glyphicon-chevron-down"></span></a></div>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
