import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html'
})
export class TicketEditComponent implements OnInit {

  id: string;
  ticket: Ticket;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Ticket()); }
          return this.ticketService.findById(id);
        })
      )
      .subscribe(ticket => {
          this.ticket = ticket;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.ticketService.save(this.ticket).subscribe(
      ticket => {
        this.ticket = ticket;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/tickets']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/tickets']);
  }
}
