import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private fb: FormBuilder) { }


  contactForm: FormGroup = null!;

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  validateControl(input: string) {
    return ValidationService.validateControl(this.contactForm, input);
  }

  validateControlError(input: string, errorType: string) {
    return ValidationService.validateControlError(this.contactForm, input, errorType);
  }

}
