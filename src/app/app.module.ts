import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';

const appRoutes: Routes = [
  { path: 'hero/:id',      
    component: HeroDetailComponent, 
    data: { title: 'Hero detail' }
  },
  { path: 'heroes',
    component: HeroesComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'top',
    component: TopComponent,
    data: { title: 'TOP Heroes' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
}
  // },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
