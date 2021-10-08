import { Categories, Title } from './../models';
import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';

import * as MOCK_DB from './db.mock.json';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  public readonly MAX_STARS: number = 5;
  public readonly TITLES: Title[];

  constructor() {
    this.TITLES = (<any>MOCK_DB).default
  }

  public getRandomTitles(category: Categories, count = 1): Observable<Title[]> {
    const categoryTitles: Title[] = this.TITLES.filter((t) => t.category === category);
    const random: Title[] = categoryTitles.sort(() => Math.random() - Math.random()).slice(0, count);

    return of(random);
  }

  public getSingleTitle(category: Categories, id: number): Observable<Title> {
    const title: Title = this.TITLES.filter((t) => t.category === category && t.id === id)[0];

    if (!title) {
      throw new Error;
    }

    return of(title);
  }

  public searchTitleByName(name: string): Observable<Title[]> {
    name = name.trim().toLowerCase();

    if (!name.length) {
      return EMPTY;
    }

    const titlesMatch: Title[] = this.TITLES.filter((t) => t.name.toLowerCase().includes(name))
      .slice(0, 5);
    
    return of(titlesMatch);
  }
}
