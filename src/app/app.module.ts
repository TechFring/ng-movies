import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
