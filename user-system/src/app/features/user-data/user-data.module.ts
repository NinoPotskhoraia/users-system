import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SharedModule } from '../../shared/shared.module';

import { RouterModule } from '@angular/router';
import { DrawerContainerComponent } from './components/drawer-container/drawer-container.component';
import { SideFormComponent } from './components/side-form/side-form.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    SearchComponent,
    AddBtnComponent,
    DataTableComponent,
    DrawerContainerComponent,
    SideFormComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component:DrawerContainerComponent
     }
       
    
    ])
  ]
})
export class UserDataModule { }
