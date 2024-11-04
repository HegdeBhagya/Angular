import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatSlideToggleModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')  
      ]),
    });
  }

  get name() { return this.registerForm.get('name')!; }
  get lastName() { return this.registerForm.get('lastName')!; }
  get email() { return this.registerForm.get('email')!; }
  get phone() { return this.registerForm.get('phone')!; }



onSave() {
  if (this.registerForm.valid) {
    console.log("Form Data:", this.registerForm.value);

    this.registerForm.reset();
  } else {
    console.log("Form is invalid");
  }
}
}

class AppComponent {}


