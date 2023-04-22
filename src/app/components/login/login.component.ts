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
}
