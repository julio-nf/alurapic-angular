import { NgModule } from '@angular/core';

import { CardModule } from 'src/app/shared/components/card/card.module';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        FilterByDescriptionPipe,
        LoadButtonComponent,
        PhotoListComponent,
        PhotosComponent,
        SearchComponent
    ],
    imports: [
        CardModule,
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule {}
