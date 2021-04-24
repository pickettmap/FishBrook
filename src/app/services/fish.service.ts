import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fishApi } from '../models/fishApi';


@Injectable({
  providedIn: 'root'
})
export class FishService {
  api_endpoint = 'https://fishbase.ropensci.org/species';
  grossFieldStuff="?fields=SpecCode%2CSpecies%2CFresh%2CBrack%2CSaltwater%2CDangerous%2CPicPreferredName"

  database_endpoint = 'http://project2fisapp-env.eba-rpk7wuxb.us-west-1.elasticbeanstalk.com/fish'

  
  constructor(private httpClient: HttpClient) {
    
   }

  public getFish(): Observable< fishApi >{
    return this.httpClient.get<fishApi>(`${this.api_endpoint}?limit=100`);
  }

  public getFishById(id:any): Observable<fishApi> {
    return this.httpClient.get<fishApi>(`${this.api_endpoint}/${id}${this.grossFieldStuff}`);
  }

  public createFish(data: any): Observable<any> {
    return this.httpClient.post(this.database_endpoint, data);
  }
}
