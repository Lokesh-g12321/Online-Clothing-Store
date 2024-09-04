import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
$val: any;

  constructor() { }

  ngOnInit(): void {

    

  }
  Search: any ='';
  // searchvalue(valueof:Event){
  //   // console.log(valueof.)
  //   this.Search=valueof
  // }

}
