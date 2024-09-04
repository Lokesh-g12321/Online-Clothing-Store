import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [ngClass]="{fade:displayNotification}">
  <div class="close" appFornotification><button class="btn" (click)="notifyclose()">X</button></div><div appFornotification><a href="membership" style="text-decoration: none;color:brown">Verify Your Gold Memebership!</a> </div>
</div>`,
  styles: ["div{text-align:centre;background-color:white;}",
   ".fade{visiblity:0;opacity:0;transition:visibility 0s  2s,opacity 2s linear;}",
  "a{padding:5px 600px}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification: boolean = false;
  notifyclose(){
    this.displayNotification=true;
  }

}
