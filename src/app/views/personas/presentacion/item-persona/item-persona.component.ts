import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/models/personas';

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.css']
})
export class ItemPersonaComponent implements OnInit {

  
  @Input() persona:Persona = new Persona();
  @Output() modificar:EventEmitter<Persona> = new EventEmitter();
  @Output() eliminar:EventEmitter<Persona>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  Modificar(person:Persona){
    this.modificar.emit(person);
  }
  Eliminar(person:Persona){
    this.eliminar.emit(person);
  }

}
