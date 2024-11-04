import { Component } from '@angular/core';
import { Contact } from './contact-us.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  user = new Contact(); 

  save(contactForm: NgForm) {
    console.log("Form submitted:", contactForm);
    if (contactForm.valid) {
      console.log("Saved info: ", JSON.stringify(contactForm.value));

      
      contactForm.resetForm();
      this.user = new Contact(); 
    } else {
      console.log("Form is invalid.");
    }
}
}


