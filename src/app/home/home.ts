import { Component, inject } from '@angular/core';
import { ProfileService } from '../services/profile';
import { Profile } from '../models/profile';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class HomeComponent {

  constructor() {}

  private profileService = inject(ProfileService);

  profile?: Profile;
  
  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
  }

