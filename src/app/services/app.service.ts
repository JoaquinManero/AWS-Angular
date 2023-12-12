import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly http: HttpClient) {}
  private baseUrl =
    'http://ec2-3-129-89-228.us-east-2.compute.amazonaws.com:3000';

  getMessage(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
