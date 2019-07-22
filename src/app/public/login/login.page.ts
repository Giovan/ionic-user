import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    this.authService.login(form.value).subscribe(() => {
      this.router.navigateByUrl('home');
    });
  }
}
