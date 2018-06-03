import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { BookTableType } from '../../../enums/books-table-type';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent implements OnInit {

  @Input() books: object[];
  @Input() tableHeaders;
  @Input() tableType;

  bookTableType = BookTableType;

  constructor() { }

  ngOnInit() {
  }
}
