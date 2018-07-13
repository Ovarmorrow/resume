import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  tao: string;
  taoAbout: string;
  taoRoster: string;
  taoSchedule: string;
  daletributes: string;
  loanCalc1: string;
  loanCalc2: string;
  current: any;
  imgs: any;
  opacity: any;
  bgPalm: string;

  constructor() {
    this.tao = "./assets/img/Tao.jpg";
    this.taoAbout = "./assets/img/TaoAbout.jpg";
    this.taoSchedule = "./assets/img/TaoSchedule.jpg";
    this.taoRoster = "./assets/img/TaoRoster.jpg";
    this.daletributes = "./assets/img/Daletributes.jpg";
    this.loanCalc1 = "./assets/img/LoanCalc1.jpg";
    this.loanCalc2 = "./assets/img/LoanCalc2.jpg";

    this.opacity = 0.6;
    this.bgPalm = "./assets/img/bgPalm.png";



  }

  ngOnInit() {
    this.current = document.querySelector('#current');
    this.imgs = document.querySelectorAll('.imgs img');
    // Set first img opacity
    this.imgs[0].style.opacity = this.opacity;
  }


  imgClick(e) {
    for (let i = 0; i < this.imgs.length; i++) {
      this.imgs[i].style.opacity = 1;
    }
    // Change current img to clicked img
    this.current.src = e.target.src;
    // Add fade in class
    this.current.classList.add('fade-in');

    // Remove fade-in class after .5s
    setTimeout(() => this.current.classList.remove('fade-in'), 500);
    // Change opacity to opacity var
    e.target.style.opacity = this.opacity;
  }


}
