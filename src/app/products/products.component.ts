import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { id: 1, name: "Wrogn", avail: "Available", offer: "Upto 60% OFF across the site", image: "/assets/black.webp", price: "$40" },
    { id: 2, name: "HRX", avail: "Not Available", offer: "5% OFF Prepaid", image: "/assets/brow.webp", price: "$35" },
    { id: 3, name: "NIKE", avail: "Available", offer: "Use Online payment method during checkout to get additional 5% discount.", image: "/assets/grey.webp", price: "$40" }
  ];

  productCountRadioButton: string = 'all';

  constructor() { }

  ngOnInit(): void { }

  getAllProducts() {
    return this.products.length;
  }

  getAvailableProducts() {
    return this.products.filter(p => p.avail === "Available").length;
  }

  getWrognProducts() {
    return this.products.filter(p => p.name === "Wrogn").length;
  }

  onFilterButton(data: string) {
    this.productCountRadioButton = data;
  }
}