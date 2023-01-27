import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports:[
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class SharedModule { }
