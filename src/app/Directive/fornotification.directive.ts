import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFornotification]'
})
export class FornotificationDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setAttribute(this.element.nativeElement,'title','Check the details of the Gold Membership!')
  }

}
