import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NotOkHeaderComponent } from '../not-ok-header/not-ok-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [NotOkHeaderComponent, IonContent, ExploreContainerComponent],
})
export class Tab2Page {
  constructor() {}
}
