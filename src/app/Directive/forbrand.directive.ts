import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appForbrand]'
})
export class ForbrandDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @Input() defaultcolor:string="grey";
  @Input() samplecolor:string="rgb(234, 229, 229)";

  @HostBinding('style.backgroundColor') background: string = "rgb(234, 229, 229) "
   @HostBinding('style.border') border: string = "none"
  @HostListener('mouseenter')onmouseenter(){
  this.background=this.defaultcolor;
  this.border="blue 2px solid"

  }
  @HostListener('mouseleave')onmouseleave(){
  this.background=this.samplecolor;
  this.border="none"
  }


}
