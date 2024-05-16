import { NgModule } from "@angular/core";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";

import { DbzModule } from './dbz/dbz.module';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from "./heroes/heroes.module";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
