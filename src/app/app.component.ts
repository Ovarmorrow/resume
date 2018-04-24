import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  navBackground: string;
  profile: string;
  
  constructor() { 
    this.navBackground = "/resume/docs/assets/img/navBackground.jpg";
    this.profile = "/resume/docs/assets/img/profile.jpg";
   }
}
