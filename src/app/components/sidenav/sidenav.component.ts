import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public activeRoute = '';
  constructor(
    private route: Router,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
  }

  openPage(url: string) {
    this.activeRoute = url;
    this.route.navigateByUrl(url);
    this.sidenavService.closeNav();
  }
}
