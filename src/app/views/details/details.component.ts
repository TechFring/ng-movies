import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Title, Scene } from '../../models';
import { DbService } from '../../services/db.service';
import { Categories } from '../../models';
import { sceneAnimation } from '../../animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [sceneAnimation],
})
export class DetailsComponent implements OnInit {
  public title: Title;
  public scenes: Scene[];
  public interval: ReturnType<typeof setInterval>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public dbService: DbService
  ) {}

  ngOnInit(): void {
    this._route.url.subscribe((data: UrlSegment[]) => {
      const category: Categories = <Categories>data[0].path;
      const id: number = +data[1].path;

      try {
        this.dbService.getSingleTitle(category, id).subscribe((title) => {
          this.title = title;
          this.scenes = title.scenes.map((url) => ({ url, state: 'hidden' }));
          this.scenes[0].state = 'visible';
          this.displayImages();
        });
      } catch {
        this._router.navigate(['']);
      }
    });
  }

  public displayImages(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      let nextImage: number = 0;

      this.scenes.forEach((scene, index) => {
        if (scene.state === 'visible') {
          const isLastImage: boolean = index === this.scenes.length - 1;
          nextImage = isLastImage ? 0 : index + 1;
          scene.state = 'hidden';
        }
      });

      this.scenes[nextImage].state = 'visible';
    }, 3500);
  }
}
