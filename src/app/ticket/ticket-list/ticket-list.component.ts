import { Component, OnInit } from '@angular/core';
import { TicketFilter } from '../ticket-filter';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket-list.component.html'
})
export class TicketListComponent implements OnInit {

  filter = new TicketFilter();
  selectedTicket: Ticket;
  feedback: any = {};

  get ticketList(): Ticket[] {
    return this.ticketService.ticketList;
  }

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.ticketService.list();
  }

  select(selected: Ticket): void {
    this.selectedTicket = selected;
  }

  delete(ticket: Ticket): void {
    if (confirm('Are you sure?')) {
      this.ticketService.delete(ticket).subscribe(() => {
          this.feedback = {type: 'success', message: 'Closing was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error closing.'};
        }
      );
    }
  }
}
