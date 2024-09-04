import { outputAst } from '@angular/compiler';
import { Component, OnInit,Input,EventEmitter, Output, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit , OnChanges{

  constructor() { 
    // console.log("constructor is called")
  }

  ngOnInit(): void {
    // console.log(this.selectedButton);
  }
  ngOnChanges(change:SimpleChanges){
    // console.log("ohanges")
    // console.log(change);
  }
  @Input() all:number=0;
  @Input() avail:number=0;
  @Input() brand:number=0;


  selectedButton:string='all'

  @Output()
  radiobuttonselected: EventEmitter<string> = new EventEmitter<string>();

  onradiobutton(){
    this.radiobuttonselected.emit(this.selectedButton);
  }

  

}
