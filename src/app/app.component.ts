import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapPopupComponent } from './components/map-popup/map-popup.component';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private dialog: MatDialog) { }

  openMapPopup(): void {
    this.dialog.open(MapPopupComponent, {
      height: '90%',
      width: '90%',
    });
  }
}
