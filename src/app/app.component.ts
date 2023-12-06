import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonContent, IonHeader, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  constructor() {}
}
