import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  categoryList = [{ text: 'A', id: 1 }, { text: 'B', id: 2 }];
  step1: any;

  constructor(private formBuilder: FormBuilder) {
    this.step1 = {};

  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern(EMAIL_REGEX)]],
      firstCtrl: ['', Validators.required],
      category: [null, [Validators.required]]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
