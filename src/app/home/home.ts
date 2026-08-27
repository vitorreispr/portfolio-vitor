import { Component, inject } from '@angular/core';
import { ProfileService } from '../services/profile';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class HomeComponent {

  constructor() {}

  private profileService = inject(ProfileService);
  

  }

