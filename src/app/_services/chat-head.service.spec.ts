import { TestBed, inject } from '@angular/core/testing';

import { ChatHeadService } from './chat-head.service';

describe('ChatHeadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatHeadService]
    });
  });

  it('should be created', inject([ChatHeadService], (service: ChatHeadService) => {
    expect(service).toBeTruthy();
  }));
});
