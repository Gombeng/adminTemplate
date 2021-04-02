import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public api: ApiService, public router: Router) {}
  user: any = {};
  ngOnInit(): void {}
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [Validators.required]);
  loading: boolean;
  login(user) {
    this.loading = true;
    this.api.login(this.user.email, this.user.password).subscribe(
      (res) => {
        this.loading = false;
        localStorage.setItem('appToken', JSON.stringify(res));
        this.router.navigate(['admin/dashboard']);
      },
      (err) => {
        this.loading = false;
        alert('Tidak dapat login');
      }
    );
  }
}
