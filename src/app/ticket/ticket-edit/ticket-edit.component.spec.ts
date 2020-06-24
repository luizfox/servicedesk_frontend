import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TicketEditComponent } from './ticket-edit.component';
import { TicketService } from '../ticket.service';

describe('TicketEditComponent', () => {
  let component: TicketEditComponent;
  let fixture: ComponentFixture<TicketEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TicketEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TicketService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
