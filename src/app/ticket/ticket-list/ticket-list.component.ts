import { Component, OnInit } from '@angular/core';
import { TicketFilter } from '../ticket-filter';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import {Sort} from '@angular/material/sort';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket-list.component.html'
})
export class TicketListComponent implements OnInit {

  filter = new TicketFilter();
  selectedTicket: Ticket;
  feedback: any = {};
  sortedData: Ticket[];

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

  sortData(sort: Sort) {
      const data = this.ticketService.ticketList;
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }

      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'priority': return this.compare(a.priority, b.priority, isAsc);
          default: return 0;
        }
      });
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
