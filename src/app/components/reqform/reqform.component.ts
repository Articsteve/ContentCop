import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-reqform',
  templateUrl: './reqform.component.html',
  styles: []
})
export class ReqformComponent implements OnInit {

  req:Object = {
  link: null,
  fInicio: null,
  fFin: null,
  }
  constructor() { }

  ngOnInit() {
  }
  guardar( forma:NgForm ){

  console.log("ngForm ",forma );
  console.log("Valor forma", forma.value  );

  console.log("Request", this.req );

  }


}
