import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseUrl: string = 'https://api.github.com/users/Benjamin-Bs/repos';

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

}
