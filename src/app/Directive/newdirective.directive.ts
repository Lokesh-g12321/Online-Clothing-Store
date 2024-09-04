import { Directive, ElementRef ,OnInit} from "@angular/core";
@Directive({
    selector: '[changebgcolor]'
})
export class Changebgcolorsof implements OnInit{
    private element:ElementRef

    constructor(element:ElementRef){
       
        this.element=element;

    }
    ngOnInit(){

        this.element.nativeElement.style.backgroundColor='#789';
    }

    
}