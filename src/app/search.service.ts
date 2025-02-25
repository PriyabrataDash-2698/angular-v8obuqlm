import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './interface/search.interface';

@Injectable()
export class searchService {
 url="https://my-json-server.typicode.com/Uxtrendz/apis/videoList";
  constructor(private http:HttpClient) { }
  getSearches(searchTerm):Observable<Search>{
    return this.http.get<Search>(this.url+"?q="+searchTerm)
  }
}
