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
  pdfResume: string;

  constructor() {
    this.navBackground = "./assets/img/navBackground2.jpg";
    this.profile = "./assets/img/profile.jpeg";
    this.pdfResume = "./assets/img/pdfResume.pdf";
  }

}
