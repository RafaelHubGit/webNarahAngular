import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-narah',
  templateUrl: './narah.component.html',
  styleUrls: ['./narah.component.css']
})
export class NarahComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("narah").innerHTML='<object style=" width:100%; height: 100%;" type="text/html" data="}../../assets/narah/index.html" ></object>';
  }

}
