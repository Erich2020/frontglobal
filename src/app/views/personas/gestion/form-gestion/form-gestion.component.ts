import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaRepo } from 'src/app/controllers/respositorios/personaRepo';
import { Patterns } from 'src/app/controllers/validaciones';
import { Persona } from 'src/app/models/personas';

@Component({
  selector: 'app-form-gestion',
  templateUrl: './form-gestion.component.html',
  styleUrls: ['./form-gestion.component.css'],
  providers: [PersonaRepo]
})
export class FormGestionComponent implements OnInit {
  message: string = '';
  validacion: string = '';
  @Input() persona: Persona = new Persona();
  width: number = window.innerWidth;

  fPersona: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern(Patterns.nombres)]),
    paterno: new FormControl('', [Validators.required, Validators.pattern(Patterns.nombres)]),
    materno: new FormControl('', [Validators.required, Validators.pattern(Patterns.nombres)]),
    domicilio: new FormControl('', [Validators.required, Validators.pattern(Patterns.domicilio)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(Patterns.telefono)]),
  });

  constructor(private personaWs:PersonaRepo) {}

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.CargarDatosForm();
    
  }
  CargarDatosForm(){
    this.fPersona.get('nombre')?.setValue(this.persona.nombre);
    this.fPersona.get('paterno')?.setValue(this.persona.apaterno);
    this.fPersona.get('materno')?.setValue(this.persona.amaterno);
    this.fPersona.get('domicilio')?.setValue(this.persona.domicilio);
    this.fPersona.get('telefono')?.setValue(this.persona.telefono);
  }
  ObtenerDatosFormulario(){
    this.persona.nombre = this.fPersona.get('nombre')?.value;
    this.persona.apaterno= this.fPersona.get('paterno')?.value;
    this.persona.amaterno= this.fPersona.get('materno')?.value;
    this.persona.domicilio= this.fPersona.get('domicilio')?.value;
    this.persona.telefono= this.fPersona.get('telefono')?.value;
  }

  @Input() LimpiarForm(){
    this.persona = new Persona();
    this.fPersona.get('nombre')?.setValue("");
    this.fPersona.get('paterno')?.setValue("");
    this.fPersona.get('materno')?.setValue("");
    this.fPersona.get('domicilio')?.setValue("");
    this.fPersona.get('telefono')?.setValue("");
  }

  
  Guardar(){
    if (this.persona.id == 0)  
    this.Crear();
  else this.Actualizar();
  }

  async Eliminar() {
    if (this.persona.id > 0) {
      (await this.personaWs.Delete(this.persona.id.toString()))
      .subscribe(x=>{
        this.validacion = (x.isSuccess) ? x.displayMessage : x.errorMessages.toString(); 
        this.LimpiarForm();
      });
    }
  }
  async Crear(){
    this.ObtenerDatosFormulario();
    this.persona.id =0; 
    (await this.personaWs.Create(this.persona))
       .subscribe(async (x) => {
         if(x.isSuccess){
           this.validacion = x.displayMessage;
           this.LimpiarForm();
         }
       });
   }
   async Actualizar(){
      this.ObtenerDatosFormulario();
     (await this.personaWs.Update(this.persona.id.toString(), this.persona))
     .subscribe(async (x) => {
      this.validacion = (x.isSuccess) ? x.displayMessage : x.errorMessages.toString(); 
      this.LimpiarForm();
     });
   }
   suprimirEnter(){
    preventDefault();}
  
  }
function preventDefault() {
  throw new Error('Function not implemented.');
}

