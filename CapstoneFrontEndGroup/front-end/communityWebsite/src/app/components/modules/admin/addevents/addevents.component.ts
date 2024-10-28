import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventDto } from '../../../../Models/eventDto';
import { EventsService } from '../../../../services/events.service';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css']
})
export class AddeventsComponent {
  addEventForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  minDate: string;

  constructor(private eventService: EventsService, private fb: FormBuilder) {
    this.addEventForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  createEvent(): void {
    if (this.addEventForm.valid) {
      const event: EventDto = this.addEventForm.value;

      this.eventService.createEvent(event).subscribe({
        next: (response) => {
          console.log('Event created successfully:', response);
          this.successMessage = 'Event created!';
          this.resetForm();
        },
        error: (err) => {
          console.error('Error creating event:', err);
          this.errorMessage = 'Failed to create event.';
        }
      });
    }
  }

  resetForm(): void {
    this.addEventForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

  validateControl(controlName: string): boolean {
    const control = this.addEventForm.get(controlName);
    return control?.invalid && (control.dirty || control.touched) ? true : false;
  }

  validateControlError(controlName: string, errorType: string): boolean {
    const control = this.addEventForm.get(controlName);
    return control?.errors?.[errorType] ? true : false;
  }
}
