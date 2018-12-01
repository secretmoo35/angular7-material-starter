import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public appDrawer: any;

  constructor() { }

  public closeNav() {
    if (window.innerWidth <= 800) {
      this.appDrawer.close();
    }
  }

  public openNav() {
    this.appDrawer.open();
  }
}
