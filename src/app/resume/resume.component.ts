import {
  Component,
  OnInit
} from '@angular/core';
import {
  text
} from '../../../node_modules/@angular/core/src/render3/instructions';

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
  highlight: any;

  constructor() {
    this.navBackground = "./assets/img/navBackground2.jpg";
    this.profile = "./assets/img/profile.jpeg";
    this.MDResumeAugust18 = "./assets/img/MDResumeAugust18.pdf";
    this.underTheWeather = "./assets/img/UnderTheWeather.jpg";
    this.drumkit = "./assets/img/drumKit.jpg";
  }

  mouseEnter($event) {
    $event.target.classList.add("active");
    // $event.target.classList.add("animated", "bounceInDown");
    $event.target.style.background = "whitesmoke";
  }

  mouseLeave($event) {
    // $event.target.classList.remove("active");
    setTimeout(() => $event.target.classList.remove("active"), 500);
    // $event.target.classList.remove("animated", "bounceInDown");
    // $event.target.style.background = "none";
    console.log("mouseleave");

  }
}
