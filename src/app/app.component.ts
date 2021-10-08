import { NavigationEnd, Router } from '@angular/router';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('router')
  private _routerElement: ElementRef;

  constructor(private _router: Router) {}

  ngAfterViewInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const nativeElement: HTMLElement = this._routerElement.nativeElement;
        nativeElement.scroll({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
