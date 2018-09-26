import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Loc } from 'src/app/core/models/dashboard.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoadGuardService {
  private baseUrl = environment.baseUrl;
  private cfrom = environment.location.cfrom;
  private cto = environment.location.cto;

  constructor(private http: HttpClient) {}

  public getLocations(): Observable<Loc[]> {
    return this.http.get<Loc[]>(`${this.baseUrl}Dashboard/Locations`).pipe(map(data => data));
  }

  public getLocationDetails(locationId: number): Observable<any> {
    return this.handleHttp(`Dashboard/Data?locationId=${locationId}`);
  }

  public getGaugeData(locationId: number) {
    return this.handleHttp(`Dashboard/DataGauge?locationId=${locationId}`);
  }

  public getLineChartData(locationId: number) {
    return this.handleHttp(`Dashboard/DataLineChart?locationId=${locationId}`);
  }

  public getHTData(locationId: number) {
    return this.handleHttp(`Dashboard/DataHTTime?locationId=${locationId}`);
  }

  public getForecastData(locationId: number) {
    return this.handleHttp(`Dashboard/DataForecast?locationId=${locationId}`);
  }

  public getBaseData(locationId: number) {
    return this.handleHttp(`Dashboard/DataBase?locationId=${locationId}`);
  }

  public handleHttp(url: string) {
    return this.http
      .get(`${this.baseUrl}${url}&from=${this.cfrom}&to=${this.cto}`)
      .pipe(map(data => data));
  }

  public getSessionData() {
    return this.http
      .get(`http://localhost:57294/SAML/getSessionData`, { withCredentials: true })
      .pipe(map(data => data));
  }
}
