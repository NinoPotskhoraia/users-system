import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainPageComponent,
    SearchComponent,
    AddBtnComponent,
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component:MainPageComponent
     }
       
    
    ])
  ]
})
export class UserDataModule { }
