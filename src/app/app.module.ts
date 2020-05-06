import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { SkillsBarComponent } from './components/skills-bar/skills-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsTableComponent,
    SkillsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
