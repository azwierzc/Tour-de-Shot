import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { ProductCategoryService } from '../services/product-category.service';
import { ProductCategory } from '../models/ProductCategory';
enableRipple(true);

@Component({
  selector: 'app-tree',
  // specifies the template string for the TreeView component with CheckBox
  template: `<div id='treeparent'><ejs-treeview id='treeelement' [fields]='field' [showCheckBox]='showCheckBox'></ejs-treeview></div>`
})
export class TreeComponent  implements OnInit{
  public productCategoryList: object[];
  constructor(private productCategoryService: ProductCategoryService) {
  }
  // defined the array of data


  // maps the appropriate column to fields property
public countries: object[];
public field: object;
 public showCheckBox = true;

  ngOnInit(): void {
    console.log("tree is init")
    // this.getProductCategoryList();
    this.getProductCategoryList();
    // maps the appropriate column to fields property

    this.productCategoryService.getProductCategory().subscribe(data => {
      this.productCategoryList = data as object[]
      this.countries =   this.productCategoryList;
      
      console.log("prductCategoryList")
      console.log(this.productCategoryList)
      // maps the appropriate column to fields property
      let field: object = { dataSource: this.productCategoryList, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
      // set the CheckBox to the TreeView
      let showCheckBox = true;
      this.field = { dataSource: this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
      this.showCheckBox = true;
      // set the CheckBox to the TreeView
    });


// this.field = { dataSource: this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
    // set the CheckBox to the TreeView

  }


  getProductCategoryList(){
    this.productCategoryService.getProductCategory().subscribe(data => {
      this.productCategoryList = data as object[]

      console.log("prductCategoryList")
      console.log(this.productCategoryList)
      // maps the appropriate column to fields property
      let field: object = { dataSource: this.productCategoryList, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
      // set the CheckBox to the TreeView
      let showCheckBox = true;
    });

  }

}
