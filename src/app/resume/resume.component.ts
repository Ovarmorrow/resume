import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  navBackground: string;
  profile: string;
  MDResumeJuly18: string;

  constructor() {
    this.navBackground = "./assets/img/navBackground2.jpg";
    this.profile = "./assets/img/profile.jpeg";
    this.MDResumeJuly18 = "./assets/img/MDResumeJuly18.pdf";
  }

}
