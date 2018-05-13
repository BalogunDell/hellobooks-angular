import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBooksComponent } from './trending-books.component';

describe('TrendingBooksComponent', () => {
  let component: TrendingBooksComponent;
  let fixture: ComponentFixture<TrendingBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
