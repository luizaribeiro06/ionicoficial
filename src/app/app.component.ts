import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home'},
    { title: 'Ia', url: '/ia'},
    { title: 'Saúde', url: '/saude'},
    { title: 'Transporte', url: '/transporte'}
  ];

  constructor() {}

}
