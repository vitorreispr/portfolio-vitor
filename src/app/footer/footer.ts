import { Component, inject } from '@angular/core';
import { ProfileService } from '../services/profile';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class FooterComponent {

  constructor() {}

  private profileService = inject(ProfileService);
}
