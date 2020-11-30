import { Component, OnInit } from '@angular/core';
import { Model } from '../../vm/model'
import { Category } from 'src/vm/category';
import {CATEGORIES} from '../../mock/categories'
import {Models} from '../../mock/model'

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories = CATEGORIES;
  selectedCategory! : Category;
  models! : Model[]

  constructor() { }

  ngOnInit() {

  }

  onCategorySelect(category: Category ): void {
    this.selectedCategory = category;
    const mockModels = new Models(this.selectedCategory);
    this.models = mockModels.getModels();
  }
}
