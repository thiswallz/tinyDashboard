import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public handleHttp(url: string) {
    return this.http.get(`${this.baseUrl}${url}`).pipe(map(data => data));
  }
}
