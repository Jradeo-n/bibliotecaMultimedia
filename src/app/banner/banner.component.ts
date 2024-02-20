import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchTerm);
  }
}

