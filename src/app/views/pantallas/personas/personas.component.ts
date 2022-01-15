import { Component,  OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaRepo } from 'src/app/controllers/respositorios/personaRepo';
import { Persona } from 'src/app/models/personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaRepo],
})
export class PersonasComponent implements OnInit {
  fbusqueda: FormGroup = new FormGroup({
    busqueda: new FormControl(''),
    filtro: new FormControl(''),
  });
  width = window.innerWidth;
  toggle: boolean = false;
  filtro: number = 1;
  personas: Array<Persona> = new Array<Persona>();
  persona: Persona = new Persona();
  validacion: string = '';

  constructor(private personaWs: PersonaRepo) {}

  ngOnInit(): void {

  }

  Buscar() {
    this.toggle = false;
    this.cambio();
    this.personas = new Array<Persona>();
    if(this.fbusqueda.get('busqueda')?.value==""){
      this.Busqueda();
    }else
    {switch (this.filtro) {
      case 1:
        this.BusquedaNombre();
        break;
      case 2:
        this.BusquedaPaterno();
        break;
      case 3:
        this.BusquedaMaterno();
        break;
      default:
        this.Busqueda();
        break;
    }}

  }
  suprimirEnter(){
    preventDefault()}

  LimpiarCampos() {
    this.fbusqueda.get('busqueda')?.setValue('');
    this.validacion = '';
  }
  async BusquedaNombre() {
      (
        await this.personaWs.GetByIdNombre(this.fbusqueda.get('busqueda')?.value)
      ).subscribe(async (x) => {
        if (x.isSuccess && x.result != undefined) {
          this.personas = JSON.parse(x.result.toString());
        } else {
          this.validacion = 'Sin Personas Registradas';
        }
      });
    this.fbusqueda.get('busqueda')?.setValue('');
    this.validacion = '';
  }

  async Busqueda() {
      (
        await this.personaWs.GetAll()
      ).subscribe(async (x) => {
        if (x.isSuccess && x.result != undefined) {
          this.personas = JSON.parse(x.result.toString());
        } else {
          this.validacion = 'Sin Personas Registradas';
        }
      });
    this.fbusqueda.get('busqueda')?.setValue('');
    this.validacion = '';
  }

  async BusquedaPaterno() {
      (
        await this.personaWs.GetByIdPaterno(this.fbusqueda.get('busqueda')?.value)
      ).subscribe(async (x) => {
        if (x.isSuccess && x.result != undefined) {
          this.personas = JSON.parse(x.result.toString());
        } else {
          this.validacion = 'Nombre de Usuario no Éxiste';
        }
      });
    this.fbusqueda.get('busqueda')?.setValue('');
    this.validacion = '';
  }

  async BusquedaMaterno() {
      (
        await this.personaWs.GetByIdMaterno(this.fbusqueda.get('busqueda')?.value)
      ).subscribe(async (x) => {
        if (x.isSuccess && x.result != undefined) {
          this.personas = JSON.parse(x.result.toString());
        } else {
          this.validacion = 'Sin Personas Registradas';
        }
      });
    this.fbusqueda.get('busqueda')?.setValue('');
    this.validacion = '';
  }

  Nuevo() {
    this.toggle = true;
    this.persona = new Persona();
  }
  btnModificar(person: Persona) {
    this.persona = person;
    this.toggle = true;
  }

  cambio() {
    this.filtro = Number.parseInt(this.fbusqueda.get('filtro')?.value);
  }
}
function preventDefault() {
  throw new Error('Function not implemented.');
}

