import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  nameCtrl: FormControl;
  mailCtrl: FormControl;
  passwordCtrl: FormControl;
  checkpasswordCtrl: FormControl;

  static passwordMatch(form) {
    if (form.controls['pass'].value !== '' && form.controls['check'].value !== '') {
      return form.controls['pass'].value === form.controls['check'].value ? null : { passwordMismatch: true };
    } else {
      return null;
    }
  }

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit() {
    this.nameCtrl = new FormControl('', Validators.required);
    this.mailCtrl = new FormControl('', Validators.required);
    this.passwordCtrl = new FormControl('', Validators.required);
    this.checkpasswordCtrl = new FormControl('', Validators.required);

    this.form = this.fb.group({
      name: this.nameCtrl,
      mail: this.mailCtrl,
      pass: this.passwordCtrl,
      check: this.checkpasswordCtrl
    }, { validator: RegisterComponent.passwordMatch });
  }

  onSubmit() {
    if (this.nameCtrl.value && this.mailCtrl.value && this.passwordCtrl.value) {
      this.us.assoAdd(this.nameCtrl.value, this.mailCtrl.value, this.passwordCtrl.value).subscribe(r => console.log(r));
    }
  }

}
