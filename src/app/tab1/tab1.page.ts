import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { OkHeaderComponent } from '../ok-header/ok-header.component';
import { StatusBarService } from '../core/status-bar.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [OkHeaderComponent, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  constructor(private statusBar: StatusBarService) {}

  ionViewWillEnter() {
    this.statusBar.changeBackgroundToWhite();
  }
}
