import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(public api: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.checkLogin();
  }
  mode: string = 'side';
  checkLogin() {
    this.api.get('bookswithauth/status').subscribe(
      (res) => {
        return;
      },
      (err) => {
        this.router.navigate(['/login']);
      }
    );
  }
  logout() {
    let conf = confirm('keluar aplikasi?');
    if (conf) {
      localStorage.removeItem('appToken');
      window.location.reload();
    }
  }
  menu = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/admin/dashboard',
    },
    {
      group: 'Menu Group',
      children: [
        {
          name: 'Image Gallery',
          icon: 'images',
          url: '/admin/gallery',
        },
        {
          name: 'Product',
          icon: 'shopping_cart',
          url: '/admin/product',
        },
      ],
    },
  ];
}
