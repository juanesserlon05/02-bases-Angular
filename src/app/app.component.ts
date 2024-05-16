import { DbzModule } from './dbz/dbz.module';
import { Component } from '@angular/core';
import { CounterModule } from "./counter/components/counter.module";
import { HeroesModule } from './heroes/heroes.module';
import { AppModule } from './app.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports:
    [CounterModule,
    HeroesModule,
    DbzModule
    ]
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
}
