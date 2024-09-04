import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit ,AfterContentInit{

  constructor() { }

  ngOnInit(): void {
    // console.log(this.le);
  }
  ngAfterContentInit(): void {
    // console.log(this.le.nativeElement.textContent)
    
  }
  @ContentChild('Demo') le:ElementRef;
  

}
