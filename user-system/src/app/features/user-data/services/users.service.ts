import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  private url = 'https://development.api.optio.ai/api/v2/admin/users/find';
  private addUrl = 'https://development.api.optio.ai/api/v2/admin/users/save';
  private deleteUrl = 'https://development.api.optio.ai/api/v2/admin/users/remove';
  private token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImludGVybnNoaXBAb3B0aW8uYWkiLCJzdWIiOiIzOTg3NjY3MzE3MzQ4OTgzIiwiaWF0IjoxNjc1MjU2NDQyLCJleHAiOjE2NzY5ODQ0NDJ9.niZvoV5BqTQs_82jp1GHorJbCg9hfCXP_d86xaTy8A116DPRtHJiV1dwMWzpXCzh_F-lGpq2Y8Yuq1r45V0jkg';

 

  getUsers(){
    return this.http.post(this.url, 
      {
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




  getSingleUser(userId:string){
    return this.http.post(this.url + "-one", 
      {
        "id": userId,
        "includes": [
          "id",
          "email",
          "firstName",
          "lastName",
          "roles",
          "locked"
        ],
      },
      { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
 }, ).pipe(
  catchError((e) => {
    console.log(e.message);
    return of([]);
  })
);
  }


  searchUsers(searchValue:string){
    return this.http.post(this.url, 
      {
        "search": searchValue,
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


  addUser(user:IUser){
   
      return this.http.post(this.addUrl, 
        user,
        { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
   }, ).pipe(
    catchError((e) => {
      console.log(e.message);
      return of([]);
    })
  );
  }


  deleteUser(userId:string) {
    return this.http.post(this.deleteUrl, 
      {
        "id": userId
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
