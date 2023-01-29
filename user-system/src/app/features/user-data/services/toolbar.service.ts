import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }

  private drawer!: MatDrawer;

setDrawer(drawer: MatDrawer) {
   this.drawer = drawer;
}

openDrawer(){
  this.drawer.open();
}

closeDrawer(){
  this.drawer.close();
}

toggleDrawer() {
  this.drawer.toggle();
}
}
