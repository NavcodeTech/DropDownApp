import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdownApp';
  options: string[] = ['India', 'China', 'Canada','USA','UK'];
  dropform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dropform = this.fb.group({
      selectedOption: ['']
    });
  }

  onOptionSelected(option: string): void {
    this.dropform.get('selectedOption')?.setValue(option);
  }
}
