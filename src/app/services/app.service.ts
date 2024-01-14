import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly http: HttpClient) {}
  private baseUrl =
    'http://ec2-3-146-221-212.us-east-2.compute.amazonaws.com:3000';

  private baseUrlApi =
    'http://ec2-3-146-221-212.us-east-2.compute.amazonaws.com:3000/files';

  getMessage(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getFiles(): Observable<any> {
    return this.http.get<any>(this.baseUrlApi);
  }

  postFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(this.baseUrlApi, formData);
  }
}
