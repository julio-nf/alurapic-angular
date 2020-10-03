import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]): Photo[] {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 6) {
      newRows.push(photos.slice(index, index + 6));
    }

    return newRows;
  }

}
