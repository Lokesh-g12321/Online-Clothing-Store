import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  subtotal = 0;
  tax = 0;
  total = 0;

  constructor() { }

  ngOnInit(): void {
    // this.cartItems = this.cartService.getCart();
    // this.calculateTotals();
  }

  removeItemFromCart(item: any) {
    // this.cartService.removeItemFromCart(item);
    // this.cartItems = this.cartService.getCart();
    // this.calculateTotals();
  }

  updateCart() {
    // Update cart logic here
  }

  // calculateTotals() {
  //   this.subtotal = 0;
  //   this.tax = 0;
  //   this.total = 0;
  //   this.cartItems.forEach(item => {
  //     this.subtotal += item.product.price * item.quantity;
  //   });
  //   this.tax = this.subtotal * 0.08;
  //   this.total = this.subtotal + this.tax;
  }
