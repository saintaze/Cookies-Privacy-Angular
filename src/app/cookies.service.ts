import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  private apiUrl = 'https://fast-lowlands-95849.herokuapp.com/api/common/getBanner';

  constructor(private http: HttpClient) { }

  getCookiesData(){
    return this.http.get(this.apiUrl);
  }
}
