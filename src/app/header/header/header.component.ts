import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onSelect(link: string) {
    this.linkClicked.emit(link);
  }
}
