import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[EmpService]
})
export class NavbarComponent implements OnInit {
  [x: string]: any;
  receiveinfo1: string[]=[];
  receiveinfo2: string[]=[];
  receiveinfo3:  string[]=[];
  


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  lokilogo="/assets/lokilogo.png"
  search=''
  onLogout() {
    localStorage.removeItem('token'); // Clear token on logout
    this.router.navigate(['login']); 
  }

}
