import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complexform',
  templateUrl: './complexform.component.html',
  styleUrls: ['./complexform.component.css']
})
export class ComplexformComponent implements OnInit {

  sampleFormGroup : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  cartItems : FormArray;

  buildForm() {

    //this.cartItems = this.formBuilder.array([this.formBuilder.control("")]);

    this.cartItems = this.formBuilder.array([this.buildCartItemRow()]);

    this.sampleFormGroup = this.formBuilder.group( {
        name :  ["test", Validators.required],
        items : this.cartItems
    });
  }

  buildCartItemRow () : FormGroup {
    return this.formBuilder.group({
      quantity : this.formBuilder.control("5"),
      description : this.formBuilder.control("desc")      
    });
  }

  handleSubmit(formData) {
    console.log("Form Data : " + JSON.stringify(formData));

    for (let item of formData.items) {
      console.log("item : " + item.quantity);
      console.log("item  " + item.description);
    }
  }

  handleAddRow() {
    console.log("Add Row");
    let itemsArray =  this.sampleFormGroup.get("items") as FormArray
    // itemsArray.push(this.formBuilder.control(""));
    itemsArray.push(this.buildCartItemRow());
  }

  handleDeleteRow() {
    console.log("Delete Row");
    let itemsArray =  this.sampleFormGroup.get("items") as FormArray
    if (itemsArray.length > 1) {
      console.log("itemsArray.length " + itemsArray.length);
     itemsArray.removeAt(itemsArray.length-1);
    }

  }

}
