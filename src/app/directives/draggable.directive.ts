import { Directive, EventEmitter, HostListener, ElementRef } from '@angular/core'; 

@Directive({
  selector: '[pvdraggable]'
})
export class DraggableDirective {

  mouseup = new EventEmitter();
  mousedown = new EventEmitter();
  mousedrag = new EventEmitter();

  @HostListener('document:mouseup',['$event'])
  onMouseup(event){
    this.mouseup.emit(event);
  }

  @HostListener('document:mousedown',['$event'])
  onMousedown(event){
    this.mousedown.emit(event);
  }

  @HostListener('document:mousedrag',['$event'])
  onmousemove(event){
    this.mousedrag.emit(event);
  }

  constructor( public element: ElementRef) {
    this.element.nativeElement.style.position = 'relative';
    this.element.nativeElement.style.cursor = 'pointer';
    
    this.onMouseup = function(){
      //console.log(this.element) 
 
    }
   }

}
