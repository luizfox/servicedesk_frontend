import { TestBed } from '@angular/core/testing';
import { TicketService } from './ticket.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TicketService', () => {
  let service: TicketService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TicketService]
    });

    service = TestBed.get(TicketService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
