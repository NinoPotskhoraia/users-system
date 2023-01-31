import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { SharedModule } from '../../shared/shared.module';

import { RouterModule } from '@angular/router';
import { DrawerContainerComponent } from './components/drawer-container/drawer-container.component';
import { SideFormComponent } from './components/side-form/side-form.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    AddBtnComponent,
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
