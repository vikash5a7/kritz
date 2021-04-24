import { Component, OnInit } from '@angular/core';
export interface trekInfo{  
  name: string;  
  price: number;  
  place: number;  
} 
@Component({
  selector: 'app-treks',
  templateUrl: './treks.component.html',
  styleUrls: ['./treks.component.scss']
})
export class TreksComponent implements OnInit {

  constructor() { }
  treks = [
    {"sn":"1", "name": "Kanchenjunga Base Camp Trek", "price":"123","place":"Sikkim Himalayas"},
    { "sn":"2", "name": "Chadar Trek", "price":"123","place":"Ladakh Himalayas"},
    { "sn":"3", "name": "Gomukh Tapovan Trek", "price":"2342","place":"Garhwal Himalayas"},
    { "sn":"4", "name": "Ladakh Himalayas", "price":"1324","place":"Ladakh Himalayas"},
    { "sn":"5", "name": "Kuari Pass Trek", "price":"513","place":" Garhwal Himalayas"},
    {"sn":"6", "name": "Kanchenjunga Base Camp Trek", "price":"123","place":"Sikkim Himalayas"},
    { "sn":"7", "name": "Chadar Trek", "price":"123","place":"Ladakh Himalayas"},
    { "sn":"8", "name": "Gomukh Tapovan Trek", "price":"2342","place":"Garhwal Himalayas"},
    { "sn":"9", "name": "Ladakh Himalayas", "price":"1324","place":"Ladakh Himalayas"},
    { "sn":"10", "name": "Kuari Pass Trek", "price":"513","place":" Garhwal Himalayas"},
    {"sn":"11", "name": "Kanchenjunga Base Camp Trek", "price":"123","place":"Sikkim Himalayas"},
    { "sn":"12", "name": "Chadar Trek", "price":"123","place":"Ladakh Himalayas"},
    { "sn":"13", "name": "Gomukh Tapovan Trek", "price":"2342","place":"Garhwal Himalayas"},
    { "sn":"14", "name": "Ladakh Himalayas", "price":"1324","place":"Ladakh Himalayas"},
    { "sn":"15", "name": "Kuari Pass Trek", "price":"513","place":" Garhwal Himalayas"},
    {"sn":"16", "name": "Kanchenjunga Base Camp Trek", "price":"123","place":"Sikkim Himalayas"},
    { "sn":"17", "name": "Chadar Trek", "price":"123","place":"Ladakh Himalayas"},
    { "sn":"18", "name": "Gomukh Tapovan Trek", "price":"2342","place":"Garhwal Himalayas"},
    { "sn":"19", "name": "Ladakh Himalayas", "price":"1324","place":"Ladakh Himalayas"},
    { "sn":"20", "name": "Kuari Pass Trek", "price":"513","place":" Garhwal Himalayas"},
   ];

  ngOnInit(): void {
  }

}
