import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  navBackground: string;
  profile: string;
  pdfResume: string;

  constructor() {
    this.navBackground = "./assets/img/navBackground2.jpg";
    this.profile = "./assets/img/profile.jpeg";
    this.pdfResume = "./assets/img/pdfResume.pdf";
  }
}
