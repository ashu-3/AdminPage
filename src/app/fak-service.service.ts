import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { FakeUser } from './fake-user';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakServiceService {
  
  constructor(public http: HttpClient) { }

  retrieveFakeUsers():Observable<FakeUser[]> {
    return this.http.get<FakeUser[]>("https://dummyjson.com/users")
  }

 
}
