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
  pdfResume: string;
  
  constructor() { 
    this.navBackground = "/resume/assets/img/navBackground.jpg";
    this.profile = "/resume/assets/img/profile.jpg";
    this.pdfResume = "/resume/assets/img/pdfResume.pdf"

   }
}
