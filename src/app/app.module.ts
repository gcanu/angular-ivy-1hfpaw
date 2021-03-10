import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent, TlContainer, TlEtiquette } from "./app.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TlContainer, TlEtiquette],
  bootstrap: [AppComponent]
})
export class AppModule {}
