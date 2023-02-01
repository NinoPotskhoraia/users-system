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
  private token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImludGVybnNoaXBAb3B0aW8uYWkiLCJzdWIiOiIzOTg3NjY3MzE3MzQ4OTgzIiwiaWF0IjoxNjczNTI3NzMyLCJleHAiOjE2NzUyNTU3MzJ9.ss2VWdlLDTJYa2rOXfffwnaMJIIeEB7DwkSVsl8xcTjheFu8ATS4eoCtzP5lDYRxQSaG7JXi8FhCRFivMSkSgg';

 

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
