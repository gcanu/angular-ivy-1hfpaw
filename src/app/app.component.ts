import { Component, Directive, VERSION } from "@angular/core";

@Directive({
  selector: "[tl-container]"
})
export class TlContainer {}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
