import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://soundcloud.com/mvtches', 'https://www5.gogoanime.pro/'];

  constructor() { }

  ngOnInit() {
  }

}
