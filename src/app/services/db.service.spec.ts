import { TestBed } from '@angular/core/testing';

import { DbService } from './db.service';
import { Categories } from '../models';

describe('DbService', () => {
  let service: DbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.MAX_STARS).toEqual(5);
  });

  it('getRandomTitles should return a list with 1 random title from the given category', () => {
    const category: Categories = 'anime';

    service.getRandomTitles(category).subscribe(
      (titles) => {
        expect(titles.length).toEqual(1);
        expect(titles[0].category).toEqual(category);
      },
      (error) => fail(error.message)
    );
  });

  it('getRandomTitles should return a list 3 random titles from the given category', () => {
    const category: Categories = 'movie';
    const count: number = 3;

    service.getRandomTitles(category, count).subscribe(
      (titles) => {
        expect(titles.length).toEqual(count);
        titles.forEach((t) => expect(t.category).toEqual(category));
      },
      (error) => fail(error.message)
    );
  });

  it('getSingleTitle should return a single title from the given category', () => {
    const category: Categories = 'tv-show';
    const id: number = 2;

    service.getSingleTitle(category, id).subscribe(
      (title) => {
        expect(title.category).toEqual(category);
        expect(title.id).toEqual(id);
      },
      (error) => fail(error.message)
    );
  });

  it('searchTitleByName should return a list titles that includes the string given in the name', () => {
    const name: string = 'deadpool';

    service.searchTitleByName(name).subscribe(
      (titles) => titles.forEach((t) => t.name.toLowerCase().includes(name)),
      (error) => fail(error.message)
    );
  });
});
