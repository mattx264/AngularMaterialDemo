import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList: any[];
  constructor() { }

  ngOnInit() {
    this.categoryList = [
      {
        name: 'Praca', id: 1, icon: 'work',
        subCategory: [{ name: 'Budowlana', id: 2 },
        { name: 'SDFG', id: 3 },
        { name: 'Budgdfgdowlana', id: 4 }]
      }
    ];
  }

}
