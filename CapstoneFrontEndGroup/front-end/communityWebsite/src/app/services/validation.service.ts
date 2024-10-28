import { AbstractControl, FormGroup } from "@angular/forms";

export class ValidationService {


    public static passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;

        if (password !== confirmPassword) {
            control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
            return { passwordMismatch: true };
        } else {
            return null;
        }
    }

    public static validateControl(form: FormGroup,input:string)
    {
      return form.get(input)?.invalid&&
      (form.get(input)?.touched||
      form.get(input)?.dirty);
    }

   public static validateControlError(form: FormGroup,input:string,errorType:string)
  {
    return form.get(input)?.hasError(errorType)
    &&
    (form.get(input)?.touched||
   form.get(input)?.dirty);
  }
}