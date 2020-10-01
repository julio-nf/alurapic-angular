import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(private http: HttpClient) {}

    getFromUser(user: string): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${API}/${user}/photos`);
    }
}
