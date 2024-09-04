import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMekedirective]'
})
export class MekedirectiveDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) {

   }
   ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#7697')
    this.renderer.setStyle(this.element.nativeElement,'padding-left','600px')
    this.renderer.setStyle(this.element.nativeElement,'border-radius','5px')
    // this.renderer.setAttribute(this.element.nativeElement,'Title','this for your kind information')
    this.renderer.addClass(this.element.nativeElement,'container')
   }

}
