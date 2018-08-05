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
  MDResumeAugust18: string;
  underTheWeather: string;
  drumkit: string;

  constructor() {
    this.navBackground = "./assets/img/navBackground2.jpg";
    this.profile = "./assets/img/profile.jpeg";
    this.MDResumeAugust18 = "./assets/img/MDResumeAugust18.pdf";
    this.underTheWeather = "./assets/img/UnderTheWeather.jpg";
    this.drumkit = "./assets/img/drumKit.jpg";
  }

}
