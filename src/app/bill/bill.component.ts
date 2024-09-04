import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  billForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.billForm = this.fb.group({
      items: this.fb.array([])
    });
    this.addItem();
  }

  get items(): FormArray {
    return this.billForm.get('items') as FormArray;
  }

  addItem(): void {
    this.items.push(this.fb.group({
      description: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      total: [{ value: 0, disabled: true }]
    }));
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  calculateTotal(): void {
    this.items.controls.forEach((control) => {
      const quantity = control.get('quantity')?.value || 0;
      const unitPrice = control.get('unitPrice')?.value || 0;
      control.get('total')?.setValue(quantity * unitPrice);
    });
  }

  getSubtotal(): number {
    return this.items.controls.reduce((acc, control) => {
      const total = control.get('total')?.value || 0;
      return acc + total;
    }, 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.1; // Assuming 10% tax rate
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }
}
