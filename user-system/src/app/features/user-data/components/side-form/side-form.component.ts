import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-side-form',
  templateUrl: './side-form.component.html',
  styleUrls: ['./side-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideFormComponent {

  constructor(private drawerService:ToolbarService){

  }

  userForm:FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    status: new FormControl('', Validators.required),
    roles: new FormControl('', [Validators.required, Validators.pattern('/^(user|admin)$/')]),
  })

  public onCancelClick(){
     this.drawerService.closeDrawer();
  }

  public onConfirmClick(){
    
  }





  get email(): FormControl<string> {
    return this.userForm.get('email') as FormControl<string>;
  }

  get firstName(): FormControl<string> {
    return this.userForm.get('firstName') as FormControl<string>;
  }

  get lastName(): FormControl<string> {
    return this.userForm.get('lastName') as FormControl<string>;
  }

  get status(): FormControl<string> {
    return this.userForm.get('status') as FormControl<string>;
  }

  get roles(): FormControl<string> {
    return this.userForm.get('roles') as FormControl<string>;
  }

}
