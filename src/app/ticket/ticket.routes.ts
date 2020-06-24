import { Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';

export const TICKET_ROUTES: Routes = [
  {
    path: 'tickets',
    component: TicketListComponent
  },
  {
    path: 'tickets/:id',
    component: TicketEditComponent
  }
];
