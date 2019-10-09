import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // key for api
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';
  constructor(private http:HttpClient) {}

  getNews()
  {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}
