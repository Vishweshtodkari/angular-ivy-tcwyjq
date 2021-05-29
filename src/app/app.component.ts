import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ph_no: number;
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      ph_no: '',
      quantities: this.fb.array([])
    });
  }

  quantities(): FormArray {
    return this.productForm.get('quantities') as FormArray;
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      pno: ''
    });
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
