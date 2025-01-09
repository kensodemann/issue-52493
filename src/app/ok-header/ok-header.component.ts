import { Component } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ok-header',
  templateUrl: './ok-header.component.html',
  styleUrls: ['./ok-header.component.scss'],
  imports: [IonHeader, IonToolbar],
})
export class OkHeaderComponent {}
