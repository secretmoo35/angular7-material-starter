import { Component, OnInit, HostListener } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isMenuIcon = true;
  @HostListener('window:resize') onResize() {
    this.onResizeDisplay();
  }

  constructor(
    public sidenavService: SidenavService
  ) {
    this.onResizeDisplay();
  }

  ngOnInit() {
  }

  onResizeDisplay() {
    if (window.innerWidth > 800) {
      this.isMenuIcon = false;
    } else {
      this.isMenuIcon = true;
    }
  }

}
