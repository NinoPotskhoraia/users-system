import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolbarService } from '../../services/toolbar.service';
import { tap,BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-side-form',
  templateUrl: './side-form.component.html',
  styleUrls: ['./side-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideFormComponent implements OnInit {
constructor(private drawerService:ToolbarService){}





disable:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  ngOnInit(){
    this.userForm.valueChanges
    .pipe(
      tap(()=>{
      if(this.userForm.status === 'VALID'){
        this.disable.next(false);
      }
      
      })

    ).subscribe();
    
    
  }

  userForm:FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    status: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required),
  })


  public onSubmit(){

  }

  public onEdit(){
    
  }

  

  public onCancelClick():void{
    this.closeAndReset();
  }

  public onConfirmClick():void{
  
     
  }

  public closeForm():void{
    this.closeAndReset();

  }


  private closeAndReset():void{
    this.drawerService.closeDrawer();

    this.firstName.reset();
    this.firstName.setErrors(null);
    this.lastName.reset();
    this.lastName.setErrors(null);
    this.email.reset();
    this.email.setErrors(null);
    this.status.reset();
    this.status.setErrors(null);
    this.roles.reset();
    this.roles.setErrors(null);
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
