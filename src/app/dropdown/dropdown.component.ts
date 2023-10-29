import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input()
  options!: string[];
  @Output() optionSelected = new EventEmitter<string>();

  searchTermControl = new FormControl('');
  filteredOptions: string[] = [];

  constructor() {
    this.searchTermControl.valueChanges.subscribe(searchTerm => {
      this.filteredOptions = this.options.filter(option =>
        option.toLowerCase().includes(searchTerm!.toLowerCase())
      );
    });
  }

  selectOption(option: string): void {
    this.searchTermControl.setValue(option);
    this.optionSelected.emit(option);
  }
  
}
