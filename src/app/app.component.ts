import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rentalList = {
    count: 4,
    titles: 'Cats, Howard the Duck, Jack and Jill, Batman and Robin'
  };

  wingCommander = {
    title: 'Wing Commander',
    yearReleased: 1999,
    rating: 'PG-13',
    imdbLink: 'https://www.imdb.com/title/tt0131646/',
    imageURL:
      'https://m.media-amazon.com/images/M/MV5BMTc1MDI1MDMyN15BMl5BanBnXkFtZTcwMzgzMTIyMQ@@._V1_UY268_CR1,0,182,268_AL_.jpg',
    soundtrack: {
      spotifyLink:
        'https://open.spotify.com/album/6kYCucnWN8EzKDCro12m5x?si=rR_Sb8NbQ62AYQHjN6tlXw'
    }
  };

  theRoom = {
    title: 'The Room',
    year: 2003,
    stars: 3.7,
    rating: 'R',
    director: 'Tommy Wiseau',
    cast: ['Tommy Wiseau', 'Juliette Danielle', 'Greg Sestero'],
    imageURL:
      'https://m.media-amazon.com/images/M/MV5BMjA4MzM0NDAzOF5BMl5BanBnXkFtZTcwMDY3MDYyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    image: '/images/the-room.jpg'
  };
  dontShow = true;
  reallydont = true;
  delete() {
    console.log('deleteing');
    this.rentalList.count = 0;
    this.rentalList.titles = '';
  }
}
