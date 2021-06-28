import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntoventa',
  templateUrl: './puntoventa.component.html',
  styleUrls: ['./puntoventa.component.css']
})
export class PuntoventaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("puntoventa").innerHTML='<object style=" width:100%; height: 100%;" type="text/html" data="}../../assets/PuntoVenta/index.html" ></object>'; 
  }

}
