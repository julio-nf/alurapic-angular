import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  currentPage = 1;
  filter = '';
  hasMore = true;
  photos: Photo[] = [];
  title = 'alurapic';
  userName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load(): void {
    this.photoService.getFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photo => {
      this.filter = '';
      this.photos = this.photos.concat(...photo);
      // tslint:disable-next-line: curly
      if (!photo.length) this.hasMore = false;
    });
  }
}
