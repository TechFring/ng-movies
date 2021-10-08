export type Categories = 'movie' | 'tv-show' | 'anime';

export type StateScene = 'hidden' | 'visible';

export interface Title {
  id: number;
  name: string;
  description: string;
  director: string;
  poster: string;
  cover: string;
  scenes: string[];
  stars: number;
  year: number;
  genre: string;
  category: Categories;
}

export interface Scene {
  url: string;
  state: StateScene;
}