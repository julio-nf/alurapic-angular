import { Component, OnInit } from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alurapic';
  photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getFromUser('flavio')
      .subscribe(photo => this.photos = photo);
  }
}
