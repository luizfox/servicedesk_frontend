import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketModule } from './ticket/ticket.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    TicketModule,
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}