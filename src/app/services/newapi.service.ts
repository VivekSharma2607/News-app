import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewapiService {

  constructor(private _http:HttpClient) { }

  newsApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=ace0667a77b74df6bf29531d1314cbcc";
  bussApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ace0667a77b74df6bf29531d1314cbcc"
  sportApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ace0667a77b74df6bf29531d1314cbcc"
  entApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ace0667a77b74df6bf29531d1314cbcc"
  scienceApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=ace0667a77b74df6bf29531d1314cbcc";
  healthApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ace0667a77b74df6bf29531d1314cbcc";
  techApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ace0667a77b74df6bf29531d1314cbcc";
  heading():Observable<any>
  {
    return this._http.get(this.newsApiurl);
  }
  buss():Observable<any>
  {
    return this._http.get(this.bussApiurl)
  }
  sport():Observable<any>
  {
    return this._http.get(this.sportApiurl)
  }
  entertain():Observable<any>
  {
    return this._http.get(this.entApiurl)
  }
  science():Observable<any>
  {
    return this._http.get(this.scienceApiurl)
  }
  health():Observable<any>
  {
    return this._http.get(this.healthApiurl)
  }
  tech():Observable<any>
  {
    return this._http.get(this.techApiurl)
  }
}
