import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl,Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
export function passwordsMatch(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmpassword = control.get('confirmpassword')?.value;
    if(password && confirmpassword && password !== confirmpassword){
      return {passwordsDontMatch: true};
    } else{
      return null;
    }
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  loginform = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null,Validators.required)
  })
  signupform = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    confirmpassword: new FormControl(null,Validators.required)
  },
  {validators: passwordsMatch()}
    )
    constructor(private authService: AuthService, private usersService: UsersService, private toast: HotToastService, private router: Router){}
    changeTab(tabName: string) {
      const loginbody = document.querySelector('.bodylogin');
      const signupbody = document.querySelector('.bodysignup');
      const loginTab = document.querySelector('.loginTab');
      const signupTab = document.querySelector('.signupTab');
      const logindiv = document.getElementById('logindiv');
      if (tabName === 'signup') {
          loginTab?.classList.remove('active');
          signupTab?.classList.add('active');
          loginbody?.classList.remove('active');
          signupbody?.classList.add('active');
          if(logindiv){
 
            logindiv.style.height = '650px';
          }
      } else if (tabName === 'login') {
          loginTab?.classList.add('active');
          signupTab?.classList.remove('active');
          loginbody?.classList.add('active');
          signupbody?.classList.remove('active');
          if(logindiv){
            logindiv.style.height = '';
          }
      }
  }
  ngOnInit(): void{}
  get email(){
    return this.signupform.get('email');
  }
  get username(){
    return this.signupform.get('username');
  }
  get password(){
    return this.signupform.get('password');
  }
  get pass(){
    return this.signupform.get('username');
  }
  submit(){
    if(!this.signupform.valid){
      return;
    }
    const {email,username,password} = this.signupform.value;
    if(email && username && password){
    this.authService.signup(email!,password!).pipe(
      switchMap(({user: {uid}})=>
      this.usersService.addAccount({uid, email, username})),
      this.toast.observe({
        success: 'Congrats! Youre all signed up!',
        loading: 'Signing up...',
        error: ({message}) => `${message}`
      })
    ).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }
}
}
