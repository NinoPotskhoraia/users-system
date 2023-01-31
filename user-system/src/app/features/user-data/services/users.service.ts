import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IUser, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  newUser:BehaviorSubject<IUser> = new BehaviorSubject({} as IUser);

  constructor(private http:HttpClient) { }

  private url = 'https://development.api.optio.ai/api/v2/admin/users/find';
  private addUrl = 'https://development.api.optio.ai/api/v2/admin/users/save';
  private deleteUrl = 'https://development.api.optio.ai/api/v2/admin/users/remove';
  private token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImludGVybnNoaXBAb3B0aW8uYWkiLCJzdWIiOiIzOTg3NjY3MzE3MzQ4OTgzIiwiaWF0IjoxNjczNTI3NzMyLCJleHAiOjE2NzUyNTU3MzJ9.ss2VWdlLDTJYa2rOXfffwnaMJIIeEB7DwkSVsl8xcTjheFu8ATS4eoCtzP5lDYRxQSaG7JXi8FhCRFivMSkSgg';

 

  getUsers(){
    return this.http.post(this.url, 
      {
        // "search": "\"\"",
        // "sortBy": "email",
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
 }, );
  }


  getSingleUser(userId:string){
    return this.http.post(this.url + "-one", 
      {
        "id": userId,
        "includes": [
          "id"
        ],
        "excludes": [
          "id"
        ]
      },
      { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
 }, );
  }


  searchUsers(searchValue:string){
    return this.http.post(this.url, 
      {
        "search": "\`${searchValue}\`",
        "sortBy": "firstName",
        "sortDirection": "asc",
        "pageIndex": 0,
        "pageSize": 20,
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
 }, );
  }


  addUser(user:IUser){
   
      return this.http.post(this.addUrl, 
        user,
        { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
   }, );
  }


  deleteUser(userId:string) {
    return this.http.post(this.deleteUrl, 
      {
        "id": userId
      },
      { headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`, 'Content-Type': 'application/json',  })
 }, );
  }




  updateUser(userId:string){

  }


}
