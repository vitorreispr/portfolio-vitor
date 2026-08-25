import { Component, inject } from '@angular/core';
import { MenuService } from '../services/menu';

@Component({
  imports: [],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class MenuComponent {

  constructor() {}
  
  private menuService = inject(MenuService);
}
