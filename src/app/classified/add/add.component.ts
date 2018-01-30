import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FileValidators } from '../../shared/input-file/file-validators';
import { InputFileComponent } from '../../shared/input-file/input-file.component';

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
  verficationFormGroup: FormGroup;
  categoryList = [{ text: 'A', id: 1 }, { text: 'B', id: 2 }];
  step1: any;
  @ViewChild('fileUpload') fileUpload: InputFileComponent;
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  constructor(private formBuilder: FormBuilder) {
    this.step1 = {};
  }
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({

      firstCtrl: ['', Validators.required],
      category: [null, [Validators.required]],
      phoneNumber: [null, [Validators.minLength(10)]],
      email: ['', [Validators.email]],
      files: [{ value: undefined, disabled: false }, [FileValidators.maxContentSize(10485760)]], // 10mb

    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.verficationFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  stepChanged($event) {
    this.fileUpload.UploadAllFiles();
 
  }
}
