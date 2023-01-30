import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DialogService } from '../../services/dialog.service';
import { UsersService } from '../../services/users.service';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'firstName', 'lastName', 'roles', 'status', 'actions'];

  constructor(private dialogService: DialogService, private service:UsersService) {
    this.dataSource = new DataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  onDelete(){
    this.dialogService.openConfirmDialog('Are you sure you want to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteUser();
        
      }
    });
  }

  
public onEdit(id:string){
    
}
}
