
import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBtnComponent {
 

  constructor(private toolbarService:ToolbarService){} 

  public onAddClick(){
  
      this.toolbarService.toggleDrawer();
  }
}
