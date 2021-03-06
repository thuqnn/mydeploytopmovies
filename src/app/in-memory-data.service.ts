import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const movies = [
      {img:"https://m.media-amazon.com/images/M/MV5BMzI3ZjA1ODQtOGUzYy00MTBlLWJkNzgtODZjZTU5MDUyNjBkXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_UY209_CR4,0,140,209_AL_.jpg", id: 1, name: 'An Elephant Sitting Still (2018)', description: 'Four people in a Chinese city live through a complicated day as their lives intersect.'},
      {img:"https://m.media-amazon.com/images/M/MV5BMTA0MDk4MzMwOTBeQTJeQWpwZ15BbWU4MDE3MzYxOTUz._V1_UY209_CR0,0,140,209_AL_.jpg", id: 2, name: 'Minding the Gap (2018)', description: 'Three young men bond together to escape volatile families in their Rust-Belt hometown. As they face adult responsibilities, unexpected revelations .'},
      {img: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",id: 3, name: 'The Favourite (2018)',description: 'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counte threat for all realities.'},
      {img:"https://m.media-amazon.com/images/M/MV5BYWZmOTY0MDAtMGRlMS00YjFlLWFkZTUtYmJhYWNlN2JjMmZkXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UY209_CR0,0,140,209_AL_.jpg", id: 4, name: 'Capernaum (2018)', description: 'Four people in a Chinese city live through a complicated day as their lives intersect.'},
      {img:"https://m.media-amazon.com/images/M/MV5BMjIwOTA3NDI3MF5BMl5BanBnXkFtZTgwNzIzMzA5NTM@._V1_UY209_CR0,0,140,209_AL_.jpg", id: 5, name: ' Burning (2018)', description: 'Three young men bond together to escape volatile families in their Rust-Belt hometown. As they face adult responsibilities, unexpected revelations '},
      {img: "https://m.media-amazon.com/images/M/MV5BMDNjN2NjYmItMjAyZi00NmNkLWJmYTQtYzcwZGRiM2RmNGNlXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_UY209_CR0,0,140,209_AL_.jpg",id: 6, name: 'Climax (I) (2018)',description: 'Teen Miles Morales becomes Spider-Man of his reather dimensions to stop a threat for all realities.'},
      {img:"https://m.media-amazon.com/images/M/MV5BZjc4NGJiOWUtOWNjOS00M2QzLWFlMmMtMTU3ODMzNWU5ODk4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR1,0,140,209_AL_.jpg", id: 7, name: 'Mirai (2018)l', description: 'Four people in a Chinese city live through a complicated day as their lives intersect.'},
      {img:"https://m.media-amazon.com/images/M/MV5BMWNmYjI1M2UtNDdkNi00MTgwLWFiZmYtODcxNWZhM2Y2NWFkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR3,0,140,209_AL_.jpg", id: 8, name: ' The Guilty (2018)', description: 'Three young men bond together to escape volatile families in their Rust-Belt hometown. As they face adult responsibilities.'},
      {img: "https://m.media-amazon.com/images/M/MV5BZjJmMGZmZTQtOWQ5NS00YjUwLWI4ZjEtZGY5NzBlMmY5ZGZlXkEyXkFqcGdeQXVyMTg5MDEyNw@@._V1_UY209_CR0,0,140,209_AL_.jpg",id: 9, name: 'High Life (2018)',description: 'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with fties.'},
      {img:"https://m.media-amazon.com/images/M/MV5BMzVlYzgxYjAtYzhhZi00MDc1LTlkZDMtMTRhZWI0MTg5YTRjXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX140_CR0,0,140,209_AL_.jpg", id: 10, name: 'Hereditary (2018)', description: 'Four people in a Chinese city live through a complicated day as their lives intersect.'},
      {img:"https://m.media-amazon.com/images/M/MV5BZDhjNDQ0MjEtNWZhMy00ZTY1LWFkYmQtMWYwNDliNGQ1MWU2XkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX140_CR0,0,140,209_AL_.jpg", id: 11, name: ' Mandy (I) (2018)', description: 'Three young men bond together to escape volatile families in their Rust-Belt hometown. As they face adult responsibilities'},
      {img: "https://m.media-amazon.com/images/M/MV5BZWVkMzY5NzgtMTdlNS00NjY5LThjOTktZWFkNDU3NmQzMDIwXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_UY209_CR0,0,140,209_AL_.jpg",id: 12, name: 'Searching (III) (2018)',description: 'Teen Miles Morales becomes Spider-Man of his reality, cros'}
    ];
    return {movies};
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}
