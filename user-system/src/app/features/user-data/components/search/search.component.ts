
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime,tap, } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
 searchKey: FormControl = new FormControl('');
 
 @Output() searchValue = new EventEmitter<string>();

 public onSearchClear() {
  this.searchKey.reset();
  
}

public search(){
  this.searchKey.valueChanges
  .pipe(
    debounceTime(500),
    tap(()=>{
      this.searchValue.emit(this.searchKey.getRawValue())
    })

  ).subscribe();

  this.searchKey.updateValueAndValidity();
   
}
  

}
