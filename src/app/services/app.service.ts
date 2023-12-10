import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly http: HttpClient) {}
  private baseUrl = 'http://localhost:3000';
  getMessage(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}