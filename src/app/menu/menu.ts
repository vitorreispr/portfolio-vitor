import { Component, inject } from '@angular/core';
import { MenuService } from '../services/menu';
import { Menu } from '../models/menu';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class MenuComponent {
  menuStatus = 'closed';

  constructor() {}
  
  private menuService = inject(MenuService);

    menuItems?: Array<Menu>;

    ngOnInit() {
    const menu = this.menuService.getItems();

    this.menuItems = menu;  
}

menuClick() {
 this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open');
}
}
