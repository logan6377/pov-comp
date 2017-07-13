import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header.component';
import { LeftNavComponent } from './layout/left-nav.component';
import { PalettesComponent } from './palettes/palettes.component';
import { ImageuploadComponent } from './palettes/imageupload.component';
import { ImagepropertiesComponent } from './palettes/imageproperties.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LeftNavComponent,
    PalettesComponent,
    ImageuploadComponent,
    ImagepropertiesComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
