import { Service } from '@angular/core';
import { Profile } from '../models/profile';

@Service()
export class ProfileService {

    constructor() {}

    getProfile(): Profile {

        var profile: Profile = {
            email: 'contato@vitorreispr.com.br',
            name: 'Vitor Reis',
            whatsApp: 'https://api.whatsapp.com/send?phone=5586999591356&text=Ol%C3%A1,%20eu%20estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
            linkedIn: '',
        }

        return profile;
    }
}
