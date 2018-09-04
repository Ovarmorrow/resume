import {
  Component,
  OnInit,
  style
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
  img: any;
  opacity: any;
  underTheWeather: string;
  pD: any;
  projects = [{
      "projectName": "p1",
      "projectDesc": "My first project! Panthers fan page built with just HTML and CSS",
      "projectImg": "./assets/img/Tao.jpg"
    },
    {
      "projectName": "p2",
      "projectDesc": "The About section of the Panthers page. It was exciting learning to tinker with img sizing and doing a source quote. HTML and CSS",
      "projectImg": "./assets/img/TaoAbout.jpg"
    },
    {
      "projectName": "p3",
      "projectDesc": "Challenge Project: Build a Dale Generator. It will randomize all the results in each column. Built with C#",
      "projectImg": "./assets/img/Daletributes.jpg"
    },
    {
      "projectName": "p4",
      "projectDesc": "Challenge Project: Build a loan calculator. The routing and math portions are my biggest accomplishments here. Built with C#",
      "projectImg": "./assets/img/LoanCalc1.jpg"
    },
    {
      "projectName": "p5",
      "projectDesc": "The final tables after loans are entered. Expanded my knowledge on the use of tables and changing their output display. C#",
      "projectImg": "./assets/img/LoanCalc2.jpg"
    },
    {
      "projectName": "p6",
      "projectDesc": "Fully vanilla Javascript keyboard drumkit. I grow to love js the more I sink my teeth into it",
      "projectImg": "./assets/img/drumKit.jpg"
    },
    {
      "projectName": "p7",
      "projectDesc": "Fully vanilla Javascript weather application. My first jump into consuming REST API service calls using AJAX and JSON, then filtering the return data",
      "projectImg": "./assets/img/UnderTheWeather.jpg"
    },
  ]

  constructor() {
    this.tao = "./assets/img/Tao.jpg";
    this.taoAbout = "./assets/img/TaoAbout.jpg";
    this.taoSchedule = "./assets/img/TaoSchedule.jpg";
    this.taoRoster = "./assets/img/TaoRoster.jpg";
    this.daletributes = "./assets/img/Daletributes.jpg";
    this.loanCalc1 = "./assets/img/LoanCalc1.jpg";
    this.loanCalc2 = "./assets/img/LoanCalc2.jpg";
    this.underTheWeather = "./assets/img/UnderTheWeather.jpg";

    this.opacity = 0.6;
  }

  ngOnInit() {

    this.current = document.querySelector('#current');
    this.imgs = document.querySelectorAll('.imgs img');
    // Set first img opacity
    // this.imgs[0].style.opacity = this.opacity;
  }
  

  imgClick(e, index) {
    //Reset all image opacity on click
    const imgArray = Array.from(document.querySelectorAll('.imgs img'));
    imgArray.forEach(img => { 
      this.img = img;
      this.img.style.opacity = 1;
      // console.log("img", img);
    });
    // target all project-description elements and hide them
    this.pD = document.getElementsByClassName("project-description");
    // console.log('this.pD', this.pD);
    for (let i = 0; i < this.pD.length; i++) {
      this.pD[i].style.display = "none";
      // console.log('pD', this.pD[i]);
    }
    
    // console.log(this.imgs[1]);

    // Change current img to clicked img
    this.current.src = e.target.src;
    // Add fade in class
    this.current.classList.add('fade-in');
    // Remove fade-in class after .5s
    setTimeout(() => this.current.classList.remove('fade-in'), 500);
    // Change opacity to opacity var
    e.target.style.opacity = this.opacity;
    let currentProject = "project" + index;
    console.log('currentProject', currentProject);
    let cP = document.getElementById(currentProject);
    cP.style.display = "flex";
  }
}
