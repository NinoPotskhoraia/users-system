import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerContainerComponent {
constructor(private drawerService:ToolbarService){

}

  @ViewChild(MatDrawer) 
  public drawer!: MatDrawer;
  

  ngAfterViewInit():void {
    this.drawerService.setDrawer(this.drawer);

}



}
