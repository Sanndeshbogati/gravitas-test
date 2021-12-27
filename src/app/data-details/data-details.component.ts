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
  fruits = ['GMB', 'Website', 'Referals', 'Paid', 'Social Media', 'Digital Marketing'];

  datas =[ {fruitname:"Google My Business",fruitquantity:45},
  {fruitname:'Website',fruitquantity:37},
  {fruitname:'Referals',fruitquantity:60},
  {fruitname:'Paid',fruitquantity:70},
  {fruitname:'Social Media',fruitquantity:46},
  {fruitname:'Digital Marketing',fruitquantity:33},

]

}
