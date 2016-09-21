/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WikipediaSearchService } from './wikipedia-search.service';

describe('Service: WikipediaSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikipediaSearchService]
    });
  });

  it('should ...', inject([WikipediaSearchService], (service: WikipediaSearchService) => {
    expect(service).toBeTruthy();
  }));
});
