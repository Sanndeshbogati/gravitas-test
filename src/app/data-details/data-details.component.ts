import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data= [45, 37, 60, 70, 46, 33];
  fruits = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];

  datas =[ {fruitname:"apple",fruitquantity:45},
  {fruitname:'Orange',fruitquantity:37},
  {fruitname:'Banana',fruitquantity:60},
  {fruitname:'Kiwifruit',fruitquantity:70},
  {fruitname:'Blueberry',fruitquantity:46},
  {fruitname:'Grapes',fruitquantity:33},

]

}
