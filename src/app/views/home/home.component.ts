import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { Title } from '../../models';
import { Categories } from '../../models';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public mainTitle: Observable<Title[]>;
  public nowPlaying: Observable<Title[]>;
  public topRated: Observable<Title[]>;

  constructor(private _route: ActivatedRoute, private _dbService: DbService) {}

  ngOnInit(): void {
    this._route.url.subscribe((data: UrlSegment[]) => {
      const category: Categories = (<Categories>data[0].path);

      this.mainTitle = this._dbService.getRandomTitles(category);
      this.nowPlaying = this._dbService.getRandomTitles(category, 6);
      this.topRated = this._dbService.getRandomTitles(category, 5);
    });
  }

  public onClickRightScroll(ul: HTMLUListElement): void {
    const currPosition: number = ul.scrollLeft;
    ul.scroll({ left: currPosition + 500, behavior: 'smooth' });
  }

  public onClickLeftScroll(ul: HTMLUListElement): void {
    const currPosition: number = ul.scrollLeft;
    ul.scroll({ left: currPosition - 500, behavior: 'smooth' });
  }
}
