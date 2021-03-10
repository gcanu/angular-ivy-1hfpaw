import { Component, Directive, VERSION } from "@angular/core";

@Directive({
  selector: "[tl-container]"
})
export class TlContainer {}

@Directive({
  selector: "[tl-etiquette]"
})
export class TlEtiquette {}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
