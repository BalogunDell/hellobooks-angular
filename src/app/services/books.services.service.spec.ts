import { TestBed, inject } from '@angular/core/testing';

import { Books.ServicesService } from './books.services.service';

describe('Books.ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Books.ServicesService]
    });
  });

  it('should be created', inject([Books.ServicesService], (service: Books.ServicesService) => {
    expect(service).toBeTruthy();
  }));
});
