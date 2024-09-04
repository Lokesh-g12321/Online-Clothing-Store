import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

type NewType = ElementRef;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'lOkIApp';

  @ViewChild("dobib") dateOfBirth: ElementRef;

  @ViewChild("ageip") age: ElementRef;
  calcu() {
    console.log(this.dateOfBirth.nativeElement.value)
    let Dob: any = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let newDob: any = new Date().getFullYear();
    let age = newDob-Dob;
    this.age.nativeElement.value = age;
  }
}
