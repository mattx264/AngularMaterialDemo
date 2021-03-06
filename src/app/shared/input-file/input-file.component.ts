import { Component, OnInit, OnDestroy, Input, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { FileInput } from './file-input.model';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: InputFileComponent }
  ]
})
export class InputFileComponent implements MatFormFieldControl<FileInput>, ControlValueAccessor, OnInit, OnDestroy {

  static nextId = 0;
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost/RAMP/api/employee/file' });
  stateChanges = new Subject<void>();
  focused = false;
  controlType = 'file-input';

  private _placeholder: string;
  private _required = false;

  @Input() valuePlaceholder: string;
  @Input() multiple: boolean;

  @HostBinding() id = `app-input-file-${InputFileComponent.nextId++}`;
  @HostBinding('attr.aria-describedby') describedBy = '';

  @Input() get value(): FileInput | null {
    return this.empty ? null : new FileInput(this._elementRef.nativeElement.value || []);
  }
  set value(fileInput: FileInput | null) {
    this.writeValue(fileInput.files);
    this.stateChanges.next();
  }

  @Input() get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  get empty() {
    return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
  }

  @HostBinding('class.mat-form-field-should-float') get shouldPlaceholderFloat() {
    return this.focused || !this.empty || this.valuePlaceholder !== undefined;
  }

  @Input() get required() {
    return this._required;
  }
  set required(req: boolean) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  @HostBinding('class.file-input-disabled') get isDisabled() {
    return this.disabled;
  }
  @Input() get disabled() {
    return this._elementRef.nativeElement.disabled;
  }
  set disabled(dis: boolean) {
    this.setDisabledState(coerceBooleanProperty(dis));
    this.stateChanges.next();
  }

  @Input() get errorState() {
    return this.ngControl.errors !== null && this.ngControl.touched;
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }
  onContainerClick(event: MouseEvent) {
  }
  // onContainerClick(event: MouseEvent) {
  //   if ((event.target as Element).tagName.toLowerCase() !== 'input' && !this.disabled) {
  //     this._elementRef.nativeElement.querySelector('input').focus();
  //     this.focused = true;
  //     this.open();
  //   }
  // }
  onClick() {
    this._elementRef.nativeElement.querySelector('input').focus();
    this.focused = true;
    this.open();
  }
  /**
   * Upload all files if they're not uploaded already.
   */
  public UploadAllFiles() {
    for (let i = 0; i < this.uploader.queue.length; i++) {
      this.uploader.queue[i].upload();
    }
  }
  /**
   * @see https://angular.io/api/forms/ControlValueAccessor
   */
  constructor(public ngControl: NgControl,
    private fm: FocusMonitor, private _elementRef: ElementRef, private _renderer: Renderer2) {

    ngControl.valueAccessor = this;
    fm.monitor(_elementRef.nativeElement, _renderer, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  writeValue(obj: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj);
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  @HostListener('change', ['$event']) change(event) {
    const fileList = event.target.files;
    const fileArray = [];
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        fileArray.push(fileList[i]);
      }
    }
    this.value = new FileInput(fileArray);
    this._onChange(this.value);
  }

  @HostListener('focusout') blur() {
    this.focused = false;
    this._onTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  ngOnInit() {
    this.multiple = coerceBooleanProperty(this.multiple);
  }

  open() {
    if (!this.disabled) {
      this._elementRef.nativeElement.querySelector('input').click();
    }
  }

  get fileNames() {
    return this.value ? this.value.fileNames : this.valuePlaceholder;
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this._elementRef.nativeElement);
  }

}
