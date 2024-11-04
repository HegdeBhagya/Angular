// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
    standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: 'user' | 'admin' = 'user'; 

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      if (this.role === 'admin' && this.username === 'admin' && this.password === 'admin123') {
        sessionStorage.setItem('role', 'admin');
        this.router.navigate(['/dashboard']);
      } else if (this.role === 'user' && this.username === 'user' && this.password === 'user123') {
        sessionStorage.setItem('role', 'user');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
