//import { Component } from '@angular/core';

//@Component({
//  selector: 'app-item-list',
//  templateUrl: './item-list.component.html',
//  styleUrls: ['./item-list.component.css']
//})
//export class ItemListComponent {

//}


// item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  category: string = '';
  categoryTitle: string = '';
  items: any[] = [];
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    });
  }


//
  // Add to cart method
  addToCart(item: any): void {
    console.log('Added to cart:', item);
    // Implement your cart logic here
  }
}
