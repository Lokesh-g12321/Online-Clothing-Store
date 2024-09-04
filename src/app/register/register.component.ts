import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = { Id: 0, UserName: '', Password: '', CPassword: '' };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onclickreg(customer: { UserName: string, Password: string, ConfirmPassword: string }) {
    if (customer.Password !== customer.ConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.registerData.UserName = customer.UserName;
    this.registerData.Password = customer.Password;
    this.registerData.CPassword = customer.ConfirmPassword;

    console.log('Payload:', this.registerData);

    this.http.post('http://localhost:10607/api/Registration', this.registerData)
      .subscribe(
        (res) => {
          console.log('Response:', res);
          this.router.navigate(['home']);
        },
        (err) => {
          console.error('Error:', err);
          alert('Registration failed: ' + err.message);
        }
      );
  }
}