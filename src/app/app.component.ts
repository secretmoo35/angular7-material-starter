import { Component, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SidenavService } from './components/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  mode = 'over';
  opened = false;

  constructor(
    public sidenavService: SidenavService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    this.sidenavService.appDrawer = this.appDrawer;
    this.onResizeDisplay();
    window.onresize = () => {
      this.onResizeDisplay();
    };
  }

  onResizeDisplay() {
    if (window.innerWidth > 800) {
      this.mode = 'side';
      this.opened = true;
      this.changeDetectorRef.detectChanges();
    } else {
      this.mode = 'over';
      this.opened = false;
    }
  }
}
