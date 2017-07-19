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
import { DraggableDirective } from './directives/draggable.directive';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { StageComponent } from './stage/stage.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LeftNavComponent,
    PalettesComponent,
    ImageuploadComponent,
    ImagepropertiesComponent,
    DraggableDirective,
    StageComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
