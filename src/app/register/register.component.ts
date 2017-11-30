import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { APP_CONSTANT } from '../app.constant';
import 'rxjs/add/operator/filter';

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
  domainesCtrl: FormGroup;

  domaines = APP_CONSTANT.DOMAINES;

  static passwordMatch(form) {
    if (form.controls['pass'].value !== '' && form.controls['check'].value !== '') {
      return form.controls['pass'].value === form.controls['check'].value ? null : { passwordMismatch: true };
    } else {
      return null;
    }
  }

  static notEmpty(form) {
    return Object.keys(form.controls).filter(c => form.controls[c].value === true).length !== 0 ? null : { arrayEmpty: true };
  }

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit() {
    this.nameCtrl = new FormControl('', Validators.required);
    this.mailCtrl = new FormControl('', Validators.required);
    this.passwordCtrl = new FormControl('', Validators.required);
    this.checkpasswordCtrl = new FormControl('', Validators.required);
    this.domainesCtrl = new FormGroup({}, RegisterComponent.notEmpty);

    this.domaines.forEach(d => {
      this.domainesCtrl.addControl(d.libelle, new FormControl());
    });

    this.form = this.fb.group({
      name: this.nameCtrl,
      mail: this.mailCtrl,
      pass: this.passwordCtrl,
      check: this.checkpasswordCtrl,
      domaines: this.domainesCtrl
    }, { validator: RegisterComponent.passwordMatch });
  }

  onSubmit() {
    let obj = this.domainesCtrl.value;
    let doms = Object.keys(obj).filter(k => obj[k] === true);
    if (this.nameCtrl.value
    && this.mailCtrl.value
    && this.passwordCtrl.value
    && this.domainesCtrl.value && doms.length > 0) {
      this.us.assoAdd(this.nameCtrl.value, this.mailCtrl.value, this.passwordCtrl.value, doms).subscribe(() => {});
    }
  }

}
