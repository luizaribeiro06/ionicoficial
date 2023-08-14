import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// import { register } from 'swiper/element/bundle';

// register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home'},
    { title: 'Transporte', url: '/transporte'},
    { title: 'Saúde', url: '/saude'},
    { title: 'Ia', url: '/ia'}
  ];

  constructor() {}

}
