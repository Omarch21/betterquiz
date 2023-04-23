import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null,Validators.required)
  }
    )
    changeTab(tabName: string) {
      const loginbody = document.querySelector('.bodylogin');
      const signupbody = document.querySelector('.bodysignup');
      const loginTab = document.querySelector('.loginTab');
      const signupTab = document.querySelector('.signupTab');
      if (tabName === 'signup') {
          loginTab?.classList.remove('active');
          signupTab?.classList.add('active');
          loginbody?.classList.remove('active');
          signupbody?.classList.add('active');
      } else if (tabName === 'login') {
          loginTab?.classList.add('active');
          signupTab?.classList.remove('active');
          loginbody?.classList.add('active');
          signupbody?.classList.remove('active');
      }
  }
}
