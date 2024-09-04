import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      console.log('Invalid form submission:', this.loginForm.value);
      return;  // Prevent further execution if the form is invalid
    }

    const UserName = this.loginForm.get('UserName')?.value;
    const Password = this.loginForm.get('Password')?.value;

    // Use POST method to send login credentials
    const loginUrl = `http://localhost:7278/api/Register/login`;

    // Create the payload with proper key naming
    const payload = {
      UserName: UserName,  // Ensure these match your API expectations
      Password: Password
    };

    console.log('Sending payload:', payload);

    // Set headers if necessary
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN_HERE', // Add your token or auth header here
      'Accept': 'application/json',
      'Accept-Language': 'en-US'
    });

    this.http.post(loginUrl, payload, { headers: headers }).subscribe({
      next: (response: any) => {
        alert("Login successfully");
        console.log("Login successfully");

        // Navigate to home or handle login success
        this.router.navigate(['home']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Login failed:', err);
        console.error('Error status:', err.status);
        console.error('Error message:', err.message);
        console.error('Error details:', err.error);

        // Log the complete payload for debugging
        console.log('Payload sent:', payload);

        let errorMessage = 'Login failed';
        if (err.status === 401) {
          errorMessage = 'Invalid login credentials';
        } else if (err.status === 500) {
          errorMessage = 'Server error. Please try again later';
        } else {
          errorMessage = `Login failed: ${err.message}`;
        }
        alert(errorMessage);
      }
    });
  }
}