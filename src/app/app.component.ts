import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  showLoginPage: any;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
