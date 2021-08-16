import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: []
})
export class RentalListComponent {
  @Input() rentalList;
  // This component makes a request but it can't actually delete a hero.
  @Output() deleteRequest = new EventEmitter();

  delete() {
    this.deleteRequest.emit(this.rentalList);
  }
}

/*
Exercise: 
Add a "Clear Rentals" button to the rental list component and a new event that the parent component should listen to and clear out the rental list (and count)
*/
