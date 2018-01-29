import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FileValidators } from '../../shared/input-file/file-validators';

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
 
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  constructor(private formBuilder: FormBuilder) {
    this.step1 = {};

  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      firstCtrl: ['', Validators.required],
      category: [null, [Validators.required]],
      requiredfile: [{ value: undefined, disabled: false }, [Validators.required, FileValidators.maxContentSize(104857600)]],
      disabledfile: [{ value: undefined, disabled: true }],
      multiplefile: [{ value: undefined, disabled: false }],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
