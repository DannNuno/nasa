import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiUrl = "https://api.nasa.gov/planetary/apod";
  private apiKey = "gshlZnqCT2qET9aMJI4H191NXDkt2QzNMsxNatam";

  constructor(private http: HttpClient) { 
    
  }
  getImageOfTheDay():Observable<any>{
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`) //comillas invertidas
  }

  getImageByDate(date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&date=${date}`);
  }

}
