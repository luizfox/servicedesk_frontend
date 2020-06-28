import { Ticket } from './ticket';
import { TicketFilter } from './ticket-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class TicketService {
  ticketList: Ticket[] = [];
  api = 'http://localhost:8080/ticket';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Ticket> {
    const url = `${this.api}/get/?id=${id}`;
    return this.http.get<Ticket>(url);
  }

  list(): void {
    this.sendListRequest().subscribe(result => {
        this.ticketList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  sendListRequest(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.api + '/list');
  }

  load(filter: TicketFilter): void {
    this.find(filter).subscribe(result => {
        this.ticketList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(id: TicketFilter): Observable<Ticket[]> {
    const params = {
    };

    return this.http.get<Ticket[]>(this.api, {params, headers});
  }

  save(entity: Ticket): Observable<Ticket> {
    if (entity.id) {
      let params = this.createParamsString(entity);
      let url = `${this.api}/update?id=${entity.id}&${params}`;
      return this.http.get<Ticket>(url);
    } else {
      return this.add(entity);
    }
  }

  createParamsString(entity: Ticket): String {
    return 'title='+entity.title+'&email='+entity.email+'&description='+entity.description+'&priority='+entity.priority;
  }

  add(entity: Ticket): Observable<Ticket> {
    let params = this.createParamsString(entity);
    let url = `${this.api}/add?${params}`;
    return this.http.get<Ticket>(url);
  }

  delete(entity: Ticket): Observable<any> {
    let params = new HttpParams();
    if (entity.id) {
      let url = '';
      url = `${this.api}/close?id=${entity.id}`;
      return this.http.get(url);
    }
    return null;
  }
}
