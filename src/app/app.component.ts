import {AfterContentInit, Component, ContentChildren, Directive, ElementRef, HostBinding, QueryList, VERSION} from "@angular/core";

export enum Position {
    GAUCHE,
    DROITE
}

export const Positions = new Map<Position, string>([
    [Position.GAUCHE, 'gauche'],
    [Position.DROITE, 'droite']
]);

@Directive({
    selector: "[tl-etiquette]"
})
export class TlEtiquette {
    position: string;

    constructor(
        private readonly el: ElementRef
    ) {
    }

    @HostBinding('class') get gauche(): string {
        return this.position
    };

    setPosition(position: Position) {
        this.position = Positions.get(position);
    }

    getElement(): HTMLElement {
        return this.el.nativeElement;
    }
}

@Directive({
    selector: "[tl-container]"
})
export class TlContainer implements AfterContentInit {
    @ContentChildren(TlEtiquette, {descendants: true}) etiquettes!: QueryList<TlEtiquette>;

    constructor(
        private readonly container: ElementRef
    ) {
    }

    ngAfterContentInit() {
        const etiquette = this.etiquettes
          .reduce((e: TlEtiquette, etiquette: TlEtiquette) => {
              const tailleMax = e.getElement().clientWidth;
              const taille = etiquette.getElement().clientWidth;

              console.log(tailleMax, taille);


              return taille > tailleMax ? etiquette : e;
            }, this.etiquettes.first
          );


        const containerEl = this.container.nativeElement as HTMLElement;
        let element: HTMLElement = etiquette.getElement()
        
        while(element && element !== containerEl) {
            element = element.parentElement;
        }

        console.log('here');
        etiquette.setPosition(Position.GAUCHE);
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
