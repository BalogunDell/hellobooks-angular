import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfTheDayComponent } from './book-of-the-day.component';

describe('BookOfTheDayComponent', () => {
  let component: BookOfTheDayComponent;
  let fixture: ComponentFixture<BookOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
