import { Component, OnInit } from '@angular/core';
import {Cliente} from "../models/Clientes";
import {Venta} from "../models/Ventas";
import {ServicioClientesService} from "../servicio-clientes.service";
import {ServicioVentasService} from "../servicio-ventas.service";

@Component({
  selector: 'app-ventas-resumido',
  templateUrl: './ventas-resumido.component.html',
  styleUrls: ['./ventas-resumido.component.css']
})
export class VentasResumidoComponent implements OnInit {
  list: Venta[];

  constructor(
    public ventaService: ServicioVentasService
  ) { }

  ngOnInit(): void {
    this.list = this.ventaService.getVentas();
  }


}
