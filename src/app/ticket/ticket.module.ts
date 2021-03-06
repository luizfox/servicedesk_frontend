import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketService } from './ticket.service';
import { TICKET_ROUTES } from './ticket.routes';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TICKET_ROUTES)
  ],
  declarations: [
    TicketListComponent,
    TicketEditComponent
  ],
  providers: [TicketService],
  exports: [
    MatSortModule,
    MatTableModule
  ]
})
export class TicketModule { }
