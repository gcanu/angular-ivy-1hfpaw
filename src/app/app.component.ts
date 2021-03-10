import {
  AfterContentInit,
  Component,
  ContentChildren,
  Directive,
Host,
HostBinding,
  QueryList,
  VERSION,
  ViewChild
} from "@angular/core";

export const Position = {
  GAUCHE: 'gauche',
  DROITE: 'droite'
} as const;

export type Position = typeof Position[keyof typeof Position];


@Directive({
  selector: "[tl-etiquette]"
})
export class TlEtiquette {
  position: string;

  @HostBinding('class') get gauche():string {return this.position};

  setPosition(position: Position) {
    this.position = position;
  }
}

@Directive({
  selector: "[tl-container]"
})
export class TlContainer implements AfterContentInit {
  @ContentChildren(TlEtiquette, {descendants: true}) etiquettes!: QueryList<TlEtiquette>;

  ngAfterContentInit() {
    this.etiquettes.forEach((etiquette: TlEtiquette) => {
      const i: number = Math.floor(Math.random() * 2);
      /*const p = Object.keys(Position)[i];
      etiquette.setPosition(Position[]);*/
    })
  }
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
