import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fishApi } from '../models/fishApi';

@Injectable({
  providedIn: 'root'
})
export class FishapiService {
  api_endpoint = 'https://fishbase.ropensci.org/species';
  grossFieldStuff="?fields=SpecCode%2CSpecies%2CFresh%2CBrack%2CSaltwater%2CDangerous%2CPicPreferredName"

  constructor(private httpClient: HttpClient) { }

  public getFish(): Observable< fishApi >{
    return this.httpClient.get<fishApi>(`${this.api_endpoint}?limit=100`);
  }

  public getFishById(id:any): Observable<fishApi> {
    return this.httpClient.get<fishApi>(`${this.api_endpoint}/${id}${this.grossFieldStuff}`);
  }
}
