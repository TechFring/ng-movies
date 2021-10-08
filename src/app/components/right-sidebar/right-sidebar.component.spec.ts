import { Scene } from './../../models';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, EMPTY, of } from 'rxjs';

import { RightSidebarComponent } from './right-sidebar.component';
import { DbService } from '../../services/db.service';

class MockDbService {
  public readonly MAX_STARS: number = 5;

  public getRandomTitles(): Observable<any> {
    return EMPTY;
  }

  public getSingleTitle(): Observable<any> {
    return EMPTY;
  }

  public searchTitleByName(): Observable<any> {
    return EMPTY;
  }
}

fdescribe('RightSidebarComponent', () => {
  let component: RightSidebarComponent;
  let fixture: ComponentFixture<RightSidebarComponent>;
  let dbService: DbService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSidebarComponent],
      providers: [{ provide: DbService, useClass: MockDbService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidebarComponent);
    component = fixture.componentInstance;
    dbService = TestBed.inject(DbService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick should set searchList to EMPTY', () => {
    component.searchList = of([]);
    component.onClick();
    expect(component.searchList).toEqual(EMPTY);
  });

  it('handleStars should return a list with length _dbService.MAX_STARS. Being first 2 text-yellow', () => {
    const stars: number = 2;
    const response: string[] = component.handleStars(stars);

    expect(response.length).toEqual(dbService.MAX_STARS);
    expect(response[0]).toEqual('text-yellow');
    expect(response[1]).toEqual('text-yellow');
  });
});
