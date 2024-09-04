import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  theme:string="One destination to Shopping"
  imga:string="/assets/shop.jpeg"
  searchtext: string="";
  @Output()
  searchcomponent: EventEmitter<string> = new EventEmitter<string>();


}

