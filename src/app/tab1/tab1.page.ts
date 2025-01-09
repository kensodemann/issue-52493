import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { OkHeaderComponent } from '../ok-header/ok-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [OkHeaderComponent, IonContent, ExploreContainerComponent],
})
export class Tab1Page {}
