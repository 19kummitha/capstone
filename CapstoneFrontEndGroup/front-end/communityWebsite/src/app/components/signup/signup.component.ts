import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterResponse } from '../../Models/registerresponse';
import { RegisterService } from '../../services/register.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  passwordHash: string = '';
  email: string = '';
  FlatNo:string='';
  Name:string='';
  PhoneNumber:string='';

  constructor(private fb: FormBuilder,private router: Router, private registerService: RegisterService) { }

  registerForm: FormGroup = null!;

  ngOnInit() {
    this.registerForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      Name:['',[Validators.required]],
      FlatNo:['',[Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      PhoneNumber:['',[Validators.required]],
      confirmPassword:['']
    },
    { validator: ValidationService.passwordMatchValidator }
    );
  }
  validateControl(input: string) {
    return ValidationService.validateControl(this.registerForm, input);
  }

  validateControlError(input: string, errorType: string) {
    return ValidationService.validateControlError(this.registerForm, input, errorType);
  }

  onLogin() {
    this.username=this.registerForm.get('username')?.value;
    this.passwordHash=this.registerForm.get('password')?.value;
    this.email=this.registerForm.get('email')?.value;
    this.Name=this.registerForm.get('Name')?.value;
    this.FlatNo = this.registerForm.get('FlatNo')?.value;
    this.PhoneNumber=this.registerForm.get('PhoneNumber')?.value;

    this.registerService.register(this.username, this.passwordHash, this.email,this.FlatNo,this.Name,this.PhoneNumber).subscribe({
      next: (response:RegisterResponse) => {
        console.log('Register successful', response);
        console.log(this.PhoneNumber,this.email,this.FlatNo);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
