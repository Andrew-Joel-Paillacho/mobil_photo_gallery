import { Component } from '@angular/core';
// CHANGE: Import the PhotoService
import { PhotoService } from '../services/photo.service';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, bicycle, logoYoutube, alarmOutline, home, informationCircle, person, documentText, reorderFourOutline, personCircleOutline, newspaperOutline, homeOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  // CHANGE: Update constructor to include `photoService`
  constructor(public photoService: PhotoService) {addIcons({ triangle, 
               ellipse, 
               square, 
               bicycle, 
               'logo-Youtube':logoYoutube, 
               'alarm-outline':alarmOutline, 
               home, 
               'information-Circle':informationCircle, 
               person, 
               'reorder-four-outline':reorderFourOutline,
               'document-Text':documentText,
               'person-circle-outline':personCircleOutline,
               'newspaper-outline':newspaperOutline,
               'home-outline':homeOutline });}

  // CHANGE: Add call to `loadSaved()` when navigating to the Photos tab
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
