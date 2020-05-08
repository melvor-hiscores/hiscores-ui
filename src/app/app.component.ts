import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './home/pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(HomeComponent, null) home: HomeComponent;

  title = 'melvor-hiscores';
}
