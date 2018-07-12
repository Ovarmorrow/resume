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
    this.navBackground = "./img/navBackground2.jpg";
    this.profile = "./img/profile.jpeg";
    this.MDResumeJuly18 = "./img/MDResumeJuly18.pdf";
  }

}
