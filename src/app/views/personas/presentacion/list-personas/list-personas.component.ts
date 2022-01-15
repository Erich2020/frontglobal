import { Component, Input, OnInit, Output } from '@angular/core';
import { PersonaRepo } from 'src/app/controllers/respositorios/personaRepo';
import { Persona } from 'src/app/models/personas';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css'],
  providers: [PersonaRepo],
})
export class ListPersonasComponent implements OnInit {
  @Input() personas: Array<Persona> = new Array<Persona>();
  @Output() btnModificar:EventEmitter<Persona> = new EventEmitter<Persona>();
  constructor(private personWs: PersonaRepo) {}
  validacion: string = '';
  ngOnInit(): void {}
  Modificar(person: Persona) {
    this.btnModificar.emit(person);
  }

  async Eliminar(person: Persona) {
    if (person.id > 0) {
      (await this.personWs.Delete(person.id.toString())).subscribe((x) => {
        this.validacion = x.isSuccess
          ? x.displayMessage
          : x.errorMessages.toString();
          this.personas = new Array<Persona>();
      });
    }
  }
}
