import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

import { Title } from '../../models';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  public searchList: Observable<Title[]>;
  public popularMovies: Observable<Title[]>;
  public popularTVShows: Observable<Title[]>;
  public popularAnimes: Observable<Title[]>;

  constructor(private _dbService: DbService) {}

  ngOnInit(): void {
    this.searchList = EMPTY;
    this.popularMovies = this._dbService.getRandomTitles('movie', 2);
    this.popularTVShows = this._dbService.getRandomTitles('tv-show', 2);
    this.popularAnimes = this._dbService.getRandomTitles('anime', 2);
  }

  public onKeyUp(event: Event): void {
    const value = (<HTMLInputElement>event.target).value;
    this.searchList = this._dbService.searchTitleByName(value);
  }

  public onClick(): void {
    this.searchList = EMPTY;
  }

  public handleStars(stars: number): string[] {
    const arrayActive: string[] = Array.from(
      { length: this._dbService.MAX_STARS },
      () => 'text-yellow'
    );

    const array: string[] = arrayActive.map((v, i) => {
      if (i < stars) return v;
      else return 'text-muted';
    });

    return array;
  }
}
