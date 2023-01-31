import { ChangeDetectionStrategy, Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ToolbarService } from '../../services/toolbar.service';
import { UsersService } from '../../services/users.service';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { IUser, User } from '../../interfaces/user';
import { DialogService } from '../../services/dialog.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerContainerComponent implements OnInit, AfterViewInit {

  constructor(private service: UsersService, private dialogService:DialogService, private drawerService:ToolbarService) {
   
  }

  ngOnInit(): void {
    this.setUsers();
  }

 @ViewChild(MatDrawer) 
  public drawer!: MatDrawer;

  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'roles', 'status', 'actions'];
  dataSource!: MatTableDataSource<User>;
  posts: any;
  postToEdit:any;
 
  

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchForm:FormGroup = new FormGroup ({
    searchKey: new FormControl('')
  })

  ngAfterViewInit():void {
    this.drawerService.setDrawer(this.drawer);

}

public  addUser(user:IUser) {
  this.service.addUser(user).subscribe(data=>{
    console.log(data);

    setTimeout(() => {
      this.setUsers();
    }, 400);
    
  })

}


  setUsers(){
    this.service.getUsers().subscribe(data=>{
      
      this.posts = data;
      let userData = this.posts.data.entities;
      userData.forEach((user: { locked: any, status: any; })=>{
        if(user.locked === true){
          user.status = 'Active'
        }else{
          user.status = 'Inactive'
        }
      })
      
      this.dataSource = new MatTableDataSource(userData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   }

  
  public search(){
    this.searchKey.valueChanges
    .pipe(
      debounceTime(500),
      tap(()=>{
        console.log(this.searchKey.value);
        this.service.searchUsers(this.searchKey.getRawValue()).subscribe(data=>{
          console.log(data);
          console.log(this.searchKey.getRawValue());
          
          this.posts = data;
          this.dataSource = new MatTableDataSource(this.posts.data.entities);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
        })
      })
  
    ).subscribe();
  
    this.searchKey.updateValueAndValidity();
     
  }

   public onEdit( id:string){
    this.service.getSingleUser(id).subscribe((user:any)=>{
      let userData = user.data;
      this.postToEdit = userData;
      console.log(this.postToEdit);
      
      
    })
    
    this.drawerService.openDrawer();
   
  }


  public onDelete(id:string){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
       this.service.deleteUser(id).subscribe(data=>{
        console.log(data);
        
      setTimeout(() => {
       this.setUsers();
      }, 400);
       })
       
      }
    });
  

  }
  get searchKey(): FormControl<string> {
    return this.searchForm.get('searchKey') as FormControl<string>;
  }
}




  










