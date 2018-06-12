import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  login(form: NgForm) {
    this.router.navigateByUrl("/header");
  }

  ngOnInit() {
  }

}
