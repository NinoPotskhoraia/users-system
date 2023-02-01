import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor(private http:HttpClient) { }

  private url = 'https://development.api.optio.ai/api/v2/admin/users/find';
  private token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImludGVybnNoaXBAb3B0aW8uYWkiLCJzdWIiOiIzOTg3NjY3MzE3MzQ4OTgzIiwiaWF0IjoxNjc1MjU2NDQyLCJleHAiOjE2NzY5ODQ0NDJ9.niZvoV5BqTQs_82jp1GHorJbCg9hfCXP_d86xaTy8A116DPRtHJiV1dwMWzpXCzh_F-lGpq2Y8Yuq1r45V0jkg';

  sortByEmail(){
    return this.http.post(this.url, 
      {
        "sortBy": "email",
        "sortDirection": "asc",
        "pageIndex": 0,
        "pageSize": 50,
        "includes": [
          "id",
          "email",
          "firstName",
          "lastName",
          "roles",
          "locked"
        ]
      },
      { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
 }, ).pipe(
  catchError((e) => {
    console.log(e.message);
    return of([]);
  })
);
  }

  sortByFirstName(){
    return this.http.post(this.url, 
      {
        "sortBy": "firstName",
        "sortDirection": "asc",
        "pageIndex": 0,
        "pageSize": 50,
        "includes": [
          "id",
          "email",
          "firstName",
          "lastName",
          "roles",
          "locked"
        ]
      },
      { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
 }, ).pipe(
  catchError((e) => {
    console.log(e.message);
    return of([]);
  })
);
  }

  sortByLastName(){
    return this.http.post(this.url, 
      {
        "sortBy": "lastName",
        "sortDirection": "asc",
        "pageIndex": 0,
        "pageSize": 50,
        "includes": [
          "id",
          "email",
          "firstName",
          "lastName",
          "roles",
          "locked"
        ]
      },
      { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
 }, ).pipe(
  catchError((e) => {
    console.log(e.message);
    return of([]);
  })
);
  }

  sortByStatus(){
    return this.http.post(this.url, 
      {
        "sortBy": "locked",
        "sortDirection": "asc",
        "pageIndex": 0,
        "pageSize": 50,
        "includes": [
          "id",
          "email",
          "firstName",
          "lastName",
          "roles",
          "locked"
        ]
      },
      { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
 }, ).pipe(
  catchError((e) => {
    console.log(e.message);
    return of([]);
  })
);

  }
}
