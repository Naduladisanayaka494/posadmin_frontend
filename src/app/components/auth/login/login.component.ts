import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  private userName:FormControl;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router: Router
    ) {
    this.createLoginForm();
    this.createRegisterForm();
  }

  owlcarousel = [
    {
      title: "Welcome to FreshMeat.lk",
      desc: "Mobile Application Products and Reports",
    },
    {
      title: "Welcome to FreshMeat.lk",
      desc: "Mobile Application Products and Reports",
    },
    {
      title: "Welcome to FreshMeat.lk",
      desc: "Mobile Application Products and Reports",
    }
  ]
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: this.userName,
      password: [''],
    })
    this.userName=new FormControl('',[Validators.required])

  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
    })
  }


  ngOnInit() {
  }

  onSubmit() {
  let use = {
    "username":this.loginForm.value.userName,
    "password":this.loginForm.value.password
}
    this.userService.onLogin(use).subscribe((result:any)=>{
      localStorage.setItem("accessToken", "Bearer " + result.access_token);
      this.router.navigate(["dashboard/default"]);

    },(err:any)=>{
      console.log(err)
    })
  }

}
